import React, {useEffect, useState} from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
    const [pizzas, setPizzas]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/db.json')
            .then( (response) =>{
                setPizzas(response.data.pizzas);
            })
    },[])

    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route path="/" render={()=><Home items={pizzas}/>} exact/>
                    <Route path="/cart" component={Cart}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;