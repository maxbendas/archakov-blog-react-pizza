import axios from "axios";

export const fetchPizzas = ()=>{
    axios.get('http://localhost:3001/pizzas?_sort=price&_order=asc')
        .then(({data}) => {
            setPizzas(data);
        })
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
})

