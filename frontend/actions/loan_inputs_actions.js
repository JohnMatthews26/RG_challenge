import * as APIUtil from '../util/loan_inputs_util';

export const RECEIVE_ID = "RECEIVE_ID";

export const receiveId = id => ({
  type: RECEIVE_ID,
  id
});

export const fetchId = data => dispatch => (
  APIUtil.fetchId(data).then(payload => (
    dispatch(receiveId(payload))
  ))
);
