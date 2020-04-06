import React from 'react'
import { Redirect } from 'react-router'

import trafficFunctions from '../utility/trafficFunctions'

import './LogOut.css'

export default class LogOut extends React.Component {

	state = {
		logOutSuccess: false,
		hoverConfirm: false,
		hoverCancel: false,
		cancel: false
	}

	onClickConfirm = (event) => {
		this.onClickTrafficFunctions(event)
		this.props.logOut(this.props.token)
		this.setState({ logOutSuccess: true })
	}

	onClickCancel = (event) => {
		this.onClickTrafficFunctions(event)
		this.setState({ cancel: true })
	}

	onHoverConfirm = () => {
		this.setState({ hoverConfirm: true })
	}

	offHoverConfirm = () => {
		this.setState({ hoverConfirm: false })
	}

	onHoverCancel = () => {
		this.setState({ hoverCancel: true })
	}

	offHoverCancel = () => {
		this.setState({ hoverCancel: false })
	}

	onClickFunctionsLogOut = (event) => {
		this.onClickTrafficFunctions(event)
		this.props.logOut(this.props.token)
	}

	onClickTrafficFunctions = (event) => {
		let elementInfo = {
			user_id: this.props.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		}

		trafficFunctions('element', 'http://localhost:3001/traffics', elementInfo)
	}

	render(){

		const redirect_to_dash = <Redirect to="/dashboard" />
		const redirect_to_index = <Redirect to="/" />

		const confirmation_buttons = [
			<button
				key={"lo1"}
				name="log_out_form"
				interaction="submit"
				className="confirm_button"
				onClick={ this.onClickConfirm }
				onMouseEnter={this.onHoverConfirm}
				onMouseLeave={this.offHoverConfirm}
			>
				{this.state.hoverConfirm ? "✔" : "Yes"}
			</button>,
			<button
				key={"lo2"}
				name="log_out_form"
				interaction="cancel"
				className="cancel_button"
				onClick={ this.onClickCancel }
				onMouseEnter={this.onHoverCancel}
				onMouseLeave={this.offHoverCancel}
			>
				{this.state.hoverCancel ? "✘" : "No"}
			</button>
		]

		const log_out_form =
			<div className="alt_header">
				<h3>Are you sure you want to log out?</h3>
				<div className="default_centered_buttons_container">
					{
						{
							true: redirect_to_dash,
							false: (() => {
								switch(this.state.logOutSuccess) {
									case true: return redirect_to_index;
									case false: return confirmation_buttons;
									default: return null;
								}
							})()
						}[this.state.cancel]
					}
				</div>
			</div>

		return(
			<div className="default_wrapper">
				{localStorage.length === 0 ? redirect_to_index : log_out_form }
			</div>
		)
	}
}