import React, { useState } from 'react';
import style from './CreateCourseForm.css';

function CreateCourseForm(props) {
	return (
		<div className='course--form'>
			<form>
				<label>
					Title
					<input
						className='input--title'
						value={props.title}
						onChange={(e) => props.titleOnChange(e.target.value)}
						name='title'
					/>
				</label>

				<label>
					Description
					<textarea
						className='input--description'
						value={props.description}
						onChange={(e) => props.descriptionOnChange(e.target.value)}
						name='description'
					/>
				</label>
			</form>
			<p>added course title: {props.title}</p>
			<p> added course description: {props.description} </p>
		</div>
	);
}

export default CreateCourseForm;
