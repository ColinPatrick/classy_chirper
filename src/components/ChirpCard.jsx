import React, { Component } from 'react';

class Chirp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: this.props.userName,
            chirpText: this.props.chirpText, 
            key: this.props.chirpId,
            time: this.props.chirpDate,
            deleted: false
        }
    }

    render() {
        return (
            <div className="card rounded shadow-lg my-4">
                <div className="card-header">
                    <h4 className="card-title pt-2 text-secondary">
                        {this.state.userName}
                    </h4>
                </div>
                <div className="card-body">
                    <p className="card-text">
                        {this.state.chirpText}
                    </p>
                </div>
                <div className="card-footer d-flex justify-content-end">
                    <span className="text-left mr-2 mt-2">{this.props.time.substr(4, 17)}</span>
                </div>
            </div>
        )                    
    }
}


export default Chirp;