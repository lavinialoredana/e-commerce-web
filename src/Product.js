import React from "react";
import star from "./images/estrella.svg";
import eye from "./images/ojo.svg";
import cart from "./images/carrito.svg";

const Product = ({productId ,image, title, price, valoration, discount, addItem, cartDetails}) => {

    const starArray = [... new Array(valoration)];
    const fullPrice = (price / (1 - (discount / 100))).toFixed(2);

    const addToCart = () => {
        
      const cartArray = [...cartDetails];
      cartArray.push({productId, 
        image,
        title,
        price})
        
        addItem(cartArray)
    }

    return (
        <div className="product">
            <div className="pic-valoration">
                <img
                    src={image}
                    alt="product"
                />

                <div className="valoration-container">
                    <div className="star-container">
                        {
                        starArray.map( e => <img src={star} alt="" />)
                        }
                    </div>
                    
                     { discount ? <div className="discount"> -{discount}%</div> : null}
                </div>

                <div className="product-buttons">
                    <div>
                        <img onClick = {addToCart}  src={cart} alt="cart" />
                    </div>
                    <div>
                        <img src={eye} alt="eye" />
                    </div>
                </div>
            </div>

            <p> {title} </p>
            <h3> {price} € 
            {discount ?  <span className="previous-price"> {fullPrice } €</span> : null }
            </h3>
        </div>
    );
};

export default Product;
