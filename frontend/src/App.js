import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header.js';
import Recipe from './components/Recipe.js';
import Cart from './components/Cart.js';
import RecipeList from './components/RecipeList.js';
import About from './pages/About.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  render(){
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'>
            <main id='browse'>
              <RecipeList />
              <Cart />
            </main>
          </Route>
          <Route path='/recipe'>
            <main id='browse'>
              <Recipe />
              <Cart />
            </main>
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
