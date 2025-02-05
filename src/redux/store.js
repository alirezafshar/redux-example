import { configureStore } from "@reduxjs/toolkit";
import bugReducer from "../redux/reducer/bugSlice";
import counterReducer from "../redux/reducer/counterSlice";
import postReducer from "../redux/reducer/postSlice";

// import { createStore } from 'redux'
// import reducer from './reducer/reducer'

const store = configureStore({
  reducer: {
    bugs: bugReducer,
    counter: counterReducer,
    posts: postReducer,
  },
});

// example for redux version without toolkit
// const store = createStore(reducer)

export default store;
