import React from 'react';
import styles from './Header.css';

import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';

function Header(props) {
	return (
		<div className='header--bar'>
			<div className='logo--left display-flex'>
				<Logo />
			</div>

			<div className='display-flex header--options-right'>
				<p className='text--white'>{props.userName}</p>
				<Button buttonText='Log out' />
			</div>
		</div>
	);
}

export default Header;
