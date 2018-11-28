import React from 'react';

const Counter = ({ changeScore, index, score}) => {
    return (
        <div className="counter">
            <button onClick={() => changeScore(index, -1)} className="counter-action decrement" disabled={score === 0}> - </button>
            <span className="counter-score">{score}</span>
            <button onClick={() => changeScore(index, 1)} className="counter-action increment"> + </button>
        </div>
    )
}

export default Counter;