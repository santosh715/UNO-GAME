import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GameContext } from '../context/GameContext';
import './assets/css/Try.css';

export const Try = () => {
    const { setHostName, setNumberOfPlayers } = useContext(GameContext);
    const [localHostName, setLocalHostName] = useState('');
    const [localNumberOfPlayers, setLocalNumberOfPlayers] = useState(0);
    const navigate = useNavigate();

    const handleStart = () => {
        setHostName(localHostName);
        setNumberOfPlayers(localNumberOfPlayers);
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

    const [isFlipped1, setIsFlipped1] = useState(false);
    const [isFlipped2, setIsFlipped2] = useState(false);

    const handleFlip1 = () => {
        setIsFlipped1(!isFlipped1);
    };

    const handleFlip2 = () => {
        setIsFlipped2(!isFlipped2);
    };

    return (
        <div>
            <div className="row align-items-center main-div-1">
                <div className={`flip-card ${isFlipped1 ? 'flipped' : ''}`} onClick={handleFlip1}>
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                        <button className="first-btn-1" id="create-btn">Create</button>
                        </div>
                        <div className="flip-card-back">
                        <div className="card-wrap">
                            <div className="my-div">
                                <label htmlFor="hostName" className="enter-code" id="host-name-input">Host Name:</label>
                                <input type="text" className="player-name" id="hostName" value={localHostName} onChange={(e) => setLocalHostName(e.target.value)} />
                            </div>
                        </div>

                        <div className="card-wrap">
                            <div className="my-div">
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
                        </div>
                        <div className="card-wrap">
                            <button className="first-btn" id="start-btn" onClick={handleStart}>START</button>
                        </div>
                        </div>
                    </div>
                </div>

                <div className={`flip-card ${isFlipped2 ? 'flipped' : ''}`} onClick={handleFlip2}>
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                        <button className="first-btn-1" id="join-btn">Join</button>
                        </div>
                        <div className="flip-card-back">
                        <div className="card-wrap">
                            <div className="my-div">
                                <label htmlFor="box1" className="enter-code">Player Name:</label>
                                <input type="text" className="player-name" />
                            </div>
                        </div>

                        <div className="card-wrap">
                            <div className="my-div">
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
                        </div>
                        <div className="card-wrap">
                            <button className="first-btn" id="join-btn-submit">Join</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="cards-container"></div>
        </div>
    );
};

export default Try;
