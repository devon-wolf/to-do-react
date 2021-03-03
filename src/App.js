import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import PrivateRoute from './todo/PrivateRoute.js'
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
    storeLocalUser(user);
    this.setState({user: getLocalUser()});
  }

  render() {
    console.log('APP STATE', this.state);
    const { user } = this.state;
    return (
      <Router>
          <Header 
          user={this.state.user}
          />
          <Switch>
            <Route
                path="/"
                exact
                render={(routerProps) => 
                <Home
                user={this.state.user}
                {...routerProps} 
                />}
            />
            <Route
                path="/login"
                exact
                render={(routerProps) => 
                <LoginPage 
                user={this.state.user}
                handleUserChange={this.handleUserChange}
                {...routerProps} 
                />}
            />
            <Route 
                path="/sign-up"
                exact
                render={(routerProps) => 
                <SignUpPage 
                user={this.state.user}
                handleUserChange={this.handleUserChange}
                {...routerProps} 
                />}
            />
            <PrivateRoute 
                path="/todo"
                exact
                token={user && user.token}
                render={(routerProps) =>
                  <ToDoListPage 
                  user={this.state.user}
                  {...routerProps}
                  />}
            />
          </Switch>
        </Router>
    );
  }
  
}