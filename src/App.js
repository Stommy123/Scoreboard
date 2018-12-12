import React, { Component } from 'react';
import Header from './components/Header';
import Players from './components/Players';
import Form from './components/Form';
import playersList from './data/playerData';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = { players: playersList, selected: [] }
	}

	addPlayers = (name, age) => {
		const { players } = this.state 
		players.push({
			name: name,
			id: players.length + 1,
			score: 0,
			age: age
		})
		this.setState({ players })
	}

	removePlayer = id => {
		let { players } = this.state 
		players = players.filter( p => p.id !== id )
		this.setState({ players })
	}

	handleScoreChange = (i, e) => {
		let { players } = this.state
			players[i].score += e
			this.setState({ players })
	}

	getHighScore = () => {
		const scores = this.state.players.map(s => s.score)
		const highScore = Math.max(...scores)
		if (highScore) return highScore
	}

	handleSelectPlayer = id => {
		let { selected } = this.state
		if (!selected.includes(id)) { selected.push(id) }
		else { selected = selected.filter(i => i !== id)}
		this.setState({ selected }) 
	}

	render() {
		const { players, selected } = this.state
		const highScore = this.getHighScore()
		return (
			<div className="scoreboard">
				<Header title="Scoreboard" players={players} />
				<Players selected={selected} selectPlayer={this.handleSelectPlayer} highScore={highScore} changeScore={this.handleScoreChange} removePlayer={this.removePlayer} players={players} />
				<Form addPlayer={this.addPlayers} />
			</div>
		);
	}
}

export default App;
