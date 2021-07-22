import './App.css';
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages';
import CreateJobListing from './Components/JobListingSection/CreateJobListing';
import Navbar from './Components/Navbar';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/post-a-job'>
          <CreateJobListing />
        </Route>
        {/* <Route path="/movies/:id">
          <Movie />
        </Route> */}

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
