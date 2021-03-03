import React, { Component } from 'react'
import AuthForm from './AuthForm.js'
import { loginUser } from '../utils/api-utils.js'
import style from './Login.module.css'

export default class LoginPage extends Component {

	handleFormSubmit = (user) => {
		this.props.handleUserChange(user);
		this.props.history.push('/todo');
	}

	render() {
		return (
			<main className={style.main}>
				<h1>Sign In</h1>
				<AuthForm  authFunction={loginUser} handleFormSubmit={this.handleFormSubmit}/>
			</main>
		)
	}
}
