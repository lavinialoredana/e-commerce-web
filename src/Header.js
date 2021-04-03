import React from "react";
import logo from "./images/patterson-agency-logo.png"
import cart from "./images/carrito.svg"



const Header = () => {
        return(
        <header className="padding-10vw">
        <img src={logo} alt="logo"/>
        <div className="cart-container">
        <img src={cart} alt="cart icon" className="cart-icon"/> 
         <div>
                 <p>0.00 €</p>
                 <h3>Mi Carrito</h3>
         </div>
        </div>
        </header>

        )

}


export default Header;