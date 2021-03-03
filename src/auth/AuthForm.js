import React, { Component } from 'react'
import style from './Login.module.css'

export default class AuthForm extends Component {
	state = {
		email: '',
		password: ''
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		const user = await this.props.authFunction(this.state.email, this.state.password);
		this.props.handleFormSubmit(user);
	} 

	render() {
		
		return (
			<form className={style.form} onSubmit={this.handleSubmit}>
				<label>
					<span>Email</span>
					<input value={this.state.email} onInput={e => this.setState({email: e.target.value})}/>
				</label>
				<label>
					<span>Password</span>
					<input value={this.state.password} onInput={e => this.setState({password: e.target.value})}/>
				</label>
				<button>
					Submit
				</button>
			</form>
		)
	}
}
