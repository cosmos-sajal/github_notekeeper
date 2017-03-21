import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';
import First from './first';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class Main extends Component {
	render() {
		return(
			<Provider store={store}>
				<First navigator={this.props.navigator} />
			</Provider>
		);
	}
};
