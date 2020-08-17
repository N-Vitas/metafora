import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ChatBotBodyComponent from '../components/ChatBotBodyComponent';
import * as client from '../actions/client';

function mapStateToProps(state) {
  return {...state};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...client }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBotBodyComponent);