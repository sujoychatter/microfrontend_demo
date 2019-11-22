import React, { Component} from "react";
import { HashRouter as Router, Route } from 'react-router-dom';
import "../css/App.css";

import { Home } from '../../app/components/Home';

import { setupConfig as booksConfig } from 'ms-books';
import { setupConfig as clothingConfig } from 'ms-clothing';
import { setupConfig as electronicsConfig } from 'ms-electronics';
import { setupConfig as foodConfig } from 'ms-food';
import { setupConfig as consmeticsConfig } from 'ms-cosmetics';
import { setupConfig as watchesConfig } from 'ms-watches';

export const allConfig = [
  booksConfig,
  clothingConfig,
  electronicsConfig,
  foodConfig,
  consmeticsConfig,
  watchesConfig,
];

class App extends Component{
  render(){
    return(
      <div id="app-wrapper">
        <Router history={history}>
          {allConfig.map(({ url, Component }) => <Route key={url} path={url} exact component={Component} />)}
          <Route path="/" exact component={Home} />
        </Router>
      </div>
    );
  }
}

export default App;