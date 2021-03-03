import React, { Component } from 'react'
import AuthForm from './AuthForm.js'
import {signUpUser} from '../utils/api-utils.js'
import style from './Login.module.css'

export default class SignUpPage extends Component {

	handleFormSubmit = (user) => {
		this.props.handleUserChange(user);
		this.props.history.push('/todo');
	}

	render() {
		return (
			<main className={style.main}>
				<h1>Sign Up</h1>
				<AuthForm authFunction={signUpUser} handleFormSubmit={this.handleFormSubmit} />
			</main>
		)
	}
}
