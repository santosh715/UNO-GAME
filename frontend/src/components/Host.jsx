import React from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/css/HostRoom.css';

const Host = ({ hostName, hostAvatar }) => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/PlayingDashboard');
    };

    const handleExit = () => {
        navigate('/');
    };

    return (
        <div className="host-area">
            <div className="card">
                <img className="img-1" src={hostAvatar} alt="Host Avatar" />
                <h5>{hostName || 'Host'}</h5>
                <p>
                    <button className='host-btn' onClick={handleStart}>Start</button>
                    <button className='host-btn' onClick={handleExit}>Exit</button>
                </p>
            </div>
        </div>
    );
};

export default Host;