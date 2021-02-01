import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Categories from "../components/Categories";
import SortPopup from "../components/SortPopup";
import PizzaBlock from "../components/PizzaBlock";
import {setCategory} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";

const categoryNames = ['Мясные', 'Вегетарианская',
    'Гриль', 'Острые', 'Закрытые']

const sortItems = [{name:'популярности', type:'popular'},
    {name:'цене', type:'price'},
    {name:'алфавиту', type:'alphabet'}]

const Home = () => {
    const items = useSelector(({pizzas}) => pizzas.items);
    const dispatch = useDispatch()

    useEffect(() => {
            dispatch(fetchPizzas())
    }, [])

    const onSelectCategory = useCallback((index)=>{
        dispatch(setCategory(index))
    },[])

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={onSelectCategory}
                    items={categoryNames}/>
                <SortPopup
                    items={sortItems}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    items && items.map(obj=><PizzaBlock key={obj.id} {...obj} />)
                }
            </div>
        </div>
    );
};

export default Home;