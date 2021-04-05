import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartProduct = ({image, title, price, id, deleteItem, cartDetails}) => {

   const removeItem = () => {
    const newCartArray = [...cartDetails];

     const indexCartProduct = newCartArray.findIndex((cartProduct) => { 
         if(cartProduct.productId === id) return true;
        }
         )
    newCartArray.splice(indexCartProduct, 1);
    
    deleteItem(newCartArray);
   }

    return (
        <div className="cart-product">
            <img src={image} alt="" />
            <h4> {title}</h4>

            <h4> € {price}</h4>

            <FontAwesomeIcon onClick ={removeItem} icon={faTrash} />
        </div>
    );
};

export default CartProduct;
