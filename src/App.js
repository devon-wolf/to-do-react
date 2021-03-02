import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import LoginPage from './auth/LoginPage.js';
import SignUpPage from './auth/SignUpPage.js';
import Home from './home/Home.js';
import ToDoListPage from './todo/ToDoListPage.js';
import Header from './common/Header.js';
import { getLocalUser, storeLocalUser } from './utils/local-storage-utils.js';

export default class App extends Component {
  state = {
    user: getLocalUser()
  }
  
  handleUserChange = (user) => {
    this.setState({ user })
    storeLocalUser(user);
  }

  render() {
    return (
      <Router>
          <Header />
          <Switch>
            <Route
                path="/"
                exact
                render={(routerProps) => <Home {...routerProps} />}
            />
            <Route
                path="/login"
                exact
                render={(routerProps) => <LoginPage {...routerProps} />}
            />
            <Route 
                path="/sign-up"
                exact
                render={(routerProps) => <SignUpPage {...routerProps} />}
            />
            <Route 
                path="/todo"
                exact
                render={(routerProps) => <ToDoListPage 
                  user={this.state.user}
                  {...routerProps} />}
            />
          </Switch>
        </Router>
    );
  }
  
}