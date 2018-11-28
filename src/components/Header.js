import React from 'react'
import PropTypes from 'prop-types'
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

Header.propTypes = {
    title: PropTypes.string,
    players: PropTypes.arrayOf(PropTypes.object)
}

export default Header