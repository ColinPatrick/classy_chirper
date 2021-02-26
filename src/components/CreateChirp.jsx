import React, {Component} from 'react';

class CreateChirp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            chirpText: ""
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    };

    handleInput(e) {
    this.setState({
        [e.target.id]: e.target.value
    });
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.addChirp(this.state);       
    }

    render() {
        return (
            <div className="row d-flex justify-content-center my-2">
                <div className="col-11 bg-info d-flex justify-content-center" style={{height: 500}}>
                    <div className="col-8 d-flex justify-content-center">
                        <form className="mt-5">
                            <div className="text-center">
                                <h3 className="text-white mt-3">Whatcha got?</h3>
                            </div>
                            <label className="text-white" htmlFor="userName">User Name: </label>                
                            <input className="ml-3 mt-5" id="userName" type="text" name="userName" size="50" onChange={this.handleInput} />
                            <br /> <br />
                            <label className="text-white" htmlFor="chirpText">Chirp Text:</label>
                            <input className="ml-4 mb-5" id="chirpText" type="text" name="chirpText" size="50" onChange={this.handleInput} />
                            <br />
                            <div className="text-center">
                                <button className="btn btn-light text-dark shadow-lg" onClick={this.handleSubmit}>Chirp It!</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
};

export default CreateChirp;