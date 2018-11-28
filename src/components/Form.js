import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super()
        this.state = {
            value: '',
            age: ''
        }
    }

    handleChange = (event) => {
        let { value } = this.state
        value = event.target.value
        this.setState({ value })
    }

    ageInput = React.createRef()

    handleAgeChange = (event) => {
        let { age } = this.state
        age = event.target.value
        this.setState({ age })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let { value } = this.state
        this.props.addPlayer(this.state.value, Number(this.ageInput.current.value))
        this.setState({ value: '', age: '' })
        
    }

    render() {
        const { value, age } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={ value }
                    placeholder="Enter a player's name"
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    value={ age }
                    ref={this.ageInput}
                    placeholder="Enter a player's age"
                    onChange={this.handleAgeChange}
                />
                <input
                    type="submit"
                    value="Add Player"
                />
            </form>
        )
    }
}

export default Form;