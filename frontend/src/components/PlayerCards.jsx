import React from 'react';
import './assets/css/PlayingDashboard.css';
import Card_Back from './assets/images/card_back.png';

const Playercard = ({ player, cards, onCardClick }) => {
    return (
        <div>
            {player === 'first' && (
                <div className="first-player bg-info">
                    <div className="first-player-center">
                        {cards.map((card, index) => (
                            <button key={index} className='first-player-img-btn' onClick={() => onCardClick(index)}>
                                <img className='first-player-img' src={Card_Back} alt={`Card ${index}`} />
                            </button>
                        ))}
                    </div>
                </div>
            )}
            {player === 'second' && (
                <div className="second-player bg-success">
                    <div className="second-player-center">
                        {cards.map((card, index) => (
                            <button key={index} className='second-player-img-btn' onClick={() => onCardClick(index)}>
                                <img className='second-player-img' src={Card_Back} alt={`Card ${index}`} />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Playercard;
