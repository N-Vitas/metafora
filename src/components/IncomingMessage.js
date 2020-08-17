import React from 'react';

class IncomingMessage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const obj = this.props.message
        return (
            <div className='incoming_msg'>
                {obj.img?
                    (<div className='incoming_msg_img'>
                        <img src={obj.img} alt="sunil" />
                    </div>):null
                }
                <div className='received_msg'>
                    <div className='received_withd_msg'>
                        <p>{obj.message}</p>
                        <span className='time_date'>{obj.datetime}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default IncomingMessage;