import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GameContext } from '../context/GameContext';
import './assets/css/Home.css';
import join from './assets/images/Join.png';
import create from './assets/images/Create.png';
import girl1 from './assets/images/avatars/avatar-girl-1.png';
import girl2 from './assets/images/avatars/avatar-girl-2.png';
import girl3 from './assets/images/avatars/avatar-girl-3.png';
import girl4 from './assets/images/avatars/avatar-girl-4.png';
import girl5 from './assets/images/avatars/avatar-girl-5.png';
import boy1 from './assets/images/avatars/avatar-boy-1.png';
import boy2 from './assets/images/avatars/avatar-boy-2.png';
import boy3 from './assets/images/avatars/avatar-boy-3.png';
import boy4 from './assets/images/avatars/avatar-boy-4.png';
import boy5 from './assets/images/avatars/avatar-boy-5.png';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Create from './Create';
import Join from './Join';

export const Home = () => {
    const { setHostName, setNumberOfPlayers, setHostAvatar, setPlayers } = useContext(GameContext);
    const [localHostName, setLocalHostName] = useState('');
    const [localNumberOfPlayers, setLocalNumberOfPlayers] = useState(2); // Default to 2 players
    const [avatarType, setAvatarType] = useState('');
    const [showAvatarPopup, setShowAvatarPopup] = useState(false);
    const [selectedAvatar, setSelectedAvatar] = useState('');
    const [playerName, setPlayerName] = useState('');
    const [selectedPlayerAvatar, setSelectedPlayerAvatar] = useState('');
    const navigate = useNavigate();

    const handleStart = () => {
        setHostName(localHostName);
        setNumberOfPlayers(localNumberOfPlayers);
        setHostAvatar(selectedAvatar);
        setPlayers([...Array(localNumberOfPlayers).keys()].map(i => ({ name: `Player ${i + 1}`, avatar: '' })));
        navigate('/Dashboard');
    };

    const [flippedCard, setFlippedCard] = useState(null);
    const handleFlip = (cardNumber) => {
        if (flippedCard !== cardNumber) {
            setFlippedCard(cardNumber);
        }
    };

    const handleAvatarSelection = (avatar, isHost) => {
        if (isHost) {
            setSelectedAvatar(avatar);
        } else {
            setSelectedPlayerAvatar(avatar);
        }
        setShowAvatarPopup(false);
    };

    return (
        <div className="row align-items-center main-div-1">
            <div className="col-md-12 col-sm-6 main-div-2">
                <div className="create-component">
                    <Create handleFlip={handleFlip} flippedCard={flippedCard} />
                </div>
                <div className="join-component">
                    <Join handleFlip={handleFlip} flippedCard={flippedCard} />
                </div>
            </div>
        </div>
    );
};

export default Home;
