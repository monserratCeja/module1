import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/Courses/components/CourseCard/CourseInfo/CourseInfo';
import { Provider } from 'react-redux';
import store from './store/index';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';

import EditCourse from './components/EditCourse/EditCourse';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />}>
					<Route
						path='courses'
						element={
							<PrivateRoute>
								<Courses />
							</PrivateRoute>
						}
					/>
					<Route
						path='courses/:courseId'
						element={
							<PrivateRoute>
								<CourseInfo />
							</PrivateRoute>
						}
					/>
					<Route path='login' element={<Login />} />
					<Route
						path='courses/add'
						element={
							<PrivateRoute>
								<CreateCourse />
							</PrivateRoute>
						}
					/>
					<Route
						path='/courses/update/:courseId'
						element={
							<PrivateRoute>
								<CreateCourse />
							</PrivateRoute>
						}
					/>
					<Route path='registration' element={<Registration />}></Route>
				</Route>
				<Route path='*' element={<App />} />
			</Routes>
		</BrowserRouter>
	</Provider>
);
