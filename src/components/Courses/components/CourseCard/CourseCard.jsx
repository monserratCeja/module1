import React, { useState, useEffect } from 'react';
import styles from './CourseCard.css';
import { getUserName } from '../../../../helpers/getUserName';
import Button from '../../../../common/Button/Button';
import { Link, useParams } from 'react-router-dom';

function CourseCard(props) {
	let params = useParams();
	const idAuthor = props.courseAuthors;
	console.log(idAuthor);

	const [authorName, setAuthorName] = useState([]);

	const getData = async () => {
		const url = 'http://localhost:4000/authors/all';
		const response = await fetch(url);
		console.log(url);
		const data = await response.json();
		console.log(data.successful);
		setAuthorName(data.result);
	};
	useEffect(() => {
		getData();
		console.log(authorName);
	}, []);

	return (
		<div className='card--style'>
			<div>
				<h2>{props.courseTitle}</h2>
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
			</div>
		</div>
	);
}

export default CourseCard;
