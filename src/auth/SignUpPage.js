import React, { Component } from 'react'
import AuthForm from './AuthForm.js'
import {signUpUser} from '../utils/api-utils.js'
import { storeLocalUser } from '../utils/local-storage-utils.js'

export default class SignUpPage extends Component {
	state = {
		user: {
			id: '',
			email: '',
			token: ''
		}
	}
	
	handleUserChange = (user) => {
		this.setState({ user });
		storeLocalUser(user);
		this.props.history.push('/todos');
	}

	render() {
		console.log(this.state)
		return (
			<main>
				<h1>SIGN UP</h1>
				<AuthForm authFunction={signUpUser} handleUserChange={this.handleUserChange} />
			</main>
		)
	}
}
