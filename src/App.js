import React, {useEffect, useState } from 'react'
import {Route} from "react-router-dom";
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

import {setPizzas} from "./redux/actions/pizzas";

const App = () => {

    const dispatch = useDispatch()
    const items = useSelector(state => state.pizzas.items);

    useEffect(() => {
        axios.get('http://localhost:3001/pizzas?_sort=price&_order=asc')
            .then(({data}) => {
                dispatch(setPizzas(data));
            })
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
// const mapStateToProps = (state) => {
//     return {
//         items: state.pizzas.items
//     }
// }
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         setPizzas: (items) => dispatch(setPizzas(items))
//     }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(App)

