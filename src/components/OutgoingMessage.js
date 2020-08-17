import React from 'react';

class OutgoingMessage extends React.Component {
    constructor(props) {
        super(props)
    }
    getStatus(status) {
        if(status) {
            return 'sent_msg status-confirm';
        } else {
            return 'sent_msg status-send';
        }
    }

    render() {
        const obj = this.props.message
        return (
            <div className='outgoing_msg'>
                <div className={this.getStatus(obj.status)}>
                    <p>{obj.message}</p>
                    <span className='time_date'>{obj.datetime}</span>
                </div>
            </div>
        )
    }
}

export default OutgoingMessage;