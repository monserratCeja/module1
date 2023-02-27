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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<App />}>
				<Route path='courses' element={<Courses />} />
				<Route path='courses/:courseId' element={<CourseInfo />} />
				<Route path='login' element={<Login />} />
				<Route path='courses/add' element={<CreateCourse />} />
				<Route path='registration' element={<Registration />}></Route>
				<Route path=':id' element={<CourseInfo />} />
			</Route>
			<Route path='*' element={<App />} />
		</Routes>
	</BrowserRouter>
);
