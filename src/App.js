import React from 'react';
import { Route } from 'react-router';
import Header from './components/Header/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { setPizzas } from './redux/actions/pizzasAC'

function App() {
  const dispatch = useDispatch()
  const {items} = useSelector(({ filter, pizzas }) => {
    return{
      items: pizzas.items,
      sortBy: filter.sortBy,
    }
  })
  
  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json')
      .then(({ data }) => {
        dispatch(setPizzas(data.pizzas))
      })
  }, [])
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path='/' render={() =>
          <Home
            items={items}
          />} exact />
        <Route exact path='/cart' component={Cart} />
      </div>
    </div>
  );
}

export default App;
