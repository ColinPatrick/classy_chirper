import React from 'react';

let Navbar = (props) => {
    return (
        <span className="row">
            <nav className="navbar navbar-expand-lg navbar-light bg-info col-11 rounded shadow-lg mx-auto">
            <div className="col-4">
                <button onClick={props.handlePageToggleHome} className="btn btn-link text-white">Home</button>
            </div>
            <div className="col-4 d-flex justify-content-center">
                <h3 className="text-white font-weight-bold">Chirper</h3>
            </div>
            <div className="col-4 d-flex justify-content-end">
                <button onClick={props.handlePageToggleCreate} className="btn btn-link text-white">Add Chirp</button>
            </div>
            </nav>
        </span> 
    );
}        

export default Navbar;



