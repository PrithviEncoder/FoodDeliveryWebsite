import { useContext, useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Cart from './pages/Cart/Cart.jsx'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'
import Footer from './components/Footer/Footer.jsx'
import LoginPopup from './components/LoginPopup/LoginPopup.jsx'
import { StoreContext } from './ContextApi/StoreContext.jsx'
import ProtectRoutes from './ProtectRoutes/ProtectRoutes.js'


function App() {
  const { showPopup } = useContext(StoreContext)

  return (
    <>

      {showPopup ? <LoginPopup /> : <></>}

      <div id="app">
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<ProtectRoutes><Cart /></ProtectRoutes>} />
          <Route path='/order' element={<ProtectRoutes><PlaceOrder /></ProtectRoutes>} />
        </Routes>

        <Footer />
      </div>

    </>
  )
}


export default App
