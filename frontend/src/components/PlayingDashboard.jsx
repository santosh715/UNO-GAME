import React, { useEffect, useState } from 'react';
import './assets/css/PlayingDashboard.css';
import Playercard from './PlayerCards';
import PlayingArea from './PlayingArea';
import { deck, shuffleDeck, dealCards } from './Deck';

const PlayingDashboard = () => {
    const [firstPlayerCards, setFirstPlayerCards] = useState([]);
    const [secondPlayerCards, setSecondPlayerCards] = useState([]);
    const [playingAreaCards, setPlayingAreaCards] = useState([]);
    const [movingCard, setMovingCard] = useState(null);
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        let shuffledDeck = shuffleDeck([...deck]);
        setFirstPlayerCards(dealCards(shuffledDeck, 7));
        setSecondPlayerCards(dealCards(shuffledDeck, 7));
    }, []);

    const handleCardClick = (playerType, index) => {
        if (movingCard !== null) return; // Prevent multiple clicks

        if (playerType === 'first') {
            setAnimationClass('moving-from-first');
            setMovingCard(firstPlayerCards[index]);
            setTimeout(() => {
                setPlayingAreaCards([...playingAreaCards, firstPlayerCards[index]]);
                setFirstPlayerCards(firstPlayerCards.filter((_, i) => i !== index));
                setMovingCard(null);
                setAnimationClass('');
            }, 500);
        } else if (playerType === 'second') {
            setAnimationClass('moving-from-second');
            setMovingCard(secondPlayerCards[index]);
            setTimeout(() => {
                setPlayingAreaCards([...playingAreaCards, secondPlayerCards[index]]);
                setSecondPlayerCards(secondPlayerCards.filter((_, i) => i !== index));
                setMovingCard(null);
                setAnimationClass('');
            }, 500);
        }
    };

    return (
        <div>
            <div className="first-player bg-info">
                First Player
                <div className="first-player-center">
                    <Playercard player="first" cards={firstPlayerCards} onCardClick={(index) => handleCardClick('first', index)} />
                </div>
            </div>
            <div className="playing-area bg-danger">
                Playing Area
                <div className="playing-area-center">
                    <PlayingArea cards={playingAreaCards} />
                </div>
            </div>
            <div className="second-player bg-success">
                Second Player
                <div className="second-player-center">
                    <Playercard player="second" cards={secondPlayerCards} onCardClick={(index) => handleCardClick('second', index)} />
                        
                </div>
            </div>
        </div>
    );
};

export default PlayingDashboard;
