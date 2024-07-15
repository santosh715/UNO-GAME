import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/css/Home.css';
import join from './assets/images/Join.png';
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

const Join = ({ handleFlip, flippedCard }) => {
    const [playerName, setPlayerName] = useState('');
    const [avatarType, setAvatarType] = useState('');
    const [showAvatarPopup, setShowAvatarPopup] = useState(false);
    const [selectedPlayerAvatar, setSelectedPlayerAvatar] = useState('');
    const navigate = useNavigate();

    const handleAvatarSelection = (avatar) => {
        setSelectedPlayerAvatar(avatar);
        setShowAvatarPopup(false);
    };
    

    return (
        <div className={`flip-card ${flippedCard === 2 ? 'flipped' : ''}`} onClick={() => handleFlip(2)}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img className="create-join-card" src={join} alt="Join" />
                </div>
                <div className="flip-card-back">
                    
                    <div className="card-wrap">
                        <div className="my-div">
                            <label htmlFor="playerName" className="enter-code">Player Name:</label>
                            <input type="text" className="player-name" id="playerName" value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
                        </div>
                    </div>
                    <Popup
                        trigger={
                            <button className="first-btn">
                                Select Avatar
                                <div className="card-wrap">
                                    <div className="host-avatar-div">
                                        <div>
                                            <input
                                                type="radio"
                                                id="join-girl"
                                                name="avatarTypeJoin"
                                                value="girl"
                                                onChange={(e) => {
                                                    setAvatarType(e.target.value);
                                                    setShowAvatarPopup(true);
                                                }}
                                            />
                                            <label htmlFor="join-girl">Girl</label>
                                            <input
                                                type="radio"
                                                id="join-boy"
                                                name="avatarTypeJoin"
                                                value="boy"
                                                onChange={(e) => {
                                                    setAvatarType(e.target.value);
                                                    setShowAvatarPopup(true);
                                                }}
                                            />
                                            <label htmlFor="join-boy">Boy</label>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        }
                        position="left center"
                        contentStyle={{ width: '45vh', height: '20vh' }}
                    >
                        {close => (
                            <div>
                                <div className="card-wrap">
                                    {showAvatarPopup && (
                                        <div className="avatar-popup">
                                            <button className="close-btn" onClick={close}>×</button>
                                            <h4>Select Avatar</h4>
                                            <div className="avatar-options">
                                                {avatarType === 'girl' ? (
                                                    <div>
                                                        <img className='avatar-img' src={girl1} alt="Girl Avatar 1" onClick={() => handleAvatarSelection(girl1)} />
                                                        <img className='avatar-img' src={girl2} alt="Girl Avatar 2" onClick={() => handleAvatarSelection(girl2)} />
                                                        <img className='avatar-img' src={girl3} alt="Girl Avatar 3" onClick={() => handleAvatarSelection(girl3)} />
                                                        <img className='avatar-img' src={girl4} alt="Girl Avatar 4" onClick={() => handleAvatarSelection(girl4)} />
                                                        <img className='avatar-img' src={girl5} alt="Girl Avatar 5" onClick={() => handleAvatarSelection(girl5)} />
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <img className='avatar-img' src={boy1} alt="Boy Avatar 1" onClick={() => handleAvatarSelection(boy1)} />
                                                        <img className='avatar-img' src={boy2} alt="Boy Avatar 2" onClick={() => handleAvatarSelection(boy2)} />
                                                        <img className='avatar-img' src={boy3} alt="Boy Avatar 3" onClick={() => handleAvatarSelection(boy3)} />
                                                        <img className='avatar-img' src={boy4} alt="Boy Avatar 4" onClick={() => handleAvatarSelection(boy4)} />
                                                        <img className='avatar-img' src={boy5} alt="Boy Avatar 5" onClick={() => handleAvatarSelection(boy5)} />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                    {selectedPlayerAvatar && <img src={selectedPlayerAvatar} alt="Selected Avatar" className="selected-avatar" />}
                                </div>
                            </div>
                        )}
                    </Popup>

                    <div className="card-wrap">
                        <div className="my-div">
                            <label htmlFor="code" className="enter-code">Enter Code:</label>
                            <input type="text" className="code-name" id="code" />
                        </div>
                    </div>
                    
                    <div className="card-wrap">
                        <button className="first-btn" id="join-btn" onClick={() => navigate('/Dashboard')}>JOIN</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Join;
