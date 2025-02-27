import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
      <div className="Header">
        <div className="Header-info-box">
          <h2 className='Heading'>Order food </h2>
          <p className='Quote'>Delight in every flavor, every moment.</p>
          <a href="#category">
          <button className='view-btn'>View Items</button>
          </a>
        </div>
      </div>
    </>
  )
}

export default Header