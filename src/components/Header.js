import React from 'react'
import PropTypes from 'prop-types'
import Stats from './Stats'
import Stopwatch from './Stopwatch'

const Header = ({ title, players }) => (
    <header>
        <h1>{title}</h1>
        <Stats players={players}  />
        <Stopwatch />
    </header>

)

Header.propTypes = {
    title: PropTypes.string.isRequired,
    players: PropTypes.arrayOf(PropTypes.object.isRequired)
}

Header.defaultProps = {
    title: "Scoreboard"
}

export default Header