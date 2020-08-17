import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.upload = this.upload.bind(this)
        this.state = {
            progress: 35,
            done: false,
            show: false,
        }
    }
    
    progressUpload() {
        const { progress, done, show } = this.state;
        const t = this;
        if(!show) {
            this.setState({ progress: 0, show: true });
            setTimeout(t.progressUpload.bind(t), 500);
            return;
        }
        if(progress < 99) {
            this.setState({ progress: (progress + 1) });
            setTimeout(t.progressUpload.bind(t), 100);
        }
    }
    done_upload() {
        this.setState({progress: 100, done: true })
    }
    upload(event) {
        this.progressUpload();
        console.log(event.target.files[0])
    }
    
    render() {
        const { progress, done, show } = this.state;
        const { type } = this.props;
        console.log(type)
        switch(type) {
            case "file": 
            if (show) {
                return (
                    <div className="progress">
                        <div className="progress-title">{`${progress}%`}</div>
                        <div style={{ width: `${progress}%`}} className="progress-value"></div>
                    </div>
                )
            }
            return (
                <button className="btn btn-group">
                    <span>Прикрепить файл</span>
                    <input id="chatbot-upload" type="file" onChange={this.upload}/>
                </button>
            );
            default:
                return (<button className="btn btn-group" onClick={ this.props.onclick }>{this.props.content}</button>);
        }
    }
}

export default Button