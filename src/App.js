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
            <Route path='/post/:post_id' component={Post}/>
            <Route path='/form' component={Form}/>
          </Switch>
        </HashRouter>
      );
    }
  }

export default App;


// Here is a comprehensive list of missing competencies:

// HTML - Elements (link), DONE
// HTML - Script, DONE
// React - Routing (match object), DONE
// React - Redux (store, reducer), DONE
// React - Redux (actions, action builders, mapDispatchToProps object), DONE
// React - Redux (connect, mapStateToProps, share state), DONE
// Server - REST (PUT endpoint), DONE
// Server - REST (queries), DONE
// Server - Auth (sessions), DONE
// Server - Middleware(Request level) filter bad words DONE
// Server - Middleware (Top level) deving set proxy user DONE
// DB - Statements (join), DONE
// DB - Patterns (one-many), DONE
// DB - Patterns (one-one), DONE
// DB - Patterns (many-many), DONE
// DB - Statements (sub-queries) Done

// Plus 5 bonus (marked with a +) flex, animations, fancy, pseudo, vid(aud)
//verbals DONE

//codewars  DONE
//linkedin DONE
//resume
//portfolio
//testing

