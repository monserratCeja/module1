import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import styles from './Login.css';

function Login() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	function handleClick(e) {
		e.preventDefault();
		console.log('clicked login');
		putLogin();
	}

	const putLogin = async () => {
		const userData = {
			name,
			password,
			email,
		};
		console.log(userData);
		const response = await fetch('http://localhost:4000/login', {
			method: 'POST',
			body: JSON.stringify(userData),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const result = await response.json();
		if (result.successful) {
			localStorage.setItem('data', result.user.name);
			console.log(result);
			navigate('../courses', { replace: true });
		}
	};
	return (
		<div className='login--div'>
			<h2>Login</h2>

			<form>
				<Input
					onChange={(e) => setName(e.target.value)}
					value={name}
					name='Name'
					placeholder='enter name'
					labelTitle='Name'
				/>
				<Input
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					name='Email'
					placeholder='enter email'
					labelTitle='Email'
				/>
				<Input
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					name='Password'
					placeholder='enter password'
					labelTitle='Password'
				/>
				<Link className='button-login' to='/login'>
					<Button handleClick={handleClick} buttonText='Login' />
				</Link>
			</form>
			<p className='registration--link'>I do not have an account yet</p>
			<Link to='/registration'>Create an account</Link>
		</div>
	);
}

export default Login;
