import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Landing/';
import Login from './Login/';
import Error from './Error/';
import Dashboard from './Dashboard/layout/dashboardLayout';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import store from '../store';
import { Provider } from 'react-redux';
import '../index.css';

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route path="/" component={Landing} exact />
					<Route path="/auth" component={Login} />
					<Route path="/design" component={Dashboard} />
					<PrivateRoute path="/dashboard" component={Dashboard} />
					<Route component={Error} />
				</Switch>
			</Router>
		</Provider>
	);
};

export default App;
