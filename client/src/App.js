import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// import { createStore, applyMiddleware } from 'redux';

// import { Provider } from 'react-redux';

// import thunk from 'redux-thunk';
// import logger from 'redux-logger';

// import { friendReducer as reducer } from './reducers';

import Login from "./components/Login";
import "./styles.scss";

// import Friends from './components/Friends';
// import AddFriendForm from './components/AddFriendForm';
import ProtectedRoute from './components/ProtectedRoute';
import BubblePage from './components/BubblePage';

// const store = createStore(reducer, applyMiddleware(thunk, logger));


function App() {
  return (
    // <Provider store={store}>
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <Link to='/login'>Log In</Link>
        <br />
        {/* <Link to='/friends'>Protected Friends page</Link> */}
        <br />
        {/* <Link to='/add'>Want to add a friend?</Link> */}


        <Switch>
          <ProtectedRoute path='/colors' component={BubblePage} />
          {/* <ProtectedRoute path='/add' component={AddFriendForm} /> */}
          <Route component={Login} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
    // </Provider>
  );
}

export default App;