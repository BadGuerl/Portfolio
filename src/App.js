import React, { Component } from 'react';
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import { Switch, Route, Redirect } from 'react-router-dom';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path='/home' component={Home}/> 
          <Route path='/about' component={About}/>
          <Route path='/projects' component={Projects}/>
          <Redirect exact path='/home'/>
        </Switch>
      </div>
    );
  }
}
 
export default App;
