import React, {useEffect, useState} from 'react'
import Header from "./components/Header";
import Home from "./pages/Home";
import {BrowserRouter, Route} from "react-router-dom";
import Cart from "./pages/Cart";

function App() {
    const [pizzas, setPizzas]=useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/db.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setPizzas(data.pizzas);
            });
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