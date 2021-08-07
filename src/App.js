import './App.css';
import Login from './components/Login/Login';
import NotMatch from './components/NotMatch/NotMatch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Book from './components/Book/Book';
import { createContext } from 'react';
import { useState } from 'react';
import Profile from './components/Profile/Profile';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p> email: {loggedInUser.displayName} </p>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/book/:id">
            <Book></Book>
          </PrivateRoute>
          <PrivateRoute path="/profile">
            <Profile></Profile>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotMatch></NotMatch>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
