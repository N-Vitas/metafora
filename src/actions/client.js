export const OPEN_CHAT = 'OPEN_CHAT';
export const CLOSE_CHAT = 'CLOSE_CHAT';
export const TOGGLE_CHAT = 'TOGGLE_CHAT';
export const OPEN_SOCKET = 'OPEN_SOCKET';
export const CLOSE_SOCKET = 'CLOSE_SOCKET';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const EDIT_MESSAGE = 'EDIT_MESSAGE';
export const REFRESH_ROOM = 'REFRESH_ROOM';
export const DELETE_ROOM = 'DELETE_ROOM';
export const API_SOCKET = 'ws://localhost:8082/v1';

export const addMessage = message => ({
    type: ADD_MESSAGE,
    message: message,
    height: 625, 
    icon: 'fa fa-sort-desc',
})
export const editMessage = message => ({
    type: EDIT_MESSAGE,
    message: message
})

export const openChat = () => ({ type: OPEN_CHAT, height: 625, icon: 'fa fa-sort-desc' })
export const closeChat = () => ({ type: CLOSE_CHAT, height: 64, icon: 'fa fa-envelope-o' })
export const toggleChat = (height) => {
    if(height === 64) {
        return { type: TOGGLE_CHAT, height: 625, icon : 'fa fa-sort-desc' };
    }
    return { type: TOGGLE_CHAT, height: 64, icon: 'fa fa-envelope-o' };
    
}
export const openSocket = ws => ({ type: OPEN_SOCKET, ws })
export const closeSocket = () => ({ type: CLOSE_SOCKET })
export const createMessage = message => ({ type: CREATE_MESSAGE, message })
export const refreshRoom = () => ({ type: REFRESH_ROOM })
export const deleteRoom = () => ({ type: DELETE_ROOM })
export const uuid =()=>'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, 
    (c,r) => ('x'==c?(r=Math.random()*16|0):(r&0x3|0x8)).toString(16));