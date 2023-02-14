import React from 'react';
import styles from './Header.css';

import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';

function Header(props) {
	return (
		<div className='header--bar'>
			<div className='logo--left'>
				<Logo />
			</div>
			<p>{props.userName}</p>
			<div className='header--options-right'>
				<Button buttonText='Click me' />
			</div>
		</div>
	);
}

export default Header;
