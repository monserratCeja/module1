import React, { useEffect, useState } from 'react';
import Input from '../../../../common/Input/Input';
import { getCoursesDuration } from '../../../../helpers/getCoursesDuration';
import styles from './Duration.css';

function Duration(props) {
	return (
		<div>
			<h3>Duration</h3>
			<form>
				<Input
					placeholder='Enter duration in minutes...'
					labelTitle='Duration'
					type='number'
					value={props.currentDuration}
					onChange={(e) => props.durationOnChange(e.target.value)}
				/>
				<h4>Duration:{getCoursesDuration(props.currentDuration)} hrs </h4>
			</form>
		</div>
	);
}
export default Duration;
