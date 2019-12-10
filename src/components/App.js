import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Landing/';
import Login from './Login/';
import Error from './Error/';
import '../index.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/auth" component={Login} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
};

export default App;
