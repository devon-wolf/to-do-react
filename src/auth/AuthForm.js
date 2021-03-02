import React, { Component } from 'react'

export default class AuthForm extends Component {
	render() {
		return (
			<form>
				<label>
					Email
					<input />
				</label>
				<label>
					Password
					<input />
				</label>
				<button>
					Submit
				</button>
			</form>
		)
	}
}
