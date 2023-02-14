import React from 'react';
import Button from '../../../../common/Button/Button';

function AuthorItem(props) {
	return (
		<div>
			<p>{props.name}</p>
			<Button buttonText='Add author' />
		</div>
	);
}
export default AuthorItem;
