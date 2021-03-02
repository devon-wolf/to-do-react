import React, { Component } from 'react'

export default class ToDoListPage extends Component {
	render() {
		return (
			<main>
				<h1>TO DO LIST</h1>
				{JSON.stringify(this.props.user)}
			</main>
		)
	}
}
