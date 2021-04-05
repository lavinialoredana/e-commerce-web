import React from "react";
import Product from "./Product";

const Showcase = ({productsData, addItem, cartDetails}) => {
    return (
        <div className="showcase-container">
            <div className="showcase-header padding-10vw">
                <h2> Productos Destacados</h2>

                <ul className="breadcrumbs-list">
                    <li className="active-list"> Todos los Productos </li>
                    <li> / </li>
                    <li> Cocina </li>
                    <li> / </li>
                    <li> Productos Destacados </li>
                </ul>
            </div>

            <div className="showcase-carroussel">
                <div className="carroussel-controler"> &lt; </div>

                <div className="products-container">
                    {productsData.map(product => (
                        <Product
                        cartDetails={cartDetails}
                        addItem={addItem}
                        key= {product.id}
                        productId = {product.id}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        valoration={Math.floor(Math.random()* 5) + 1}
                        discount={Math.floor((Math.random() * 7))}
                        />
                    ))}
                    {/* <Product picture = "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" title="Hervidor de te" price = {10.95} valoration={4} discount = {7} /> */}
                    
                </div>

                <div className="carroussel-controler"> &gt; </div>
            </div>
        </div>
    );
};

export default Showcase;
