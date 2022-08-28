import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import React, { Component } from 'react';
import './App.css';
import Menu from "./layout/Menu";
import NotFound from "./pages/NotFound";
import Bilgi from "./pages/Bilgi";
import AddCarpet from "./forms/AddCarpet";
import UpdateCarpet from "./forms/UpdateCarpet";
import Carpets from "./components/Carpets";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container"> 
         <Menu title = "MrYed App"/>
          <hr/>
          <Switch>
            <Route exact path = "/" component = {Carpets} />
            <Route exact path = "/yeni" component = {AddCarpet} />
            <Route exact path = "/bilgi" component = {Bilgi} />
            <Route exact path = "/edit/:id" component = {UpdateCarpet} />
            <Route component = {NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
