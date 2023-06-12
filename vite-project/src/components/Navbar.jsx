import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
        <img src="./img/talentscore.svg" alt="" />
        <div id="span_box">
            <span>Home</span>
            <span>About Product</span>
            <span>About Us</span>
            <span>Contact</span>
        </div>
        <div className='register'>
            <a>Sign in</a>
            <button>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar
