import React, { Component } from 'react'
import { addToDo, getToDos } from '../utils/api-utils.js'


export default class ToDoListPage extends Component {
	state = {
		user: this.props.user,
		todos: '',
		formEntry: ''
	}

	componentDidMount = async () => {
		await this.fetchToDos();
	}

	fetchToDos = async () => {
		const todos = await getToDos(this.state.user.token);
		this.setState({ todos });
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		await addToDo(this.state.formEntry, this.state.user.token);
		await this.fetchToDos();
		this.setState({ formEntry: '' })
	}

	render() {		
		return (
			<main>
				<h1>TO DO LIST</h1>
				
				<form onSubmit={this.handleSubmit}>
					<label>
						What do you need to do?
						<input
						value={this.state.formEntry}
						onInput={e => 
						this.setState({ formEntry: e.target.value })} />
					</label>
				</form>
				<ul>
				{this.state.todos.length
					? this.state.todos.map(item => 
						<li key={`${item.id}-${item.todo}`}>{item.todo}</li>
						)
					: <p>You've got nothing to do!</p>
				}
				</ul>

			</main>
		)
	}
}
