import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import useCourseList from '../../../../../customHooks/useCourseList';
import Button from '../../../../../common/Button/Button';
import Header from '../../../../Header/Header';
import { getCoursesDuration } from '../../../../../helpers/getCoursesDuration';

function CourseInfo() {
	//const { coursesListArr } = useCourseList();
	const [courseInfo, setCourseInfo] = useState([]);
	const params = useParams();
	const url = 'http://localhost:4000/courses/' + params.courseId;

	const getCourseInfo = async () => {
		const response = await fetch(url);
		const data = await response.json();
		console.log('Course info result ');
		console.log(data.result);
		setCourseInfo(data.result);
	};

	useEffect(() => {
		getCourseInfo();
	}, []);
	return (
		<div>
			<Header />
			<Link to='/courses'>
				<Button buttonText='return to Courses' />
			</Link>
			<h2>Course info</h2>
			{courseInfo !== null ? (
				<div key={courseInfo.id}>
					<div className='courseInfo--title'>
						<p>{courseInfo.title}</p>
					</div>
					<div className='courseInfo--description'>
						<p>{courseInfo.description}</p>
					</div>
					<div>
						<p>
							<b>id: </b>
							{courseInfo.id}
						</p>
						<p>
							<b>Duration: </b>
							{getCoursesDuration(courseInfo.duration)}
						</p>
						<p>
							<b>Authors:</b>
							{courseInfo.authors}
						</p>
					</div>
				</div>
			) : (
				'no hay info'
			)}
		</div>
	);
}

export default CourseInfo;

/*
{courseInfo &&
				courseInfo.map((item) => (
					<div key={item.id}>
						<h2>{item.title}</h2>
					</div>
				))}
				*/

/*
				{courseInfo !== null
				? courseInfo.map((item) => (
						<div key={item.id}>
							<p>{item.title}</p>
						</div>
				  ))
				: 'no hay info'}*/
