import React from 'react';
import ReconnectingWebSocket from '../libery/ReconnectingWebSocket';
import ChatBotHeaderContainer from '../containers/ChatBotHeaderContainer';
import ChatBotBodyContainer from '../containers/ChatBotBodyContainer';
import ChatBotFooterContainer from '../containers/ChatBotFooterContainer';
import Message from '../models/Message';

let timer = null;
const duration = 2000;
class ChatBot extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { urlSocket, openSocket, closeSocket, addMessage, openChat, refreshRoom, deleteRoom, editMessage, client: { room } } = this.props;
        // Подключение к сокету
        const ws = new ReconnectingWebSocket(urlSocket);
        ws.debug = true;
        // Тригер установленнго подключения канала
        ws.onopen = () => {
            const message = new Message('Auth', room, "Register room client")
            ws.send(JSON.stringify(message));
            openSocket(ws);
        };
        // Тригер закрытия подключения канала
        ws.onclose = () => {
            console.log(`connected close ${urlSocket}`);
            if (timer !== null) { clearTimeout(timer); }
            timer = setTimeout(() => {
            console.log(`blobk app CLOSE_SOCKET`);
            closeSocket();
            }, duration);
        };
        // Тригер события сервера переданного по каналу
        ws.onmessage = (e) => {
            const message = JSON.parse(e.data);
            if (typeof message === 'object') {
                // Смотрим что за тип события
                const { action } = message;
                switch(action) {
                    case 'Tell': // Флаг того что бот печатает
                        break;
                    case 'NewClientMessage': // Сообщение пользователя сайта
                        addMessage(message)
                        break;
                    case 'Auth': // Сообщение пользователя сайта
                        addMessage(message)
                        break;
                    case 'Welcom': // Сообщение пользователя сайта
                        addMessage(message)
                        openChat()
                        break;
                    case 'RefreshRoom':
                        refreshRoom()
                        break;
                    case 'DeleteRoom':
                        deleteRoom()
                        break;
                    case 'UpdateClientMessage': // Изменение сообщения пользователя сайта
                        editMessage(message)
                        break;
                    case 'ManagerMessage': // Сообщение от менеджера сайта
                        break;
                    case 'BotMessage': // Сообщение от бота
                        break;
                    // По умолчанию пишем логи
                    default:
                        console.log('Server action: ', action)
                        console.log('onMessage', message)
                }
            }
            // openChat()
            // addMessage(message)
        }
    }

    render() {
        const { height } = this.props.client;
        return (
            <div className='chatbot-container' style={{ height }}>
                <ChatBotHeaderContainer />
                <ChatBotBodyContainer />
                <ChatBotFooterContainer /> 
            </div>
        )
    }
}
export default ChatBot;