import React, { Component } from 'react'
import { getToDos } from '../utils/api-utils.js'


export default class ToDoListPage extends Component {
	state = {
		user: this.props.user,
		todos: ''
	}

	componentDidMount = async () => {
		await this.fetchToDos();
	}

	fetchToDos = async () => {
		const todos = await getToDos(this.state.user.token);
		this.setState({ todos });
	}

	render() {
		console.log(this.state);		
		return (
			<main>
				<h1>TO DO LIST</h1>
				
				{this.state.todos.length
					? <p>There's stuff here somewhere...</p>
					: <p>You've got nothing to do!</p>
				}

			</main>
		)
	}
}
