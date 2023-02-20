import React from 'react';
import { getUserName } from '../../../../../helpers/getUserName';
import Button from '../../../../../common/Button/Button';

function AuthorSelectedItem(props) {
	return (
		<div key={props.item}>
			<p>{getUserName(props.item)}</p>
			<Button
				handleClick={() => props.unselectAuthor(props.item)}
				buttonText='Unselect author'
			/>
		</div>
	);
}

export default AuthorSelectedItem;
