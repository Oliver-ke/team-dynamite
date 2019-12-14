import React, { useState } from 'react';
import { Row, Col, Navbar, Image, Button } from 'react-bootstrap';
import Sidenav from '../sidenav';
import Links from './Links';
import './dashboardLayout.css';
import Users from '../users';
import Feeds from '../feeds';
import PinnedFeeds from '../pinnedFeeds';
import Logo from '../../../images/logo.png';
import { Switch, Route, Link, location } from 'react-router-dom';
import { connect } from 'react-redux';

const DashboardLayout = ({ history, auth }) => {
	const { firstName, lastName } = auth.user;
	return (
		<div>
			<Navbar variant="dark" className="dashboard-nav">
				<div className="brand-container">
					<Navbar.Brand href="#home" style={{ color: '#0D1B4C' }}>
						<img alt="" src={Logo} width="110" height="30" className="d-inline-block align-top" />{' '}
					</Navbar.Brand>
				</div>
				<div className="dashboard-nav-items">
					<span style={{ marginRight: '10px' }}>{`${firstName} ${lastName}`}</span>
					<Image
						src="https://images.fatherly.com/wp-content/uploads/2019/07/what-boys-need-today.jpg?q=65&enable=upscale&w=600"
						height="40"
						width="40"
						alt=""
						roundedCircle
						style={{ marginRight: '50px' }}
					/>
				</div>
			</Navbar>
			<div>
				<Links />
				<Row>
					<Col id="dashboard-layout-sidenav" style={{ zIndex: '1000' }} sm={3}>
						<Sidenav />
					</Col>
					<Col>
						<Switch>
							<Route exact path="/dashboard/" component={Feeds} />
							<Route exact path="/dashboard/users" component={Users} />
							<Route exact path="/dashboard/pinnedfeeds" component={PinnedFeeds} />
						</Switch>
					</Col>
				</Row>
			</div>
		</div>
	);
};

const mapStateToPropes = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToPropes, {})(DashboardLayout);
