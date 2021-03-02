import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import style from './Header.module.css'

export default class NavBar extends Component {
	render() {
		return (
			<nav>
					<NavLink 
						exact 
						activeClassName={style.current} 
						className={style.navItem} 
						to="/">
						Home
					</NavLink>
					
					<NavLink 
						exact 
						activeClassName={style.current} 
						className={style.navItem} 
						to="/login">
						Login
					</NavLink>

					<NavLink 
						exact 
						activeClassName={style.current} 
						className={style.navItem} 
						to="/sign-up">
						Sign Up
					</NavLink>

					<NavLink 
						exact 
						activeClassName={style.current} 
						className={style.navItem} 
						to="/todo">
						To Do List
					</NavLink>
				</nav>
		)
	}
}