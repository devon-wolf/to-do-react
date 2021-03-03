import React, { Component } from 'react'
import { addToDo, getToDos, completeToDo } from '../utils/api-utils.js'
import style from './ToDo.module.css'

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

	handleCompleteClick = async (e) => {
		await completeToDo(e.target.value, this.state.user.token);
		await this.fetchToDos();
	}

	render() {

		console.log(this.state);

		return (
			<main className={style.main}>
				<h1>TO DO LIST</h1>
				
				<form className={style.newEntry} onSubmit={this.handleSubmit}>
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
						<li
						className={item.completed 
							? style.complete
							: style.listItem}
						key={`${item.id}-${item.todo}`}
						value={item.id}
						onClick={this.handleCompleteClick}
						>
							{item.todo}
						</li>
						)
					: <p>You've got nothing to do!</p>
				}
				</ul>

			</main>
		)
	}
}
