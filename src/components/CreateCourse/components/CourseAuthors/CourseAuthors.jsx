import React, { useEffect, useState } from 'react';
import AuthorItem from './AuthorItem/AuthorItem';
import AuthorSelectedItem from './AuthorSelectedItem/AuthorSelectedItem';
//import { getUserName } from '../../../../helpers/getUserName';
//import Button from '../../../../common/Button/Button';
import style from './CourseAuthors.css';

function CourseAuthors(props) {
	return (
		<div>
			<h3>Authors</h3>
			{props.authorsList.map((item) => (
				<div
					key={item.id}
					//className='hideAuthor'
					/*className={props.selectedAuthors.includes(item) ? 'hideAuthor' : ' '}
					key={item.id}*/
				>
					<AuthorItem
						name={item.name}
						handleClick={props.selectAuthorsClicked}
						id={item.id}
					/>
				</div>
			))}
			<h3>Course Authors</h3>
			{props.selectedAuthors.length + 1 > 1 ? (
				<>
					<p>Author list has {props.selectedAuthors.length} authors</p>
					<>
						{props.selectedAuthors.map((item) => (
							<div key={item}>
								<AuthorSelectedItem
									item={item}
									authorState={props.authorsList}
									unselectAuthor={props.unselectAuthor}
								/>
							</div>
						))}
					</>
				</>
			) : (
				<p>Author list is empty</p>
			)}
		</div>
	);
}
export default CourseAuthors;
