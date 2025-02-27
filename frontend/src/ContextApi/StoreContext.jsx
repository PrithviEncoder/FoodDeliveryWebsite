import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const StoreContext = createContext();

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})

    const [food_list, setFood_list] = useState([])

    const SERVER_URL = "http://localhost:8000"

    const [token, setToken] = useState("")


    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems(prev => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmount = () => {
        let TotalAmount = 0;

        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = food_list.find((product) => product._id === item)
                TotalAmount += itemInfo.price * cartItems[item]
            }
        }

        return TotalAmount;
    }

    const fetchFoodList = async () => {
        await axios.get(SERVER_URL + "/api/food/list")
            .then(response => {
                setFood_list(response.data.data)
            })
            .catch(error => {
                console.log("Error in fetching food list", error.response?.data?.message);
            })
    }


    //to check in console for items in cart
    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])

    //when page refresh it will run
    useEffect(() => {
        async function loadData() {
            await fetchFoodList()//load list on reload
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
            }//stay login on reload
        }
        loadData()
    }, [])

    const contextValue = {
        food_list,
        cartItems,
        SERVER_URL,
        token,
        setFood_list,
        setToken,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider