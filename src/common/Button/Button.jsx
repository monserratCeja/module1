import React from 'react';
import style from './Button.css';
function Button(props) {
	return (
		<>
			<button onClick={props.handleClick}>{props.buttonText}</button>
		</>
	);
}

export default Button;
