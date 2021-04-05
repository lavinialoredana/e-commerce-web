import "./styles/App.scss";
import {BrowserRouter, Route, Link} from "react-router-dom";
import CartPage from "./CartPage";
import Header from "./Header";
import Showcase from "./Showcase";
import React, {useState, useEffect} from 'react';




function App() {

    const [showcase, setShowcase] = useState([]);
    const [cartProduct, setCartProduct] = useState([]);





     useEffect( () => {
         fetch("https://fakestoreapi.com/products?limit=4")
         .then( response => response.json()) 
         .then(data => setShowcase(data) )
     }, []
     )



    return (
        <BrowserRouter>

            <Header cartDetails={cartProduct}/>
            <Route exact path="/">
            <Showcase productsData = {showcase} addItem={setCartProduct} cartDetails={cartProduct}/>
            </Route>
            <Route exact path="/cartpage">
            <CartPage cartDetails={cartProduct} deleteItem={setCartProduct} />
            </Route>

        </BrowserRouter>
    );
}

export default App;
