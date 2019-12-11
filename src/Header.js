import React from 'react'
import { NavLink } from 'react-router-dom'

import './Header.css'

export default class Header extends React.Component {

onClickFunctionsHome = () => {

}

onClickFunctionsSignUp = () => {

}

onClickFunctionsLogIn = () => {

}

onClickFunctionsLogOut = () => {
	this.props.logOut(this.props.token)
}

onClickFunctionsDashboard = () => {

}

	render(){

		console.log(this.props)

		const logged_in_links = [
				<span className="header_greeting">Logged In As: { this.props.user_name }</span>,
				<NavLink to="/dashboard" onClick={ this.onClickFunctionsDashboard }>Dashboard</NavLink>,
				<NavLink to="/" onClick={this.onClickFunctionsLogOut }>Log Out</NavLink>
			]

		const logged_out_links = [
				<NavLink to="/login" onClick={this.onClickFunctionsLogIn }>Login</NavLink>,
				<NavLink to="/signup" onClick={this.onClickFunctionsSignUp }>Sign Up</NavLink>
			]

		return(
			<>
				<div className="header_left">
					<NavLink exact to="/" onClick={this.onClickFunctionsHome }>Home</NavLink>
				</div>
				<div className="header_right">
					{
						!!this.props.token ?
							logged_in_links
						:
							logged_out_links
					}
				</div>
			</>
		)
	}
}