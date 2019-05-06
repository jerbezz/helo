import {createStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import reducer from './reducer'
// import authReducer from './ducks/authReducer'
// import expReducer from './ducks/expReducer'
// import budgetReducer from './ducks/budgetReducer'
import {composeWithDevTools} from 'redux-devtools-extension'



// const rootReducer = combineReducers({
//     auth: authReducer,
//     expense: expReducer,
//     budget: budgetReducer
// })


export default createStore( reducer, composeWithDevTools(applyMiddleware(promiseMiddleware)))