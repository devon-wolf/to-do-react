import React, { Component } from 'react'

export default class ToDoListPage extends Component {
	render() {
		return (
			<div>
				{JSON.stringify(this.props.user)}
			</div>
		)
	}
}
