/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/no-unescaped-entities

import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

// 1 we import the Navbar css file
import './Navbar.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {


  const [menu, setMenu] = useState("Home");

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>

       <div>{ /* Added logo */ }</div> 
          <Link to='/'><img src= {assets.logo} alt="" className="logo" /></Link>

        <div>{ /* Added  navbar components */ }</div> 
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
            <a href="#explore-menu" onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
            <a href="#app-download" onClick={()=>setMenu("Special")} className={menu==="Special"?"active":""}>Special</a>      
            <a href="#footer" onClick={()=>setMenu("Contact Us")} className={menu==="Contact Us"?"active":""}>Contact Us</a>     
        </ul>
        <div>{ /* Footer */ }</div> 
        <div>{ /* Todays special ya hottest deals */ }</div>

        <div>{ /* To include icons in right side */ }</div>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" /> 

            <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount()===0?" ":"dot"}></div>
            </div>

            <button onClick={()=> setShowLogin(true)}>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar

// Add the navbar component to your app

// Here you have defined all the html of your navbar and styling will be through css