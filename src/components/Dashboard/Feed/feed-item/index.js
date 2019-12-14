import React from 'react';
import './style.css';

export default ({}) => {
	const content = {
		category: 'success',
		message: 'Right on! Your account has been updated.',
	};
	return (
		<div className={`Toast Toast--${content.category}`}>
			<main className="Toast__message">
				<header className="Toast__message-category">{content.category}</header>
				<p className="Toast__message-text">{content.message}</p>
			</main>
			{/* <button className="Toast__button" type="button" onClick={() => props.dismiss(props.id)}>
        Dismiss
      </button> */}
		</div>
	);
};
