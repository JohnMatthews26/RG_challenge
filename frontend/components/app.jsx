import React from 'react';
import { Provider } from 'react-redux';
import {
	Route,
	Redirect,
	Switch,
	Link,
	HashRouter
} from 'react-router-dom';
import LoanInputs from './loan_inputs/loan_inputs';

const App = () => (
	<div className='main-div'>
		<LoanInputs/>
	</div>
);

export default App;
