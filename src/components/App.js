import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Landing/';
import Login from './Login/';
import Error from './Error/';
import '../index.css';
import Dashboard from './Dashboard/layout/dashboardLayout';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/auth" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
};

export default App;
