import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import RecipeDetails from "./Components/RecipeDetails";
import PhotoWall from "./Components/PhotoWall";
import AddPhoto from "./Components/AddPhoto";
import Single from "./Components/Single";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/addpost" component={AddPhoto} />
          <Route path="/details" component={RecipeDetails} />
          <Route exact path="/" component={PhotoWall} />
          <Route path="/single/:id" component={Single} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
