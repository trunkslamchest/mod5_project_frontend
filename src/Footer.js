import React from 'react'
import { NavLink } from 'react-router-dom'

import './css/Footer.css'

import footer_logo from './assets/footer_logo.png'
import footer_logo_hover from './assets/footer_logo_hover.png'

import flatiron_logo from './assets/footer_logo_flatiron.png'
import open_trivia_logo from './assets/footer_logo_open_trivia.png'
import postgres_logo from './assets/footer_logo_postgres.png'
import rails_logo from './assets/footer_logo_rails.png'
import react_logo from './assets/footer_logo_react.png'

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


	render(){

	const home_link = [
		<NavLink
			exact to="/"
			key={"f_home_link"}
			name="footer_home_button"
			interaction="click"
			// className="home_link"
			onClick={this.onClickHomeFunctions }
		>
			<img src={ this.state.hover ? footer_logo_hover : footer_logo } onMouseEnter={this.hoverOn}  onMouseLeave={this.hoverOff} alt="Link To Home Page"/>
		</NavLink>
	]

	const extra_links = [
		<NavLink
			exact to="/about"
			key={"about_link"}
			name="footer_about_button"
			interaction="click"
			onClick={this.onClickAboutFunctions }
		>
		About
		</NavLink>,
			<NavLink
			exact to="/terms_of_service"
			key={"tos_link"}
			name="footer_tos_button"
			interaction="click"
			onClick={this.onClickTOSFunctions }
		>
			Terms Of Service
		</NavLink>,
			<NavLink
			exact to="/privacy"
			key={"privacy_link"}
			name="footer_privacy_button"
			interaction="click"
			onClick={this.onClickPrivacyFunctions }
		>
			Privacy
		</NavLink>,
		<NavLink
			exact to="/careers"
			key={"career_link"}
			name="footer_career_button"
			interaction="click"
			onClick={this.onClickCareerFunctions }
		>
			Careers
		</NavLink>,
		<NavLink
		exact to="/contact"
		key={"contact_link"}
		name="footer_contact_button"
		interaction="click"
		// className="extra_link"
		onClick={this.onClickContactFunctions }
	>
		Contact
	</NavLink>,
	]

	const footer_logos = [
		<img src={ flatiron_logo } className="logo_rectangle" alt="The Flatiron School"/>,
		<img src={ open_trivia_logo } className="logo_rectangle" alt="Open Trivita Database"/>,
		<img src={ postgres_logo } className="logo_square" alt="PostgreSQL"/>,
		<img src={ rails_logo } className="logo_rectangle" alt="Ruby On Rails"/>,
		<img src={ react_logo } className="logo_rectangle" alt="React"/>,

	]

	const fine_print = 
		<>
			 All NHL logos and marks and NHL team logos and marks depicted herein are the property of the NHL and the respective teams and may not be reproduced without the prior written consent of NHL Enterprises, L.P. © NHL 2019. All Rights Reserved. The Zamboni word mark and configuration of the Zamboni ice resurfacing machine are registered trademarks of Frank J. Zamboni & Co., Inc.© Frank J. Zamboni & Co., Inc. 2019.All Rights Reserved. Any other third party trademarks or copyrights are the property of their respective owners. All rights reserved.
		</>

	const copy_right = 
		<>
		© 2019 Created by Austin Smith. All rights reserved. All trademarks are property of their respective owners in the US and other countries.
		</>

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
					<div className="copy_right">
						{ copy_right }
					</div>
				</div>
				<div className="footer_right">
					{ home_link }
				</div>
			</>
		)
	}
}