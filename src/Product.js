import React from "react";
import star from "./images/estrella.svg";
import eye from "./images/ojo.svg";
import cart from "./images/carrito.svg";

const Product = () => {
    return (
        <div className="product">
            <div className="pic-valoration">
                <img
                    src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                    alt="product"
                />

                <div className="valoration-container">
                    <div className="star-container">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>

                    <div className="discount"> -7% </div>
                </div>

                <div className="product-buttons">
                    <div>
                        <img src={eye} alt="eye" />
                    </div>
                    <div>
                        <img src={cart} alt="cart" />
                    </div>
                </div>
            </div>

            <p> Herrvidor de te </p>
            <h3>
                {" "}
                12 € <span className="previous-price"> 15 €</span>
            </h3>
        </div>
    );
};

export default Product;
