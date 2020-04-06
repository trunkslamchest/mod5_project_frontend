import React from 'react'
import { NavLink } from 'react-router-dom'

import trafficFunctions from '../utility/trafficFunctions'

import './Header.css'

import header_logo from '../assets/header_logo.png'
import header_logo_hover from '../assets/header_logo_hover.png'

export default class Header extends React.Component {

	state={
		hover: false
	}

	hoverOn = () => {
		this.setState({
			hover: true
		})
	}

	hoverOff = () => {
		this.setState({
			hover: false
		})
	}

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
		let elementInfo = {
			user_id: this.props.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		}

		trafficFunctions('element', 'http://localhost:3001/traffics', elementInfo)
	}

	render(){

		const home_link = [
			<NavLink
				exact to="/"
				key={"h_home_link"}
				name="header_home_button"
				interaction="click"
				onClick={this.onClickHomeFunctions }
			>
				<img
					src={ this.state.hover ? header_logo_hover : header_logo }
					name="header_home_button"
					interaction="click"
					onMouseEnter={this.hoverOn}
					onMouseLeave={this.hoverOff}
					alt="Link To Home Page"
				/>
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
				to="/quick_play"
				name="header_quick_play_button"
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
				to="/log_in"
				name="header_log_in_button"
				interaction="click"
				className="default_header_link"
				onClick={this.onClickLogInFunctions }
			>
				Login
			</NavLink>,
			<NavLink
				key={"h_signup"}
				to="/sign_up"
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

		const normal_header = <>
			<>{ user_greeting }</>
			<div className="header_nav_links">
				{logged_in_links}
			</div>
		</>

		const admin_header = <>
			<>{ user_greeting }</>
			<div className="header_nav_links">
				<NavLink
					key={"h_backroom"}
					to="/backroom"
					className="default_header_link"
					onClick={ this.onClickBackroomFunctions }
				>
					Admin Panel
				</NavLink>
				{logged_in_links}
			</div>
		</>

		const no_header = [" "]

		return(
			<>
				<div className="header_left">
					{ !!this.props.token ? home_link : no_header }
				</div>
				<div className="header_right">
					{
						{
							false: no_header,
							true: (() => {
								switch(localStorage.access) {
									case false: return guest_header;
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