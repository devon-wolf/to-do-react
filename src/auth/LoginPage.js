import React, { Component } from 'react'
import AuthForm from './AuthForm.js'

export default class LoginPage extends Component {
	render() {
		return (
			<main>
				<h1>SIGN IN</h1>
				<AuthForm />
			</main>
		)
	}
}
