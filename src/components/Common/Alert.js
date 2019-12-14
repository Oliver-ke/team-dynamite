import React, { Fragment } from 'react';
import { Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CustomAlert = ({ state, type, content, closeHandler }) => {
	return (
		<Fragment>
			{state ? (
				<Alert variant={type} onClose={closeHandler} dismissible>
					<p>{content}</p>
				</Alert>
			) : null}
		</Fragment>
	);
};

CustomAlert.propTypes = {
	state: PropTypes.bool.isRequired,
	type: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	closeHandler: PropTypes.func.isRequired,
};

export default CustomAlert;
