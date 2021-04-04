import React from "react";
import CartProduct from "./CartProduct";
const CartPage = () => {
    return (
        <>
            <div className="cart-grey-background"> </div>

            <div className="cart-container padding-10vw ">
                <div className="cart-product-container cart-grey-border">
                    <h2 className="cart-header"> CARRITO</h2>
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
                </div>

                <div className="cart-container-shopping-details">
                    <div className="cart-grey-border">
                        <div className="shopping-details">
                            <p> 1 articulo</p>
                            <h3> 34,50 € </h3>
                        </div>
                        <div className="finish-order">
                            <button className="disabled-button"> FINALIZAR COMPRA</button>
                        </div>
                    </div>

                    <div className="cart-discount-container">
                        <p>Codigo de descuento</p>
                        <input type="text" />
                        <button> APLICAR</button>
                    </div>
                </div>
            </div>

            <p className="cart-footer padding-10vw"> &lt; Seguir comprando </p>
        </>
    );
};

export default CartPage;
