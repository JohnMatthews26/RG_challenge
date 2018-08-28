import { combineReducers } from 'redux';
import LoanInputsReducer from './loan_inputs_reducer';

const RootReducer = combineReducers({
  response: LoanInputsReducer
});


export default RootReducer;
