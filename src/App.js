import React from 'react';
import { Route } from 'react-router';
import Header from './components/Header/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import axios from 'axios'

function App() {

  const [pizzas, setPizzas] = React.useState([])

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json')
    .then((response)=>{
      setPizzas(response.data.pizzas)
    })

  }, [])





  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path='/' render={() =>
          <Home
          pizzas={pizzas}
          />} exact />
        <Route exact path='/cart' component={Cart} />
      </div>
    </div>
  );
}

export default App;
