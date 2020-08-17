import React from 'react';
import IncomingMessage from './IncomingMessage';
import OutgoingMessage from './OutgoingMessage';

class ChatBotBodyComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    componentWillUpdate() {
        const card = this.card;
        console.log("card", card.scrollTop, card.offsetHeight, card.scrollHeight)
        this.card.scrollTop = card.scrollHeight + card.offsetHeight;
    }
    render() {
        const { chat: { messages }} = this.props;
        return (
            <div className='chatbot-content'>
                <h3>{this.props.garder}</h3>
                <div className='chatbot-card' ref={(card) => { this.card = card; }}>
                    {messages.map(
                        (message, index) => {
                            switch(message.action) {
                                case 'NewClientMessage':
                                return <OutgoingMessage message={message} key={index}/>;
                                case 'ManagerMessage':
                                return <IncomingMessage message={message} key={index}/>;
                                case 'BotMessage':
                                return <IncomingMessage message={message} key={index}/>;
                                default:
                                return <OutgoingMessage message={message} key={index}/>;
                            }
                        }
                    )}
                </div>
            </div>
        )
    }
}

export default ChatBotBodyComponent;