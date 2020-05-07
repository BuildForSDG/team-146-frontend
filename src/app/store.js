import { createStore, combineReducers } from 'redux'
import { AuthReducer } from './reducers/auth.reducer'

export const store = createStore(
    // Add your reducer functions to the combineReducers object.
    combineReducers({ AuthReducer })
)