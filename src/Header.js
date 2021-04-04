import React from "react";
import logo from "./images/patterson-agency-logo.png"
import cart from "./images/carrito.svg"
import { Link } from "react-router-dom";



const Header = () => {
        return(
   <header className="padding-10vw">

        <Link to="/">  
        <img src={logo} alt="logo"/>
        </Link>
        
        <Link to="/cartpage"> 
        <div className="cart-container">
               <img src={cart} alt="cart icon" className="cart-icon"/> 
         <div>
                 <p>0.00 €</p>
                 <h3>Mi Carrito</h3>
         </div>
        </div>
        </Link>
        
        </header>

        )

}


export default Header;