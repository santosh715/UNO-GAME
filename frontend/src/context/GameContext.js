// src/context/GameContext.js
import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [hostName, setHostName] = useState('');
    const [numberOfPlayers, setNumberOfPlayers] = useState(2); // Default to 2 players
    const [hostAvatar, setHostAvatar] = useState('');
    const [players, setPlayers] = useState([]);
    const [playerCards, setPlayerCards] = useState([]);

    return (
        <GameContext.Provider value={{
            hostName,
            setHostName,
            numberOfPlayers,
            setNumberOfPlayers,
            hostAvatar,
            setHostAvatar,
            players,
            setPlayers,
            playerCards,
            setPlayerCards
        }}>
            {children}
        </GameContext.Provider>
    );
};
