import React from 'react';
import ButtonGroup from './ButtonGroup';
import Message from '../models/Message';
import Button from './Button';

class ChatBotFooter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { message: '', disabled: false }
        this.onKeyPress = this.onKeyPress.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onClick = this.onClick.bind(this)
        this.createMessage = this.createMessage.bind(this)
        this.uploadFile = this.uploadFile.bind(this)
    }
    // Делаем отправку сообщения по нажатию Enter
    onKeyPress(event) {
        if (event.key === 'Enter' && this.input.value.length > 5) {
            event.preventDefault();
            this.setState({ message: '' })
            this.createMessage();
        }
    }
    // Перехват введения текста пользователя
    onChange(event) {
        this.setState({ message: event.target.value })
    }
    // Делаем отправку сообщения по нажатию кнопки
    onClick(message) {
        const { createMessage, client: { room } } = this.props;
        createMessage(new Message('CreateMessage', room, message));
    }
    // Отправка файла на сервер
    uploadFile(event){
        const { client: { room } } = this.props;
        var data = new FormData();
        data.append('clientFile', event.target.files[0]);
        data.append('chatRoom', room)
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.open("POST", "http://127.0.0.1:8082/upload");
        xhr.send(data);
        this.setState({ disabled: true });
    }
    // Создание сообщения от пользователя и отправка по каналу на сервер
    createMessage() {
        const { createMessage, client: { room } } = this.props;
        const message = new Message('CreateMessage', room, this.state.message)
        createMessage(message)
    }
    render() {
        const { disabled } = this.state;
        const { chat: { typeInput, messages } } = this.props;
        if(typeInput === 'file') {
            return (
                <div className='chatbot-footer'>
                    <div className="button-group">
                        <button disabled={disabled} className="btn btn-group"><input type="file" disabled={disabled} onChange={this.uploadFile} />Прикрепить файл</button>
                        <button disabled={disabled} onClick={() => this.onClick("Нет")} className="btn btn-group">Нет</button>
                    </div>
                </div>
            )
        }
        if(typeInput != 'text') {
            const { buttons } = messages[messages.length - 1];
            return (
                <div className='chatbot-footer'>
                    <div className="button-group">
                        {  
                            buttons.split(',').map((button, i) => {
                                return <button onClick={() => this.onClick(button)} className="btn btn-group" key={`button-${i}`}>{button}</button>
                            })
                        }
                    </div>
                </div>
            )
        }
        return (
            <div className='chatbot-footer'>
                <textarea
                    ref={input => this.input = input}
                    maxLength="1000"
                    className="chatbot-textarea"
                    onKeyPress={this.onKeyPress}
                    autoComplete="false"
                    placeholder="Введите сообщение"
                    onChange={this.onChange}
                    value={this.state.message}
                />
                <div className="chatbot-send" onClick={this.createMessage}><i className="fa fa-paper-plane fa-lg"></i></div>
            </div>
        )
    }
}

export default ChatBotFooter;