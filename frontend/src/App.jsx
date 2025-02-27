import { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Cart from './pages/Cart/Cart.jsx'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'
import Footer from './components/Footer/Footer.jsx'
import LoginPopup from './components/LoginPopup/LoginPopup.jsx'


function App() {

  const [showPopup, setShowPopup] = useState(false);

  return (
    <>

      {showPopup ? <LoginPopup setShowPopup={ setShowPopup } /> : <></>}

      <div id="app">
        <Navbar setShowPopup={ setShowPopup } />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>

        <Footer />
      </div>

    </>
  )
}


export default App
