import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Landing/';
import Login from './Login/';
import Error from './Error/';
import '../index.css';
import Dashboard from './Dashboard/layout/dashboardLayout';
import UserDashboard from './User'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/auth" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/user/:name" component={UserDashboard} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
};

export default App;
