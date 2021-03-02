import React, { Component } from 'react'
import NavBar from './NavBar.js'
// import style from './Header.module.css'

export default class Header extends Component {
	render() {
		return (
			<header>
				<h2>An App to Show You a List You Made</h2>
				<NavBar />
			</header>
		)
	}
}
