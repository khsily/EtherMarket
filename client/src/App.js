import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import{
  Home,
} from './pages';
import { Header, Footer } from './components';
import { nav_list } from './config';

class App extends Component {
  render() {
    const { main: nav } = nav_list;

    return (
      <div id="app">
        <Header navList={nav_list}/>
        <div className='container'>
          <BrowserRouter>
            <Switch>
              <Route exact path={nav[0].to} component={Home} />
            </Switch>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
