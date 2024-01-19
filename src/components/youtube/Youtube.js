import '../../App.css';
import {BrowserRouter, Route,Switch} from "react-router-dom";
import Home from "./Home"
import CourseStructure from "./CourseStructure"
function Youtube() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
    <Route exact path="/sermon" >
    <Home />
    </Route>
    <Route path="/:coursename">
    <CourseStructure/>
    </Route>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default Youtube;
 