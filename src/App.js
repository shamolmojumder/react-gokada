import './App.css';
import Login from './components/Login/Login';
import NotMatch from './components/NotMatch/NotMatch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
function App() {
  return (
   <Router>
       <Switch>
       <Route exact path="/">
           <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotMatch></NotMatch>
          </Route>
        </Switch>
   </Router>
  );
}

export default App;
