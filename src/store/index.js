// store/index.js
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, compose } from 'redux';
import { coursesReducer } from './courses/reducer';
import { rootReducer } from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({ reducer: rootReducer });
//const store = configureStore({ reducer: { courses: coursesReducer } });

export default store;
