import merge from 'lodash/merge';

import {
  RECEIVE_ID
} from '../actions/loan_inputs_actions';

const initialResponse = Object.freeze({
  response: {}
});

const LoanInputsReducer = (state = initialResponse, action) => {
  Object.freeze(state);
  switch(action.type) {

    case RECEIVE_ID:
      console.log(action);
      // return action.landmarks;
      let response = action.id;
      return merge({}, state, response);

    default:
      return state;
  }
};

export default LoanInputsReducer;
