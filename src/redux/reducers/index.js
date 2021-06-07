import { combineReducers } from 'redux'
import filterReducer from './filterRED'
import pizzaReducer from './pizzaRED'



const rootReducer = combineReducers({
   filter: filterReducer,
   pizzas: pizzaReducer,
})

export default rootReducer