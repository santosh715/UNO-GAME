import React, { useEffect, useState } from 'react';
import './assets/css/PlayingDashboard.css';



import Blue_Reverse from './assets/images/cards-front/_B.png';
import Green_Reverse from './assets/images/cards-front/_G.png';
import Yellow_Reverse from './assets/images/cards-front/_Y.png';
import Red_Reverse from './assets/images/cards-front/_R.png';
import Blue_0 from './assets/images/cards-front/0B.png';
import Blue_1 from './assets/images/cards-front/1B.png';
import Blue_2 from './assets/images/cards-front/2B.png';
import Blue_3 from './assets/images/cards-front/3B.png';
import Blue_4 from './assets/images/cards-front/4B.png';
import Blue_5 from './assets/images/cards-front/5B.png';
import Blue_6 from './assets/images/cards-front/6B.png';
import Blue_7 from './assets/images/cards-front/7B.png';
import Blue_8 from './assets/images/cards-front/8B.png';
import Blue_9 from './assets/images/cards-front/9B.png';
import Red_0 from './assets/images/cards-front/0R.png';
import Red_1 from './assets/images/cards-front/1R.png';
import Red_2 from './assets/images/cards-front/2R.png';
import Red_3 from './assets/images/cards-front/3R.png';
import Red_4 from './assets/images/cards-front/4R.png';
import Red_5 from './assets/images/cards-front/5R.png';
import Red_6 from './assets/images/cards-front/6R.png';
import Red_7 from './assets/images/cards-front/7R.png';
import Red_8 from './assets/images/cards-front/8R.png';
import Red_9 from './assets/images/cards-front/9R.png';
import Yellow_0 from './assets/images/cards-front/0Y.png';
import Yellow_1 from './assets/images/cards-front/1Y.png';
import Yellow_2 from './assets/images/cards-front/2Y.png';
import Yellow_3 from './assets/images/cards-front/3Y.png';
import Yellow_4 from './assets/images/cards-front/4Y.png';
import Yellow_5 from './assets/images/cards-front/5Y.png';
import Yellow_6 from './assets/images/cards-front/6Y.png';
import Yellow_7 from './assets/images/cards-front/7Y.png';
import Yellow_8 from './assets/images/cards-front/8Y.png';
import Yellow_9 from './assets/images/cards-front/9Y.png';
import Green_0 from './assets/images/cards-front/0G.png';
import Green_1 from './assets/images/cards-front/1G.png';
import Green_2 from './assets/images/cards-front/2G.png';
import Green_3 from './assets/images/cards-front/3G.png';
import Green_4 from './assets/images/cards-front/4G.png';
import Green_5 from './assets/images/cards-front/5G.png';
import Green_6 from './assets/images/cards-front/6G.png';
import Green_7 from './assets/images/cards-front/7G.png';
import Green_8 from './assets/images/cards-front/8G.png';
import Green_9 from './assets/images/cards-front/9G.png';
import Draw_2_Blue from './assets/images/cards-front/D2B.png';
import Draw_2_Red from './assets/images/cards-front/D2R.png';
import Draw_2_Yellow from './assets/images/cards-front/D2Y.png';
import Draw_2_Green from './assets/images/cards-front/D2G.png';
import Skip_Blue from './assets/images/cards-front/skipB.png';
import Skip_Red from './assets/images/cards-front/skipR.png';
import Skip_Yellow from './assets/images/cards-front/skipY.png';
import Skip_Green from './assets/images/cards-front/skipG.png';
import Color_Change from './assets/images/cards-front/W.png';
import Draw_4_Cards from './assets/images/cards-front/D4W.png';
import Card_Back from './assets/images/card_back.png';


const deck = [
    Blue_Reverse, Green_Reverse, Yellow_Reverse, Red_Reverse,
    Blue_0, Blue_1, Blue_2, Blue_3, Blue_4, Blue_5, Blue_6, Blue_7, Blue_8, Blue_9,
    Red_0, Red_1, Red_2, Red_3, Red_4, Red_5, Red_6, Red_7, Red_8, Red_9,
    Yellow_0, Yellow_1, Yellow_2, Yellow_3, Yellow_4, Yellow_5, Yellow_6, Yellow_7, Yellow_8, Yellow_9,
    Green_0, Green_1, Green_2, Green_3, Green_4, Green_5, Green_6, Green_7, Green_8, Green_9,
    Draw_2_Blue, Draw_2_Red, Draw_2_Yellow, Draw_2_Green,
    Skip_Blue, Skip_Red, Skip_Yellow, Skip_Green,
    Color_Change, Draw_4_Cards
    // Add all the required card images here
];

const shuffleDeck = (deck) => {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
};

const dealCards = (deck, numberOfCards) => {
    return deck.splice(0, numberOfCards);
};

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

    const handleCardClick = (player, index) => {
        if (movingCard !== null) return; // Prevent multiple clicks

        if (player === 'first') {
            setAnimationClass('moving-from-first');
            setMovingCard(firstPlayerCards[index]);
            setTimeout(() => {
                setPlayingAreaCards([...playingAreaCards, firstPlayerCards[index]]);
                setFirstPlayerCards(firstPlayerCards.filter((_, i) => i !== index));
                setMovingCard(null);
                setAnimationClass('');
            }, 500);
        } else if (player === 'second') {
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
                    {firstPlayerCards.map((card, index) => (
                        <button key={index} className='first-player-img-btn' onClick={() => handleCardClick('first', index)}>
                            <img className={`first-player-img ${movingCard === card ? animationClass : ''}`} src={movingCard === card ? card : Card_Back} alt={`Card ${index}`} />
                        </button>
                    ))}
                </div>
            </div>
            <div className="playing-area bg-danger">
                Playing Area
                <div className="playing-area-center">
                    {playingAreaCards.map((card, index) => (
                        <img key={index} className='playing-area-img' src={card} alt={`Card ${index}`} />
                    ))}
                </div>
            </div>
            <div className="second-player bg-success">
                Second Player
                <div className="second-player-center">
                    {secondPlayerCards.map((card, index) => (
                        <button key={index} className='second-player-img-btn' onClick={() => handleCardClick('second', index)}>
                            <img className={`second-player-img ${movingCard === card ? animationClass : ''}`} src={card} alt={`Card ${index}`} />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlayingDashboard;