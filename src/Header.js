import React from "react";
import logo from "./images/patterson-agency-logo.png";
import cart from "./images/carrito.svg";
import { Link } from "react-router-dom";

const Header = ({ cartDetails }) => {
    
    let totalPrice = 0;
    cartDetails.forEach((cartProduct) => {
        totalPrice += cartProduct.price;
    });

    totalPrice= totalPrice.toFixed(2);

    return (
        <header className="padding-10vw">
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>

            <Link to="/cartpage">
                <div className="header-cart-container">
                    <div className="items-counter">
          
                        {cartDetails.length ? cartDetails.length : 0}
            
                    </div>
                    <img src={cart} alt="cart icon" className="cart-icon" />
                    <div>
                        <p>{totalPrice} €</p>
                        <h4>Mi Carrito</h4>
                    </div>
                </div>
            </Link>
        </header>
    );
};

export default Header;
