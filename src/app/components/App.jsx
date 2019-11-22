import React, { Component} from "react";
import { HashRouter as Router, Route } from 'react-router-dom';
import "../css/App.css";

// import { Food } from '../../food/components/Food';
// import { Electronics } from '../../electronics/components/Electronics';
// import { Cosmetics } from '../../cosmetics/components/Cosmetics';
// import { Books } from '../../books/components/Books';

// import { Clothing } from '../../clothing/components/Clothing';

import { Home } from '../../app/components/Home';

import { setupConfig as booksConfig } from '../../books';
import { setupConfig as clothingConfig } from '../../clothing';
import { setupConfig as electronicsConfig } from '../../electronics';
import { setupConfig as foodConfig } from '../../food';
import { setupConfig as consmeticsConfig } from '../../cosmetics';
import { setupConfig as watchesConfig } from '../../watches';

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