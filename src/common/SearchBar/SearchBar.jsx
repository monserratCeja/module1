import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './SearchBar.css';

function SearchBar() {
	return (
		<div className='searchBar'>
			<Input placeholder='Search by name, ID' labelTitle='Search' />
			<Button buttonText='Search' />
		</div>
	);
}

export default SearchBar;
