import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import News from "./News";
import Contact from "./Contact";
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Route, Switch} from "react-router-dom";
import './home.css';


class App extends Component{
  
  render(){
    return (
      <BrowserRouter>
        <div>
          <Nav />
            <Switch>
              <Route path ="/" exact component= {Home}/>
              <Route path ="/news" component= {News}/>
              <Route path ="/contact" component= {Contact}/>
            </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
  
}
class Home extends Component{
  render(){
    return(
      <div className='home'>
        <h1><center>Dashboard</center></h1>
      </div>
      
    )
  }
}

export default App;
