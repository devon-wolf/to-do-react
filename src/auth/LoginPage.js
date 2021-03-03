import React, { Component } from 'react'
import AuthForm from './AuthForm.js'
// import { storeLocalUser } from '../utils/local-storage-utils.js'
import { loginUser } from '../utils/api-utils.js'

export default class LoginPage extends Component {

	handleFormSubmit = (user) => {
		this.props.handleUserChange(user);
		this.props.history.push('/todo');
	}

	render() {
		return (
			<main>
				<h1>SIGN IN</h1>
				<AuthForm  authFunction={loginUser} handleFormSubmit={this.handleFormSubmit}/>
			</main>
		)
	}
}
