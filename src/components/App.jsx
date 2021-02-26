import React, { Component, Fragment } from 'react';
import Navbar from './Navbar';
import MainPage from './MainPage';
import CreateChirp from './CreateChirp';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chirps: [
                {
                    userName: "Abraham Lincoln",
                    chirpText: "@George Washington you should check out The Expanse. It's dope and so are the books.",
                    chirpId: 3,
                    chirpDate: "Thu Feb 25 2021 05:15"
                },
                {  
                    userName: "George Washington",
                    chirpText: "Yo what's a good show right now? Looking for something to binge. It has to stay good though none of that GOT business.",
                    chirpId: 2,
                    chirpDate: "Thu Feb 25 2021 03:32"
                },
                {
                    userName: "John Hancock",
                    chirpText: "Man you guys know that feeling when you KNOW you gotta to be working and signing stuff but you still spend the whole day on reddit doing nothing?",
                    chirpId: 1,
                    chirpDate: "Thu Feb 25 2021 01:45"
                },
            ],
            pageToggle: "home",
            chirpCount: 3
        }

        this.handlePageToggleHome = this.handlePageToggleHome.bind(this);
        this.handlePageToggleCreate = this.handlePageToggleCreate.bind(this);
        this.handleNewChirps = this.handleNewChirps.bind(this);
    };

    handlePageToggleHome() {
        this.setState({
            pageToggle: "home"
        });
    };

    handlePageToggleCreate() {
        this.setState({
            pageToggle: "create"
        });
    };

    handleNewChirps(chirp) {
        let date = new Date();
        chirp.chirpDate = date.toString();
        chirp.chirpId = this.state.chirpCount + 1;
        this.setState({
            chirps: [chirp, ...this.state.chirps],
            pageToggle: "home",
            chirpCount: this.state.chirpCount + 1
        });
    }

    render() {
        if (this.state.pageToggle === "home") {
            return (
                <Fragment>
                    <Navbar 
                        handlePageToggleHome={this.handlePageToggleHome}
                        handlePageToggleCreate={this.handlePageToggleCreate} 
                    /> 
                    <MainPage 
                    chirps={this.state.chirps}
                    editHandler={this.handleChirpEdit} 
                    />
                </Fragment>
            );
        } else if (this.state.pageToggle === "create") {
            return (
                <Fragment>
                    <Navbar 
                        handlePageToggleHome={this.handlePageToggleHome}
                        handlePageToggleCreate={this.handlePageToggleCreate} 
                    />
                    <CreateChirp
                        addChirp={this.handleNewChirps}                      
                    />
                </Fragment> 
            );
        };       
    };
};
 
export default App;
