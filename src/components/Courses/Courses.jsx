import React, { useEffect, useState } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';
import SearchBar from '../../common/SearchBar/SearchBar';
import styles from './Courses.css';
import { getCoursesDuration } from '../../helpers/getCoursesDuration';
import useCourseList from '../../customHooks/useCourseList';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { useSelector, useDispatch } from 'react-redux';
import { setCourses, setAuthors } from '../../store/selectors';
import { getAuthors, getCourses } from '../../services/services';
import { getCoursesAction } from '../../store/courses/actions';

function Courses(props) {
	const stateCourses = useSelector((state) => setCourses(state));
	const dispatch = useDispatch();

	useEffect(() => {
		getCourses().then((data) => dispatch(getCoursesAction(data)));
	}, []);

	useEffect(() => {
		console.log('courses fetch');
		console.log(stateCourses);
	}, [stateCourses]);

	return (
		<div>
			<Header />
			<div className='Courses--area'>
				<div className='Courses--searchBar'>
					<SearchBar />
				</div>
				<div className='addNewCourse'>
					<Link to='add'>
						<Button buttonText='Add new course' />
					</Link>
				</div>
				<div className='CourseCard--area'>
					<h1>Available courses</h1>

					{stateCourses.length > 0 &&
						stateCourses.map((item) => (
							<div className='CourseCard--item' key={item.id}>
								<CourseCard
									courseTitle={item.title}
									courseDescription={item.description}
									courseAuthors={item.authors}
									courseDuration={getCoursesDuration(item.duration)}
									courseCreated={item.creationDate}
									courseId={item.id}
								/>
							</div>
						))}
				</div>
			</div>
		</div>
	);
}

export default Courses;
