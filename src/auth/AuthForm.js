import React, { Component } from 'react'

export default class AuthForm extends Component {
	state = {
		email: '',
		password: ''
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		const user = await this.props.authFunction(this.state.email, this.state.password);
		this.props.handleUserChange(user);
	} 

	render() {
		
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Email
					<input value={this.state.email} onInput={e => this.setState({email: e.target.value})}/>
				</label>
				<label>
					Password
					<input value={this.state.password} onInput={e => this.setState({password: e.target.value})}/>
				</label>
				<button>
					Submit
				</button>
			</form>
		)
	}
}
