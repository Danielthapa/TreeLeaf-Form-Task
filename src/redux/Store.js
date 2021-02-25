import { createStore } from 'redux';
import infoReducer from '../redux/reducers/infoReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from '@reduxjs/toolkit';

const composeEnhancers = composeWithDevTools({});

const store =  createStore(infoReducer, composeEnhancers(applyMiddleware(logger)));

export default store;
