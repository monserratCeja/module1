import React from 'react';
import styles from './CourseCard.css';
import { getUserName } from '../../../../helpers/getUserName';

function CourseCard(props) {
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
						<p key={item}>{getUserName(item)}</p>
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
		</div>
	);
}

export default CourseCard;
