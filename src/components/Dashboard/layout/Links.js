import React from 'react';
import { Button } from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';

const Links = ({ location }) => {
	console.log(location);
	return (
		<nav className="mobile-nav">
			<div>
				<Link to="/dashboard/" className="sidenav-links">
					Feeds
				</Link>
			</div>

			<div>
				<Link to="/dashboard/pinnedfeeds" className="sidenav-links">
					Pinned
				</Link>
			</div>

			<div>
				<Link to="/dashboard/users" className="sidenav-links">
					Users
				</Link>
			</div>
			<div>
				<Button className="btn-danger">Logout</Button>
			</div>
		</nav>
	);
};

export default withRouter(Links);
