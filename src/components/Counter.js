import React from 'react';
import PropTypes from 'prop-types'

const Counter = ({ changeScore, index, score}) => (
    <div className="counter">
        <button onClick={() => changeScore(index, -1)} className="counter-action decrement" disabled={score === 0}> - </button>
        <span className="counter-score">{score}</span>
        <button onClick={() => changeScore(index, 1)} className="counter-action increment"> + </button>
    </div>
)

Counter.propTypes = {
    index: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    changeScore: PropTypes.func.isRequired
}

export default Counter;