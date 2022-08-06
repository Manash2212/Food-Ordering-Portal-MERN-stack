import React from 'react'
import './navbar.css'
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
function Navbar() {
  const history = useNavigate();
  const myState = useSelector((state) => state.cart);
  console.log(myState)
  return (
    <nav>
      <div className="navbar">
        <span className="title" onClick={() => { history('/') }}>
          Food Ordering Portal
        </span>
        <div className="icon" onClick={() => { history('/cart') }}>
          <span>
            <FaShoppingCart />
          </span>
          <span>{myState.cartItems.length}</span>
        </div>
      </div>
    </nav>

  )
}

export default Navbar