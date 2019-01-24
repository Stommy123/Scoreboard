import React, { Component } from 'react';

class Form extends Component {

    state = { name: String(), age: String() }

    handleChange = field => event => this.setState({ [field]: event.target.value })

    ageInput = React.createRef()

    handleSubmit = event => {
        event.preventDefault()
        const { name } = this.state
        this.props.addPlayer(name, Number(this.ageInput.current.value))
        this.setState({ name: String(), age: String() })  
    }

    render() {
        const { name, age } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={ name }
                    placeholder="Enter a player's name"
                    onChange={this.handleChange('name')}
                />
                <input
                    type="text"
                    value={ age }
                    ref={this.ageInput}
                    placeholder="Enter a player's age"
                    onChange={this.handleChange('age')}
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