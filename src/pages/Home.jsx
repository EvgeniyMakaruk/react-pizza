import React from 'react'
import { useDispatch } from 'react-redux';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort/Sort';
import { setCategory } from '../redux/actions/filterAC';

function Home({ items}) {

  const dispatch = useDispatch()

    return (
    <div className="container">
      <div className="content__top">

        <Categories
          onClickItem={(index) => dispatch(setCategory(index))}
          
          items={['Мясные', 'Вегетирианские', 'Гриль', 'Острые', 'Закрытые']} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">


        {
          items && items.map((obj) =>
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
