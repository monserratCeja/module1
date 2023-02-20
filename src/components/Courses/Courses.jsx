import React from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';
import SearchBar from '../../common/SearchBar/SearchBar';
import styles from './Courses.css';
import { getCoursesDuration } from '../../helpers/getCoursesDuration';

function Courses(props) {
	console.log(props.coursesList);
	return (
		<div className='Courses--area'>
			<div className='Courses--searchBar'>
				<SearchBar />
			</div>
			<div className='addNewCourse'>
				<Button
					buttonText='Add new course'
					handleClick={props.handleClickCreateCourse}
				/>
			</div>
			<div className='CourseCard--area'>
				<h1>Hola</h1>
				{props.coursesList.map((item) => (
					<div className='CourseCard--item' key={item.id}>
						<CourseCard
							courseTitle={item.title}
							courseDescription={item.description}
							courseAuthors={item.authors}
							courseDuration={getCoursesDuration(item.duration)}
							courseCreated={item.creationDate}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default Courses;
