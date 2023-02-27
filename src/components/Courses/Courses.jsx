import React, { useEffect, useState } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';
import SearchBar from '../../common/SearchBar/SearchBar';
import styles from './Courses.css';
import { getCoursesDuration } from '../../helpers/getCoursesDuration';
import useCourseList from '../../customHooks/useCourseList';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
//import useFetchCourses from '../../customHooks/useFetchCourses';

function Courses(props) {
	const { coursesListArr } = useCourseList();

	const url = 'http://localhost:4000/courses/all';
	const [dataCourses, setDataCourses] = useState([]);

	const getData = async () => {
		const response = await fetch(url);
		const data = await response.json();
		console.log('get data');
		console.log(data.result);
		setDataCourses(data.result);
	};

	useEffect(() => {
		getData();
	}, []);

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

					{dataCourses &&
						dataCourses.map((item) => (
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
