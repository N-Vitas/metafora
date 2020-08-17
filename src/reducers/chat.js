import moment from 'moment';
import { ADD_MESSAGE, EDIT_MESSAGE } from '../actions/client';

const defaultState = {
    messages: [],
    typeInput: 'text',
}

const chat = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            if(typeof action.message === 'object') {
                const { params: { messages } } = action.message;
                let input = "text";
                console.log('ADD_MESSAGE', messages)
                if(Array.isArray(messages)) {
                    const newMessages = messages.map(msg => {
                        let action = 'NewClientMessage';
                        if(msg.chatID == -1) { action = 'BotMessage' }
                        if(msg.chatID > 0) { action = 'ManagerMessage' }
                        input = msg.type
                        return {
                            action,
                            status: msg.status,
                            message: msg.message,
                            buttons: msg.dataType,
                            datetime: moment(msg.datetime).format('DD.MM.YYYY hh:mm:ss'),
                        }
                    });
                    return { ...state, messages: newMessages, typeInput: input}
                }
            }
            return state;
        case EDIT_MESSAGE: 
            if(typeof action.message === 'object') {
                const messages = state.messages.map(message => {
                    if (message.id == action.message.id) {
                        action.message.datetime = moment(action.message.datetime).format('DD.MM.YYYY hh:mm:ss')
                        return action.message;
                    }
                    return message
                });
                return { ...state, messages}
            }
            return state;
        default: 
            return state;
    }
}

export default chat;