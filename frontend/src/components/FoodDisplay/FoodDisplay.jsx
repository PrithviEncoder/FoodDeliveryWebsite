import React, { useContext } from 'react'
import "./FoodDisplay.css"
import { StoreContext } from '../../ContextApi/StoreContext'
import FoodItem from '../FoodItem/FoodItem.jsx'

const FoodDisplay = ({currentCategory}) => {
 
    const { food_list } = useContext(StoreContext)


  return (
      <>
          <div className="food-item-container p-4 mt-10">
              <h2 className="food-item-heading  font-semibold text-lg ml-2 mb-4 sm:text-xl md:ml-20 lg:ml-28 xl:ml-32 md:text-2xl xl:text-3xl">Find your fav food</h2>
          <div className="food-display" id="food-display">
              {
                      food_list.map((item, index) => {
                      
                          if (currentCategory === "All" || currentCategory === item.category) {
                              return <FoodItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description} />
                          }
                      
                      })
              }
              </div>
          </div>
       
      
      </>
  )
}

export default FoodDisplay