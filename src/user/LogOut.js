import React from 'react'
import { Redirect } from 'react-router'

import '../css/LogOut.css'

export default class LogOut extends React.Component {

	state = {
		user_id: "",
		logOutSuccess: false,
		hoverConfirm: false,
		hoverCancel: false,
		cancel: false
	}

	componentDidMount(){
		this.setState({
			user_id: this.props.user_id
		})
	}

	onClickConfirm = (event) => {
		this.onClickUpdateTrafficFunctions(event)
		this.props.logOut(this.props.token)
		this.setState({
			logOutSuccess: true
		})
	}

	onClickCancel = (event) => {
		this.onClickUpdateTrafficFunctions(event)
		this.setState({
			cancel: true
		})
	}

	onHoverConfirm = () => {
		this.setState({
			hoverConfirm: true
		})
	}

	offHoverConfirm = () => {
		this.setState({
			hoverConfirm: false
		})
	}

	onHoverCancel = () => {
		this.setState({
			hoverCancel: true
		})
	}

	offHoverCancel = () => {
		this.setState({
			hoverCancel: false
		})
	}

	onClickFunctionsLogOut = (event) => {
		this.onClickUpdateTrafficFunctions(event)
		this.props.logOut(this.props.token)
	}

	onClickUpdateTrafficFunctions = (event) => {
		this.props.update_traffic_data({
			user_id: this.props.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		})
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