import { combineReducers } from 'redux'
import chat from './chat';
import client from './client';

export default combineReducers({
    chat,
    client,
})