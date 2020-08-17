import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ChatBotComponent from '../components/ChatBot';
import * as client from '../actions/client';

function mapStateToProps(state) {
  return {...state, urlSocket: client.API_SOCKET};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...client }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatBotComponent);