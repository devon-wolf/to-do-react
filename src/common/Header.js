import React, { Component } from 'react'
import NavBar from './NavBar.js'
import style from './Header.module.css'

export default class Header extends Component {
	render() {
		return (
			<header>
				<NavBar />
			</header>
		)
	}
}
