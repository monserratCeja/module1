import React from 'react';

function Input(props) {
	return (
		<div>
			<label htmlFor='title'>{props.labelTitle}</label>
			<input type='text' placeholder={props.placeholder}></input>
		</div>
	);
}
export default Input;
