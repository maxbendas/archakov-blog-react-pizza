import React from 'react'
import {Route} from "react-router-dom";
import {useSelector} from "react-redux";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
    const items = useSelector(state => state.pizzas.items);
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path="/" render={() => <Home items={items}/>} exact/>
                <Route path="/cart" component={Cart}/>
            </div>
        </div>
    );
}

export default App
