import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartPage = () => {
    return (
        <>
            <div className="cart-grey-background"> </div>

            <div className="cart-container">
                <div className="cart-product-container">
                    <h1 className="cart-header"> CARRITO</h1>

                    <div className="cart-product">
                        <img
                            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                            alt=""
                        />
                        <p> Sarten Vintage</p>

                        <h3> € 34,50</h3>

                        <FontAwesomeIcon icon={faTrash} />
                    </div>
                </div>

                <div className="cart-container-shopping-details">
                    <div className="shopping-details-container">
                        <div className="shopping-details">
                            <p> 1 articulo</p>
                            <h3> 34,50 € </h3>
                        </div>

                        <button> FINALIZAR COMPRA</button>
                    </div>

                    <div className="cart-discount-container">
                        <p>Codigo de descuento</p>
                        <input type="text" />
                        <button> APLICAR</button>
                    </div>
                </div>
            </div>

            <h3 className="cart-footer"> &lt; Seguir comprando </h3>

          
        </>
    );
};

export default CartPage;
