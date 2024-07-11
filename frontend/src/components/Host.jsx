// src/components/Host.jsx
import React from 'react';
import './assets/css/HostRoom.css';

const Host = ({ hostName, hostAvatar }) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-6 one host host-area box-1">
            <div className="card">
                <img className="img-1" src={hostAvatar} alt="Host Avatar" />
                <h5>{hostName || 'Host'}</h5>
                <p>
                    <button className='host-btn'>Start</button>
                    <button className='host-btn'>Exit</button>
                </p>
            </div>
        </div>
    );
};

export default Host;
