import React from 'react';
import Counter from './Counter';
import Icon from './Icon';

const Player = ({ player, removePlayer, changeScore, isHighScore, selectPlayer, selected }) => (
    <div className="player">
        <span className="player-name" onClick={() => selectPlayer(player.id) }>
            <button className="remove-player" onClick={() => removePlayer(player.id)}>✖</button>
            <Icon isHighScore={isHighScore} />
            <span style={{color: selected.includes(player.id) ? 'red' : 'black'}} id="selected">{player.name} - {player.age}</span>
        </span>
        <Counter index={player.id} changeScore={changeScore} score={player.score} />
    </div>
)


export default Player;