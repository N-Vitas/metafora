import React from 'react';
import Button from './Button';

function ButtonGroup (props) {
    return (
        <div className="button-group" style={props.style}>
            { props.buttons.map(
                (button, index) => {
                    return (
                        <Button content={ button.text } type={ button.type } onclick={props.onclick} key={index}/>
                    )
                }
            )}
        </div>
    )
}

export default ButtonGroup