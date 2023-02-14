import React from 'react';
import Header from './../Header/Header';
import Input from '../../common/Input/Input';
import styles from './CreateCourse.css';
import Button from '../../common/Button/Button';
import AuthorItem from './components/AuthorItem/AuthorItem';
function CreateCourse(props) {
	function createAuthorPressed(e) {}
	return (
		<div>
			<div className='CreateCourse--header'>
				<h2>Add new course</h2>
			</div>
			<div className='createCourse--area'>
				<div className='AddAuthor--div'>
					<h3>Add author</h3>
					<Input placeholder='Enter author name...' labelTitle='Author Name' />
					<Button
						handleClick={createAuthorPressed}
						buttonText='Create author'
					/>
				</div>
				<div className='Authors--div'>
					<h3>Authors</h3>
					{props.authorsList.map((item) => (
						<div key={item.id}>
							<AuthorItem name={item.name} />
						</div>
					))}
				</div>
				<div className='AddAuthor--div'>
					<h3>Duration</h3>
					<Input
						placeholder='Enter duration in minutes...'
						labelTitle='Duration'
					/>
					<Button buttonText='Add duration' />
				</div>
				<div className='Authors--div'>
					<h3>Course Authors</h3>
					<p>Author list is empty</p>
				</div>
			</div>
			<div className='CreateCourse--bottom'>
				<Button
					buttonText='Cancel'
					handleClick={props.handleClickCancelCreate}
				/>
				<Button buttonText='Save Course' />
			</div>
		</div>
	);
}
export default CreateCourse;
