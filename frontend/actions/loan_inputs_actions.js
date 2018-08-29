import * as APIUtil from '../util/loan_inputs_util';

export const RECEIVE_RESPONSE = "RECEIVE_RESPONSE";

export const receiveResponse = response => ({
  type: RECEIVE_RESPONSE,
  response
});

export const fetchResponse = (data, headers) => dispatch => (
  APIUtil.fetchResponse(data, headers).then(payload => (
    dispatch(receiveResponse(payload))
  ))
);
