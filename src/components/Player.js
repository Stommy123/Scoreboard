import React from 'react';
import Counter from './Counter';
import Icon from './Icon';

const Player = ({ player, removePlayer, changeScore, isHighScore }) => (
    <div className="player">
        <span className="player-name">
            <button className="remove-player" onClick={() => removePlayer(player.id)}>✖</button>
            <Icon isHighScore={isHighScore} />
            {player.name} - {player.age}
        </span>
        <Counter index={player.id} changeScore={changeScore} score={player.score} />
    </div>
)


export default Player;