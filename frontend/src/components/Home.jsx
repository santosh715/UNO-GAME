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

export const Home = () => {
    const { setHostName, setNumberOfPlayers, setHostAvatar, players, setPlayers } = useContext(GameContext);
    const [localHostName, setLocalHostName] = useState('');
    const [localNumberOfPlayers, setLocalNumberOfPlayers] = useState(0);
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
        navigate('/Dashboard');
    };

    const handleJoin = () => {
        const newPlayer = { name: playerName, avatar: selectedPlayerAvatar };
        setPlayers([...players, newPlayer]);
        navigate('/Dashboard');
    };

    const validateAndMove = (current, nextFieldId, prevFieldId) => {
        const letterPattern = /^[a-zA-Z]$/;

        if (current.value === '' && prevFieldId) {
            document.getElementById(prevFieldId).focus();
            return;
        }

        if (!letterPattern.test(current.value)) {
            current.value = '';
            return;
        }

        if (current.value.length === current.maxLength && nextFieldId) {
            document.getElementById(nextFieldId).focus();
        }
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
        <div>
            <div className="row align-items-center main-div-1">
                <div className='col-md-12 col-sm-6 main-div-2'>
                    <div className={`flip-card ${flippedCard === 1 ? 'flipped' : ''}`} onClick={() => handleFlip(1)} >
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className="create-join-card" src={create} alt="" />
                            </div>
                            <div className="flip-card-back">
                                <div className="card-wrap">
                                    <div className="my-div">
                                        <label htmlFor="hostName" className="enter-code" id="host-name-input">Host Name:</label>
                                        <input type="text" className="player-name" id="hostName" value={localHostName} onChange={(e) => setLocalHostName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="card-wrap">
                                    <div className="host-avatar-div">
                                        <label>Select Avatar:</label>
                                        <div>
                                            <input type="radio" id="girl" name="avatarType" value="girl" onChange={(e) => { setAvatarType(e.target.value); setShowAvatarPopup(true); }} />
                                            <label htmlFor="girl">Girl</label>
                                            <input type="radio" id="boy" name="avatarType" value="boy" onChange={(e) => { setAvatarType(e.target.value); setShowAvatarPopup(true); }} />
                                            <label htmlFor="boy">Boy</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-wrap">
                                    {showAvatarPopup && (
                                        <div className="avatar-popup">
                                            <h4>Select Avatar</h4>
                                            <div className="avatar-options">
                                                {avatarType === 'girl' ? (
                                                    <div>
                                                        <img className='avatar-img' src={girl1} alt="Girl Avatar 1" onClick={() => handleAvatarSelection(girl1, true)} />
                                                        <img className='avatar-img' src={girl2} alt="Girl Avatar 2" onClick={() => handleAvatarSelection(girl2, true)} />
                                                        <img className='avatar-img' src={girl3} alt="Girl Avatar 3" onClick={() => handleAvatarSelection(girl3, true)} />
                                                        <img className='avatar-img' src={girl4} alt="Girl Avatar 4" onClick={() => handleAvatarSelection(girl4, true)} />
                                                        <img className='avatar-img' src={girl5} alt="Girl Avatar 5" onClick={() => handleAvatarSelection(girl5, true)} />
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <img className='avatar-img' src={boy1} alt="Boy Avatar 1" onClick={() => handleAvatarSelection(boy1, true)} />
                                                        <img className='avatar-img' src={boy2} alt="Boy Avatar 2" onClick={() => handleAvatarSelection(boy2, true)} />
                                                        <img className='avatar-img' src={boy3} alt="Boy Avatar 3" onClick={() => handleAvatarSelection(boy3, true)} />
                                                        <img className='avatar-img' src={boy4} alt="Boy Avatar 4" onClick={() => handleAvatarSelection(boy4, true)} />
                                                        <img className='avatar-img' src={boy5} alt="Boy Avatar 5" onClick={() => handleAvatarSelection(boy5, true)} />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                    {selectedAvatar && <img src={selectedAvatar} alt="Selected Avatar" className="selected-avatar" />}
                                </div>
                                <div className="card-wrap">
                                    <label className="label">Select Players</label>
                                    <select name="Players" id="Players" onChange={(e) => setLocalNumberOfPlayers(parseInt(e.target.value))}>
                                        <option value="2">2 Player</option>
                                        <option value="3">3 Player</option>
                                        <option value="4">4 Player</option>
                                        <option value="5">5 Player</option>
                                        <option value="6">6 Player</option>
                                        <option value="7">7 Player</option>
                                        <option value="8">8 Player</option>
                                        <option value="9">9 Player</option>
                                        <option value="10">10 Player</option>
                                    </select>
                                </div>
                                <div className="card-wrap">
                                    <button className="first-btn" id="start-btn" onClick={handleStart}>START</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`flip-card ${flippedCard === 2 ? 'flipped' : ''}`} onClick={() => handleFlip(2)}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className="create-join-card" src={join} alt="" />
                            </div>
                            <div className="flip-card-back">
                                <div className="card-wrap">
                                    <div className="my-div">
                                        <label htmlFor="playerName" className="enter-code">Player Name:</label>
                                        <input type="text" className="player-name" id="playerName" value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="card-wrap">
                                    <div className="join-player-avatar-div">
                                        <label>Select Avatar:</label>
                                        <div>
                                            <input type="radio" id="playerGirl" name="playerAvatarType" value="girl" onChange={(e) => { setAvatarType(e.target.value); setShowAvatarPopup(true); }} />
                                            <label htmlFor="playerGirl">Girl</label>
                                            <input type="radio" id="playerBoy" name="playerAvatarType" value="boy" onChange={(e) => { setAvatarType(e.target.value); setShowAvatarPopup(true); }} />
                                            <label htmlFor="playerBoy">Boy</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-wrap">
                                    {showAvatarPopup && (
                                        <div className="avatar-popup">
                                            <h4>Select Avatar</h4>
                                            <div className="avatar-options">
                                                {avatarType === 'girl' ? (
                                                    <div>
                                                        <img className='avatar-img' src={girl1} alt="Girl Avatar 1" onClick={() => handleAvatarSelection(girl1, false)} />
                                                        <img className='avatar-img' src={girl2} alt="Girl Avatar 2" onClick={() => handleAvatarSelection(girl2, false)} />
                                                        <img className='avatar-img' src={girl3} alt="Girl Avatar 3" onClick={() => handleAvatarSelection(girl3, false)} />
                                                        <img className='avatar-img' src={girl4} alt="Girl Avatar 4" onClick={() => handleAvatarSelection(girl4, false)} />
                                                        <img className='avatar-img' src={girl5} alt="Girl Avatar 5" onClick={() => handleAvatarSelection(girl5, false)} />
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <img className='avatar-img' src={boy1} alt="Boy Avatar 1" onClick={() => handleAvatarSelection(boy1, false)} />
                                                        <img className='avatar-img' src={boy2} alt="Boy Avatar 2" onClick={() => handleAvatarSelection(boy2, false)} />
                                                        <img className='avatar-img' src={boy3} alt="Boy Avatar 3" onClick={() => handleAvatarSelection(boy3, false)} />
                                                        <img className='avatar-img' src={boy4} alt="Boy Avatar 4" onClick={() => handleAvatarSelection(boy4, false)} />
                                                        <img className='avatar-img' src={boy5} alt="Boy Avatar 5" onClick={() => handleAvatarSelection(boy5, false)} />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                    {selectedPlayerAvatar && <img src={selectedPlayerAvatar} alt="Selected Player Avatar" className="selected-avatar" />}
                                </div>
                                <div className="card-wrap">
                                    <label htmlFor="box1" className="enter-code" id="enter-code-join">Enter Code:</label>
                                    <br />
                                    <input type="text" className="code-input" id="box1" maxLength="1" onInput={(e) => validateAndMove(e.target, 'box2', '')} />
                                    <input type="text" className="code-input" id="box2" maxLength="1" onInput={(e) => validateAndMove(e.target, 'box3', 'box1')} />
                                    <input type="text" className="code-input" id="box3" maxLength="1" onInput={(e) => validateAndMove(e.target, 'box4', 'box2')} />
                                    <input type="text" className="code-input" id="box4" maxLength="1" onInput={(e) => validateAndMove(e.target, 'box5', 'box3')} />
                                    <input type="text" className="code-input" id="box5" maxLength="1" onInput={(e) => validateAndMove(e.target, 'box6', 'box4')} />
                                    <input type="text" className="code-input" id="box6" maxLength="1" onInput={(e) => validateAndMove(e.target, 'box7', 'box5')} />
                                    <input type="text" className="code-input" id="box7" maxLength="1" onInput={(e) => validateAndMove(e.target, 'box8', 'box6')} />
                                    <input type="text" className="code-input" id="box8" maxLength="1" onInput={(e) => validateAndMove(e.target, '', 'box7')} />
                                </div>
                                <div className="card-wrap">
                                    <button className="first-btn" id="join-btn-submit" onClick={handleJoin}>Join</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="cards-container"></div>
        </div>
    );
};

export default Home;
