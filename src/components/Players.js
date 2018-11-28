import React from 'react';
import Player from './Player'

const Players = ({ players, changeScore, removePlayer }) => {
    return (
        <div>
            {
                players.map((player, i) => {
                    return (
                        <Player changeScore={changeScore} player={player} removePlayer={removePlayer} key={i} />
                    )
                })
            }
        </div>
    )
}

export default Players