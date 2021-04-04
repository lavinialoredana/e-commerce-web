import React from "react";
import Product from "./Product";

const Showcase = () => {
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
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>

                <div className="carroussel-controler"> &gt; </div>
            </div>
        </div>
    );
};

export default Showcase;
