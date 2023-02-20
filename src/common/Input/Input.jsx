import React from 'react';

function Input(props) {
	return (
		<div>
			<label htmlFor='title'>{props.labelTitle}</label>
			<input
				type={props.type}
				name={props.name}
				placeholder={props.placeholder}
				onChange={props.onChange}
				value={props.value}
			></input>
		</div>
	);
}
export default Input;
