import React, { useState } from 'react';
import styles from './Header.css';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';

function Header(props) {
	const [userName, setuserName] = useState(localStorage.getItem('data'));
	function logout() {
		console.log('logout pressed');
		localStorage.clear();
	}
	return (
		<div className='header--bar'>
			<div className='logo--left display-flex'>
				<Logo />
			</div>

			<div className='display-flex header--options-right'>
				<p className='text--white'>{userName}</p>
				<Link to='/login'>
					<Button handleClick={logout} buttonText='Log out' />
				</Link>
			</div>
		</div>
	);
}

export default Header;
