import React from 'react'
import { NavLink } from 'react-router-dom'

import './Header.css'

export default class Header extends React.Component {

	state = {
			traffic_data: {
							sent: false,
							user: "",
							action: "",
							element: "",
							received: false,
							tracker: 0
						 }
			}

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
	this.props.update_msg(this.props.user_name)
}

onClickTestFunctions = (event) => {
	this.props.update_msg({user_id: this.props.user_id, interaction: event.target.attributes.interaction.value , element: event.target.name} )
}

	render(){
		
		const logged_in_links = [
				<span className="header_greeting">Logged In As: { this.props.user_name }</span>,
				<button className="default_button" name="test_button1" interaction="click1" onClick={ this.onClickTestFunctions }>Test Button 1</button>,
				<NavLink className="default_button" to="/dashboard" onClick={ this.onClickFunctionsDashboard }>Dashboard</NavLink>,
				<NavLink className="default_button" to="/" onClick={this.onClickFunctionsLogOut }>Log Out</NavLink>
			]

		const admin_links = [
				<span className="header_greeting">Logged In As: { this.props.user_name }</span>,
				<button className="default_button" name="test_button1" interaction="click1" onClick={ this.onClickTestFunctions }>Test Button 1</button>,
				<button className="default_button" name="test_button2" interaction="click2" onClick={ this.onClickTestFunctions }>Test Button 2</button>,
				
				<NavLink className="default_button" to="/backroom" onClick={ this.onClickFunctionsBackroom }>Admin Panel</NavLink>,
				<NavLink className="default_button" to="/dashboard" onClick={ this.onClickFunctionsDashboard }>Dashboard</NavLink>,
				<NavLink className="default_button" to="/" onClick={this.onClickFunctionsLogOut }>Log Out</NavLink>
		]

		const logged_out_links = [
				<NavLink className="default_button" to="/login" onClick={this.onClickFunctionsLogIn }>Login</NavLink>,
				<NavLink className="default_button" to="/signup" onClick={this.onClickFunctionsSignUp }>Sign Up</NavLink>
			]

		return(
			<>
				<div className="header_left">
					<NavLink className="default_button" exact to="/" onClick={this.onClickFunctionsHome }>Home</NavLink>
				</div>
				<div className="header_right">
					{
						{
							false: logged_out_links,
							true: (() => {
								switch(this.props.access) {
									case 'guest': return logged_out_links;
									case 'normal': return logged_in_links;
									case 'admin': return admin_links;
									default: return null;
								}
							})()
						}[!!this.props.token]
					}
				</div>
			</>
		)
	}
}