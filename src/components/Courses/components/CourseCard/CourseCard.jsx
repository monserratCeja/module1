import React, { useState, useEffect } from 'react';
import styles from './CourseCard.css';
import { getUserName } from '../../../../helpers/getUserName';
import Button from '../../../../common/Button/Button';
import { Link, useParams } from 'react-router-dom';
//redux
import { setAuthors } from '../../../../store/selectors';
import { useSelector } from 'react-redux';

function CourseCard(props) {
	let params = useParams();
	const idAuthor = props.courseAuthors;

	const stateAuthors = useSelector((state) => setAuthors(state));

	useEffect(() => {
		console.log(params);
	}, []);

	function deleteCourse(e) {
		props.deleteCourseClicked(props.courseId);
	}

	return (
		<div className='card--style'>
			<div>
				<h2>
					<b>Title: </b> {props.courseTitle}
				</h2>
				<p>
					<b>description: </b>
				</p>
				<p>{props.courseDescription}</p>
			</div>
			<div>
				<div>
					<p>
						<b>authors:</b>
					</p>
					{props.courseAuthors.map((item) => (
						<p key={item}>{item}</p>
					))}
				</div>
				<div>
					<p>
						<b>Duration:</b>
					</p>
					<p>{props.courseDuration}</p>
				</div>
				<div>
					<p>
						<b>Created:</b>
					</p>
					<p>{props.courseCreated}</p>
				</div>
			</div>
			<div className='view-details'>
				<Link to={`/courses/${props.courseId}`}>
					<Button buttonText='view details' />
				</Link>
				<Button buttonText='Delete Course' handleClick={deleteCourse} />
				<Button buttonText='Edit Course' />
			</div>
		</div>
	);
}

export default CourseCard;
