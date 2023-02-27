import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import style from './Registration.css';

function Registration() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	function handleClick(e) {
		e.preventDefault();
		console.log('clicked register');
		postData();
	}

	const postData = async () => {
		const newUser = {
			name,
			password,
			email,
		};
		const response = await fetch('http://localhost:4000/register', {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const result = await response.json();
		if (result.successful) {
			// redirect here
			console.log('sucess');
			alert('Registration Succesful');
			navigate('../login', { replace: true });
		}
	};
	return (
		<div className='registration--div'>
			<h2>Registration</h2>
			<div></div>
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
				<Link className='button-register' to='/login'>
					<Button handleClick={handleClick} buttonText='Register' />
				</Link>
			</form>

			<p className='login--link'>I already have an account</p>
			<Link to='/login'>Login</Link>
		</div>
	);
}

export default Registration;
