// src/components/Dashboard.jsx
import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import './assets/css/Dashboard.css';
import Host from './Host';
import RoomCode from './RoomCode';
import Players from './Players';

export const Dashboard = () => {
    const { hostName, numberOfPlayers, hostAvatar, players } = useContext(GameContext);

    return (
        <div className="dashboard-layout">
            <div className="container" align="center">
                <div className="row">
                    <div className="col-md-6 bg-warning">
                        <br />
                        <Host hostName={hostName} hostAvatar={hostAvatar} />
                    </div>
                    <div className="col-md-6 bg-danger">
                        <br />
                        <RoomCode />
                    </div>
                </div>
            </div>
            <div className="container bg-info" align="center">
                <div className="col-md-12">
                    <br />
                    <Players players={players} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
