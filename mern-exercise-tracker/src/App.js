import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./component/navbar.component"
import exercisesList from "./component/ExercisesList.component"
import CreateUser from "./component/CreateUser.component"
import Updateexercises from "./component/UpdateExercises.component"
import Createexercises from "./component/CreateExercises.component"

function App() {
  return (
    <Router>
    <div className = "container">
      <Navbar /> 
      <br />
      <Route path='/' exact component={exercisesList} />
      <Route path='/update/:id' component={Updateexercises} />
      <Route path='/create' component={Createexercises} />
      <Route path='/user' component={CreateUser} />
    </div>
      </Router>
  );
}
export default App;
