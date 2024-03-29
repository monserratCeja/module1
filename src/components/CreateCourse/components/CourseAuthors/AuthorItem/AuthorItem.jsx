import React, { useState } from 'react';
import Button from '../../../../../common/Button/Button';

function AuthorItem(props) {
	return (
		<div key={props.id}>
			<p>{props.name}</p>
			<Button
				buttonText='Add author'
				handleClick={() => props.handleClick(props.id)}
			/>
		</div>
	);
}
export default AuthorItem;
