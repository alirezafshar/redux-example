import {configureStore} from '@reduxjs/toolkit'
import bugReducer from '../redux/reducer/bugSlice'
import counterReducer from '../redux/reducer/counterSlice'

const store = configureStore({
    reducer: {
        bug: bugReducer,
        counter: counterReducer
    }
})

export default store