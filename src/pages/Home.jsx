import React from 'react';
import Categories from "../components/Categories";
import SortPopup from "../components/SortPopup";

const Home = () => {
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={(name)=>console.log(name)}
                    items={['Мясные', 'Вегетарианская',
                        'Гриль', 'Острые', 'Закрытые']}/>
                <SortPopup
                    items={['популярности', 'цене',
                        'алфавиту']}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">

            </div>
        </div>
    );
};

export default Home;