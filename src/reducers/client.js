import { OPEN_CHAT, CLOSE_CHAT, TOGGLE_CHAT, OPEN_SOCKET, CLOSE_SOCKET, ADD_MESSAGE, CREATE_MESSAGE, REFRESH_ROOM, DELETE_ROOM, uuid } from '../actions/client';
import Message from '../models/Message';

const room = () => {
    let roomID = localStorage.getItem('uuid');
    if(!roomID) {
        roomID = uuid();
        localStorage.setItem('uuid', roomID);
    }
    return roomID;
}
const roomExit = () => {
    const uuid = localStorage.getItem('uuid');
    if(!uuid) {
        return false;
    }
    return true;
}

const clearRoom = () => {
    localStorage.removeItem('uuid');
}

const defaultState = {
    height: 64,
    icon: 'fa fa-envelope-o',
    ws: false,
    room: room(),
};

const client = (state = defaultState, action) => {
    console.log('TYPE:', action.type);
    switch (action.type) {
        case ADD_MESSAGE, OPEN_CHAT, CLOSE_CHAT, TOGGLE_CHAT:
            return { ...state, height: action.height, icon: action.icon };
        case OPEN_SOCKET:
            return { ...state, ws: action.ws };
        case CLOSE_SOCKET:
            return { ...state, ws: false }
        case CREATE_MESSAGE:
            if (state.ws) {
                state.ws.send(JSON.stringify(action.message));
            }
            return state
        case REFRESH_ROOM:
            clearRoom();
            const newroom = room();
            if (state.ws) {
                const message = new Message('Auth', newroom, "Register room client")
                state.ws.send(JSON.stringify(message));
            }
            return { ...state, room: newroom }
        case DELETE_ROOM:
            clearRoom();
            return { ...state, room: room() }
        default: 
            return state;
    }
}

export default client;