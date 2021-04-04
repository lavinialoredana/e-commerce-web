import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartProduct = () => {
    return (
        <div className="cart-product">
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
            <p> Sarten Vintage</p>

            <h3> € 34,50</h3>

            <FontAwesomeIcon icon={faTrash} />
        </div>
    );
};

export default CartProduct;
