import { connect } from 'react-redux';
import LoanInputs from './loan_inputs';
import {fetchResponse} from '../../actions/loan_inputs_actions';

const mapStateToProps = ({ response }) => ({
  response: response
});



const mapDispatchToProps = dispatch => ({

  fetchResponse: (data, headers) => dispatch(fetchResponse(data, headers)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoanInputs);
