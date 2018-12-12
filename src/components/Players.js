import React from 'react';
import Player from './Player'

const Players = ({ players, changeScore, removePlayer, highScore, selectPlayer, selected }) => (
    <div>
        {
            players.map((player, i) => {
                return (
                    <Player
                        selected={selected} 
                        selectPlayer={selectPlayer}
                        isHighScore={highScore === player.score} 
                        changeScore={changeScore} player={player} 
                        removePlayer={removePlayer} key={i} />
                )
            })
        }
    </div>
)


export default Players