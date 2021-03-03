import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import style from './Header.module.css'

export default class NavBar extends Component {
	render() {
		return (
			<nav className={style.navBar}>
					<NavLink 
						exact 
						activeClassName={style.current} 
						className={style.navItem} 
						to="/">
						Home
					</NavLink>
					
					{
						this.props.user && this.props.user.token &&
						<>
						<NavLink 
						exact 
						activeClassName={style.current} 
						className={style.navItem} 
						to="/todo">
						To Do List
						</NavLink>

						<span className={style.logout} onClick={this.props.handleLogoutClick}>Logout</span>
						</>
					}

					{
						(!this.props.user || !this.props.user.token) &&
						<>
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
						</>
					}	
				</nav>
		)
	}
}
