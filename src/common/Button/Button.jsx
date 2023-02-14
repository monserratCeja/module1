import React from 'react';

function Button(props) {
	function handleClickCreateAuthor(e) {
		props.handleClickCreateAuthor({ id: '111', name: 'monse' });
		console.log('crear author');
	}
	return (
		<>
			<button onClick={handleClickCreateAuthor}>{props.buttonText}</button>
		</>
	);
}

export default Button;
