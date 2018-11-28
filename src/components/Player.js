import React from 'react';
import Counter from './Counter';

const Player = ({ player, removePlayer, changeScore }) => {
    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={() => removePlayer(player.id)}>✖</button>
                {player.name} - {player.age}
            </span>
            <Counter index={player.id} changeScore={changeScore} score={player.score} />
        </div>
    )
}

export default Player;