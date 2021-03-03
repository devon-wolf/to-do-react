import React, { Component } from 'react'
import AuthForm from './AuthForm.js'
import {signUpUser} from '../utils/api-utils.js'
// import { storeLocalUser } from '../utils/local-storage-utils.js'

export default class SignUpPage extends Component {

	handleFormSubmit = (user) => {
		this.props.handleUserChange(user);
		this.props.history.push('/todo');
	}

	render() {
		return (
			<main>
				<h1>SIGN UP</h1>
				<AuthForm authFunction={signUpUser} handleFormSubmit={this.handleFormSubmit} />
			</main>
		)
	}
}
