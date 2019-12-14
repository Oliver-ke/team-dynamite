import React from 'react';
import { Spinner } from 'react-bootstrap';

export default () => {
	return (
		<Spinner style={styles} animation="border" role="status">
			<span className="sr-only">Loading...</span>
		</Spinner>
	);
};

const styles = {
	display: 'block',
	marginLeft: 'auto',
	marginRight: 'auto',
	marginBottom: '-3rem',
};
