import React, { lazy, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  NavLink,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

const Home = lazy(() => import("./components/BugTracker.js"));
const Counter = lazy(() => import("./components/Counter.js"));
const Post = lazy(() => import("./components/Post.js"))

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
          <nav>
            <NavLink to="/">Bug Tracker</NavLink>
            <NavLink to="/counter">Counter</NavLink>
            <NavLink to="/post">Post</NavLink>
          </nav>
          <Suspense fallback="...">
            <Switch>
              <Route exact path={"/"} component={Home} />
              <Route path={"/counter"} component={Counter} />
              <Route path={"/post"} component={Post} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
