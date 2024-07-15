import React from 'react';
import './assets/css/PlayingDashboard.css';
import { deck, shuffleDeck, dealCards } from './Deck';

const PlayingArea = ({ cards }) => {
    return (
        <div className="playing-area bg-danger">
            <div className="playing-area-center">
                {cards.map((card, index) => (
                    <img key={index} className='playing-area-img' src={card} alt={`Card ${index}`} />
                ))}
            </div>
        </div>
    );
};

export default PlayingArea;
