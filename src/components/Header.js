import React from 'react'
import Stats from './Stats'
import Stopwatch from './Stopwatch'

const Header = ({ players }) => { 
        return (
            <header>
                <h1>Scoreboard</h1>
                <Stats players={players}  />
                <Stopwatch />
            </header>
        )
}

export default Header