import React from 'react'
import { NavLink } from 'react-router-dom'

import './css/Header.css'

export default class Header extends React.Component {

	onClickHomeFunctions = (event) => {
		this.onClickUpdateTrafficFunctions(event)
	}

	onClickSignUpFunctions = (event) => {
		this.onClickUpdateTrafficFunctions(event)
	}

	onClickLogInFunctions = (event) => {
		this.onClickUpdateTrafficFunctions(event)
	}

	onClickLogOutFunctions = (event) => {
		this.onClickUpdateTrafficFunctions(event)
	}

	onClickDashboardFunctions = (event) => {
		this.onClickUpdateTrafficFunctions(event)
	}

	onClickQuestionFunctions = (event) => {
		this.onClickUpdateTrafficFunctions(event)
	}

	onClickBackroomFunctions = (event) => {
		let index_msg = "index"
		this.props.update_backroom_from_header(index_msg)
	}

	onClickUpdateTrafficFunctions = (event) => {
		this.props.update_traffic_data({
			user_id: this.props.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		})
	}

	render(){
		const home_link = [
			<NavLink
				exact to="/"
				key={"h_home_link"}
				name="header_home_button"
				interaction="click"
				className="default_header_link"
				onClick={this.onClickHomeFunctions }
			>
				Home
			</NavLink>
		]

		const user_greeting = [
			<span
				key={"h_user_greeting"}
				className="header_greeting">
				Logged In: { this.props.user_name }
			</span>
		]

		const logged_in_links = [
			<NavLink
				key={"h_question"}
				to="/quck_play"
				name="header_dashboard_question"
				interaction="click"
				className="default_header_link"
				onClick={ this.onClickQuestionFunctions }
			>
				Quick Play
			</NavLink>,
			<NavLink
				key={"h_dashboard"}
				to="/dashboard"
				name="header_dashboard_button"
				interaction="click"
				className="default_header_link"
				onClick={ this.onClickDashboardFunctions }
			>
				Dashboard
			</NavLink>,
			<NavLink
				key={"h_log_out"}
				to="/log_out"
				name="header_log_out_button"
				interaction="click"
				className="default_header_link"
				onClick={this.onClickLogOutFunctions }
			>
				Log Out
			</NavLink>
		]

		const logged_out_links = [
			<NavLink
				key={"h_login"}
				to="/login"
				name="header_log_in_button"
				interaction="click"
				className="default_header_link"
				onClick={this.onClickLogInFunctions }
			>
				Login
			</NavLink>,
			<NavLink
				key={"h_signup"}
				to="/signup"
				name="header_sign_up_button"
				interaction="click"
				className="default_header_link"
				onClick={this.onClickSignUpFunctions }
			>
				Sign Up
			</NavLink>
		]

		const guest_header = [
			logged_out_links
		]

		const normal_header = [
			user_greeting,
			logged_in_links
		]

		const admin_header = [
			user_greeting,
			<NavLink
				key={"h_backroom"}
				to="/backroom"
				className="default_header_link"
				onClick={ this.onClickBackroomFunctions }
			>
				Admin Panel
			</NavLink>,
			logged_in_links
		]

		return(
			<>
				<div className="header_left">
					{ home_link }
				</div>
				<div className="header_right">
					{
						{
							false: logged_out_links,
							true: (() => {
								switch(this.props.access) {
									case 'guest': return guest_header;
									case 'normal': return normal_header;
									case 'admin': return admin_header;
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