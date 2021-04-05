import React, { useState, useEffect } from "react";
import CartProduct from "./CartProduct";


const CartPage = ({cartDetails, deleteItem}) => {

    let totalPrice = 0;
    cartDetails.forEach(cartProduct => {
        totalPrice+= cartProduct.price;
})

    totalPrice= totalPrice.toFixed(2);
    return (
        <>
            <div className="cart-grey-background"> </div>

            <div className="cart-container padding-10vw ">
                <div className="cart-product-container cart-grey-border">
                    <h2 className="cart-header"> CARRITO</h2>

            {cartDetails.map(cartProduct => (
                <CartProduct
                image = {cartProduct.image}
                title = {cartProduct.title}
                price =  {cartProduct.price}
                deleteItem =  {deleteItem}
                id = {cartProduct.productId}
                cartDetails={cartDetails}
                />
            ))}
                    
                </div>

                <div className="cart-container-shopping-details">
                    <div className="cart-grey-border">
                        <div className="shopping-details">
                            <p> {cartDetails.length} articulo</p>
                            <h3> {totalPrice} € </h3>
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
