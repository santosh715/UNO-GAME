import React from 'react';
import './assets/css/HostRoom.css';

const RoomCode = () => {
    return (
        <div className="join-code box-2">
            <div className="join-code-1">
                <div className="room-code">
                    <h2>Join Code: 000000</h2>
                </div>
                <div className="room-code-buttons">
                    <p>
                        <button className="room-code-btn">Copy Code</button>
                        <button className="room-code-btn">Invite</button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RoomCode;
