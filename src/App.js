import React, { Component } from 'react';
import './App.css';
import Auth from './Components/Auth/Auth'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Post from './Components/Post/Post'
import {HashRouter, Switch, Route } from 'react-router-dom'


class App extends Component {
    render() {

      return (
        <HashRouter>
          <Switch>
            <Route path='/' exact component={Auth}/>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/post/:postid' component={Post}/>
            <Route path='/form' component={Form}/>
          </Switch>
        </HashRouter>
      );
    }
  }

export default App;
