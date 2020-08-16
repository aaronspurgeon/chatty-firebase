import React, { Component, useState, useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { auth } from './services/firebase';
import "./App.css";

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      }
    />
  )
}

const PublicRoute = ({ component: Component, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === false
        ? <Component {...props} />
        : <Redirect to='/chat' />
      }
    />
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        setIsAuth(true)
        setIsLoading(false)
      } else {
        setIsLoading(false)
        setIsAuth(false)
      }
    })
  }, [])


  return isLoading === true ? <h1>Loading...</h1> : (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <PrivateRoute path='/chat' authenticated={isAuth} component={Chat} />
        <PublicRoute path='/signup' authenticated={isAuth} component={Signup} />
        <PublicRoute path='/login' authenticated={isAuth} component={Login} />
      </Switch>
    </Router>
  )
}

export default App;
