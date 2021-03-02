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
import { getUserFromLocalStorage, putUserInLocalStorage } from './utils/local-storage-utils.js';

// need to put these things in the right place, putting them here for now
state = {
  user: getUserFromLocalStorage()
}

handleUserChange = (user) => {
  this.setState({ user })
  putUserInLocalStorage(user);
}

function App() {
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

export default App;
