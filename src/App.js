import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
// import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Watch from "./pages/watch/Watch";
import Location from "./pages/location/Location"
import Give from "./pages/give/Give"
import Youtube from "./components/youtube/Youtube"
import Sermon from "./pages/sermon/Sermon"
import ContextProvider from './components/usermanagment/context/ContextProvider';
import About_main from "./pages/about/About_main";
import About from "./pages/about/About";
import Edit from "./pages/about/Edit";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <Home /> 
        </Route>
        <Route path="/login">
        {user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/watch">
            <Watch /> 
        </Route>
        <Route path="/location">
         <Location /> 
        </Route>
        <Route path="/give">
         < Give/> 
        </Route>
        <Route path="/sermon">
         < Sermon/> 
        </Route>

        <ContextProvider>
        <Route path='/about' component={About_main} />
        <Route path='/add_about' component={About} />
        <Route path='/edit/:id'>
        <Edit />
        </Route>
        </ContextProvider>
      </Switch>
    </Router>


  );
}

export default App;
