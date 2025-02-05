import { configureStore } from "@reduxjs/toolkit";
import bugReducer from "../redux/reducer/bugSlice";
import counterReducer from "../redux/reducer/counterSlice";
// import { createStore } from 'redux'
// import reducer from './reducer/reducer'

const store = configureStore({
  reducer: {
    bug: bugReducer,
    counter: counterReducer,
  },
});

// example for redux version without toolkit
// const store = createStore(reducer)

export default store;
