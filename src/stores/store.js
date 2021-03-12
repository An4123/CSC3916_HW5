import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import authReducer from '.../reducers/authReducer'
import movieReducer from '.../reducers/movieReducer'
const middleWare = [thunk]


if (process.env.NODE_ENV === 'development'){
    const { logger } = require('redux-logger')

    middleWare.push(logger)
}


const store = createStore(
    combineReducers({
        auth: authReducer,
        movie: movieReducer
    }),
    applyMiddleware(
        ...middleWare
    )
)

export default store