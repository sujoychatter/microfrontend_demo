import React, { Component} from "react";
import { HashRouter as Router, Route } from 'react-router-dom';
import "../css/App.css";

import { Food } from './Food';
import { Electronics } from './Electronics';
import { Cosmetics } from './Cosmetics';
import { Books } from './Books';
import { Home } from './Home';

class App extends Component{
  render(){
    return(
      <div id="app-wrapper">
        <Router history={history}>
          <Route path="/books" exact component={Books} />
          <Route path="/electronics" exact component={Electronics} />
          <Route path="/food" exact component={Food} />
          <Route path="/cosmetics" exact component={Cosmetics} />
          <Route path="/" exact component={Home} />
        </Router>
      </div>
    );
  }
}

export default App;