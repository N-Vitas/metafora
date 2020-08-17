import React from 'react';

function ChatBotHeader (props) {
    const { toggleChat, client: { height, icon } } = props;
    return (
        <div onClick={() => toggleChat(height)} className='chatbot-header'>
            <h1 className="chatbot-title"> Напишите нам <i className={icon}></i></h1>
        </div>
    )
}

export default ChatBotHeader;