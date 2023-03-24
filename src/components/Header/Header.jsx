import React, { useEffect, useState } from 'react';
import styles from './Header.css';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';
//Redux
import { useSelector } from 'react-redux';
import { setUser } from '../../store/selectors';

function Header(props) {
	const stateUser = useSelector((state) => setUser(state));
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
				<p className='text--white'>{stateUser.user.name}</p>
				<Link to='/login'>
					<Button handleClick={logout} buttonText='Log out' />
				</Link>
			</div>
		</div>
	);
}

export default Header;
