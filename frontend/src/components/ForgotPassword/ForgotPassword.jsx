import React, { useContext, useState } from 'react'
import './ForgotPassword.css'
import { StoreContext } from '../../ContextApi/StoreContext.jsx'
import axios from 'axios'


const ForgotPassword = () => {
    const [mess, setMess] = useState("")
    const [email,setEmail]=useState("")
    const { setShowForgotPopup,SERVER_URL} = useContext(StoreContext)
    
    const onChangeHandler = (event) => {
        setEmail(event.target.value)
    }

    const onSubmitHandler =  (event) => {
        event.preventDefault()
        axios.post(SERVER_URL + "/api/user/forgot", { email })
        .then((response) => {
            setMess(response.data.message)
        })
        .catch((error) => {
                setMess(error.response?.data?.message)
                console.log(error.response?.data?.message||"Error in forgot email")
           })
   }


  return (
    <div className="forgot-password-container">
    <form onSubmit={onSubmitHandler} className="forgot-password-form">
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        className="input-field"
        required
        onChange={onChangeHandler}
        value={email}
      />
      <button type="submit" className="submit-btn">
        Send Reset Link
              </button>
              <p onClick={() => setShowForgotPopup(false)} className='back'>back</p>
              <p className='error'>{ mess }</p>
    </form>
  </div>
  
  )
}

export default ForgotPassword