import React from 'react'
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort/Sort';

function Home({ pizzas }) {
  return (
    <div className="container">
      <div className="content__top">

        <Categories
          onClickItem={(name) => console.log(name)}
          items={['Мясные', 'Вегетирианские', 'Гриль', 'Острые', 'Закрытые']} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">


        {
          pizzas.map((obj) =>
            <PizzaBlock       
              key={obj.id}
              {...obj}

            />)
        }


      </div>
    </div>

  )
}

export default Home
