import { createStore, combineReducers } from 'redux'
import { AuthReducer } from './reducers/auth.reducer'

export const store = createStore(
    combineReducers({ AuthReducer })
)