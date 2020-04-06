import React from 'react'
import { NavLink } from 'react-router-dom'

import trafficFunctions from '../utility/trafficFunctions'

import './Footer.css'

import footer_logo from '../assets/footer_logo.png'
import footer_logo_hover from '../assets/footer_logo_hover.png'

import flatiron_logo from '../assets/footer_logo_flatiron.png'
import open_trivia_logo from '../assets/footer_logo_open_trivia.png'
import postgres_logo from '../assets/footer_logo_postgres.png'
import rails_logo from '../assets/footer_logo_rails.png'
import react_logo from '../assets/footer_logo_react.png'

export default class Footer extends React.Component {

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

	onClickTOSFunctions = (event) => {
		this.onClickUpdateTrafficFunctions(event)
	}

	onClickPrivacyFunctions = (event) => {
		this.onClickUpdateTrafficFunctions(event)
	}

	onClickDisclaimerFunctions = (event) => {
		this.onClickUpdateTrafficFunctions(event)
	}

	onClickFooterLinksFunctions = (event) => {
		this.onClickUpdateTrafficFunctions(event)
	}

	onClickUpdateTrafficFunctions = (event) => {

		let userID

		if (localStorage.access) {
			userID = localStorage.user_id
		} else {
			userID = this.props.user_id
		}

		let elementInfo = {
			user_id: userID,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		}

		trafficFunctions('element', 'http://localhost:3001/traffics', elementInfo)
	}

	render(){

	const home_link = [
		<NavLink
			exact to="/"
			key={"f_home_link"}
			name="footer_home_button"
			interaction="click"
			onClick={this.onClickHomeFunctions }
		>
			<img
				src={ this.state.hover ? footer_logo_hover : footer_logo }
				name="footer_home_button"
				interaction="click"
				onMouseEnter={this.hoverOn}
				onMouseLeave={this.hoverOff}
				alt="Link To Home Page"
			/>
		</NavLink>
	]

	const extra_links = [
			<NavLink
			exact to="/terms_of_service"
			key={"tos_link"}
			name="footer_tos_button"
			interaction="click"
			target="_blank"
			onClick={this.onClickTOSFunctions }
		>
			Terms Of Service
		</NavLink>,
			<NavLink
			exact to="/privacy"
			key={"privacy_link"}
			name="footer_privacy_button"
			interaction="click"
			target="_blank"
			onClick={this.onClickPrivacyFunctions }
		>
			Privacy
		</NavLink>,
		<NavLink
			exact to="/disclaimer"
			key={"disclaimer_link"}
			name="footer_disclaimer_button"
			interaction="click"
			target="_blank"
			onClick={this.onClickDisclaimerFunctions }
		>
			Disclaimer
		</NavLink>
	]

	const footer_logos = [
		<a
			key={"flatiron_logo"}
			href="https://flatironschool.com/"
			rel="noopener noreferrer"
			target="_blank"
		>
			<img
				src={ flatiron_logo }
				className="logo_rectangle"
				alt="The Flatiron School"
				name="footer_flatiron_logo"
				interaction="click"
				onClick={ this.onClickFooterLinksFunctions }
			/>
		</a>,
		<a
			key={"open_trivia_logo"}
			href="https://opentdb.com/"
			rel="noopener noreferrer"
			target="_blank"
		>
			<img
				src={ open_trivia_logo }
				className="logo_rectangle"
				alt="Open Trivita Database"
				name="footer_open_trivia_logo"
				interaction="click"
				onClick={ this.onClickFooterLinksFunctions }
			/>
		</a>,
		<a
			key={"postgres_logo"}
			href="https://www.postgresql.org/"
			rel="noopener noreferrer"
			target="_blank"
		>
			<img
				src={ postgres_logo }
				className="logo_rectangle"
				alt="PostgreSQL"
				name="footer_postgres_logo"
				interaction="click"
				onClick={ this.onClickFooterLinksFunctions }
			/>
		</a>,
		<a
			key={"rails_logo"}
			href="https://rubyonrails.org/"
			rel="noopener noreferrer"
			target="_blank"
		>
			<img
				src={ rails_logo }
				className="logo_rectangle"
				alt="Ruby On Rails"
				name="footer_rails_logo"
				interaction="click"
				onClick={ this.onClickFooterLinksFunctions }
			/>
		</a>,
		<a
			key={"react_logo"}
			href="https://reactjs.org/"
			rel="noopener noreferrer"
			target="_blank"
		>
			<img
				src={ react_logo }
				className="logo_rectangle"
				alt="React"
				name="footer_react_logo"
				interaction="click"
				onClick={ this.onClickFooterLinksFunctions }
			/>
		</a>,

	]

	const fine_print = <> © 2019 Created by Austin Smith. All SmartApp™ logos and marks depicted herein are the property of SmartApp™ Enterprises and the respective employees and may not be reproduced without the prior written consent of SmartApp™ Enterprises, L.P. © SmartApp™ 2019. All Rights Reserved. The Zamboni word mark and configuration of the Zamboni ice resurfacing machine are registered trademarks of Frank J. Zamboni & Co., Inc.© Frank J. Zamboni & Co., Inc. 2019.All Rights Reserved. Any other third party trademarks or copyrights are the property of their respective owners. All rights reserved. </>

		return(
			<>
				<div className="footer_left">
					<div className="links">
						<>{ extra_links }</>
					</div>
					<div className="logos">
						<>{ footer_logos }</>
					</div>
					<div className="fine_print">
						{ fine_print }
					</div>
				</div>
				<div className="footer_right">
					{ home_link }
				</div>
			</>
		)
	}
}