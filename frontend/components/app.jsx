import React from 'react';
import { Provider } from 'react-redux';
import {
	Route,
	Redirect,
	Switch,
	Link,
	HashRouter
} from 'react-router-dom';
import LoanInputsContainer from './loan_inputs/loan_inputs_container';

const App = () => (
	<div className='main-div'>
		<LoanInputsContainer/>
	</div>
);

export default App;
