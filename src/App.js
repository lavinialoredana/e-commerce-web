import "./styles/App.scss";
import {BrowserRouter, Route, Link} from "react-router-dom";
import CartPage from "./CartPage";
import Header from "./Header";
import Showcase from "./Showcase";


function App() {
    return (
        <BrowserRouter>

            <Header/>
            <Route exact path="/">
            <Showcase/>
            </Route>
            <Route exact path="/cartpage">
            <CartPage/>
            </Route>

        </BrowserRouter>
    );
}

export default App;
