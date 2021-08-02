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
import Footer from './components/Footer/Footer';
function App() {
  return (
   <Router>
     <Header></Header>
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
        <Footer></Footer>
   </Router>
  );
}

export default App;
