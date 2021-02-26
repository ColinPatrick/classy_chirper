import React from 'react';
import ChirpCard from './ChirpCard'

let MainPage = (props) => {
    let chirpTimeline = props.chirps.map(chirp => {
        return (
            <ChirpCard
                userName={chirp.userName}
                chirpText={chirp.chirpText} 
                key={chirp.chirpId}
                time={chirp.chirpDate}
                editHandler={props.editHandler}
            />           
        );
    });
    return (
        <div className="row">
            <div className="col-11 bg-info d-flex justify-content-center mx-auto my-2 p-5 rounded shadow-lg">
                <div className="col-5">
                    {chirpTimeline}                        
                </div>
            </div>
        </div> 
    );
};

export default MainPage;