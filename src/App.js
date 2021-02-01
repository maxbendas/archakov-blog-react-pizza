import React, {useEffect, useState } from 'react'
import {Route} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

import {fetchPizzas, setPizzas} from "./redux/actions/pizzas";

const App = () => {

    const dispatch = useDispatch()
    const items = useSelector(state => state.pizzas.items);

    useEffect(() => {
       dispatch(setPizzas())
    }, [])

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
