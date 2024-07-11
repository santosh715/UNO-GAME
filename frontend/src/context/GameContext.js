import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [hostName, setHostName] = useState('');
    const [numberOfPlayers, setNumberOfPlayers] = useState(0);
    const [hostAvatar, setHostAvatar] = useState('');
    const [players, setPlayers] = useState([]);

    return (
        <GameContext.Provider value={{
            hostName,
            setHostName,
            numberOfPlayers,
            setNumberOfPlayers,
            hostAvatar,
            setHostAvatar,
            players,
            setPlayers
        }}>
            {children}
        </GameContext.Provider>
    );
};
