import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
//import useCourseList from '../../../../../customHooks/useCourseList';
import Button from '../../../../../common/Button/Button';
import Header from '../../../../Header/Header';
import { getCoursesDuration } from '../../../../../helpers/getCoursesDuration';
//redux
import { useSelector } from 'react-redux';

function CourseInfo() {
	const [courseFiltered, setCourseFiltered] = useState([]);
	const params = useParams();
	const state = useSelector((state) => state.courses.courses);

	function filterById(id) {
		const specificCourse = state.filter((course) => course.id === id);
		setCourseFiltered(specificCourse);
	}

	useEffect(() => {
		filterById(params.courseId);
	}, []);
	useEffect(() => {
		console.log('cambió curso filtrado');
		console.log(courseFiltered);
	}, [courseFiltered]);

	return (
		<div>
			<Header />
			<Link to='/courses'>
				<Button buttonText='return to Courses' />
			</Link>
			<h2>Course info</h2>
			{courseFiltered !== null
				? courseFiltered.map((item) => (
						<div key={item.id}>
							<h2>Titulo del curso: {item.title}</h2>
							<p>
								<b>descripción del curso: </b>
								{item.description}
							</p>
							<p>
								<b>id: </b>
								{item.id}
							</p>
							<p>
								<b>Duration: </b>
								{getCoursesDuration(item.duration)}
							</p>
							<p>
								<b>Authors:</b>
								{item.authors}
							</p>
						</div>
				  ))
				: 'no hay info'}
		</div>
	);
}

export default CourseInfo;
