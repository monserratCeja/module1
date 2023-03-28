import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import styles from './Login.css';
// redux
import { setUser } from '../../store/selectors';
import { getUserAction } from '../../store/user/actions';
import { useSelector, useDispatch } from 'react-redux';
import { getAuthors, getCourses } from '../../services/services';
import { getCoursesAction, getCoursesThunk } from '../../store/courses/actions';
import { getAuthorsAction, getAuthorsThunk } from '../../store/authors/actions';

function Login() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const stateUser = useSelector((state) => setUser(state));
	const dispatch = useDispatch();

	function handleClick(e) {
		e.preventDefault();
		console.log('clicked login');
		postLogin();
	}

	const userData = {
		name,
		password,
		email,
	};

	const postLogin = async () => {
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
			localStorage.setItem('data', result.result);
			dispatch(getUserAction(result));
			console.log('results from login saved in store: ', stateUser);
			//getCourses().then((data) => dispatch(getCoursesAction(data)));
			//getAuthors().then((data) => dispatch(getAuthorsAction(data)));
			dispatch(getCoursesThunk());
			dispatch(getAuthorsThunk());

			navigate('../courses', { replace: true });
		} else {
			alert('datos incorrectos');
		}
	};

	useEffect(() => {
		console.log('user POST');
		console.log(stateUser);
	}, [stateUser]);
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
