import React from 'react'
import { Redirect } from 'react-router'

import trafficFunctions from '../../utility/trafficFunctions'
import userFunctions from '../../utility/userFunctions'

import './EditProfile.css'

export default class DeleteProfile extends React.Component {

	state = {
		deleteSuccess: false,
		hoverConfirm: false,
		hoverCancel: false,
		cancel: false
	}

	componentDidMount(){
		this.onPageLoadFunctions()
	}

	onClickConfirm = (event) => {
		userFunctions('delete', `http://localhost:3001/users/${this.props.user_id}`)
		.then(
			this.setState({ deleteSuccess: true }, this.props.log_out(), this.onClickTrafficFunctions(event))
		)
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

	onClickTrafficFunctions = (event) => {
		let elementInfo = {
			user_id: this.props.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.attributes.name.value
		}

		trafficFunctions('element', 'http://localhost:3001/traffics', elementInfo)
	}

	onPageLoadFunctions = () => {
		let pageInfo = {
			user_id: localStorage.user_id,
			page_name: 'delete_profile',
		}

		trafficFunctions('page', 'http://localhost:3001/pages', pageInfo)
	}

	render(){

		const redirect_to_dash = <Redirect to="/dashboard" />
		const redirect_to_index = <Redirect to="/" />

		const confirmation_buttons = [
			<button
				key={"b1"}
				name="delete_profile_form"
				interaction="submit"
				className="confirm_button"
				onClick={ this.onClickConfirm }
				onMouseEnter={this.onHoverConfirm}
				onMouseLeave={this.offHoverConfirm}
			>
				{this.state.hoverConfirm ? "✔" : "Yes"}
			</button>,
			<button
				key={"b2"}
				name="delete_profile_form"
				interaction="cancel"
				className="cancel_button"
				onClick={ this.onClickCancel }
				onMouseEnter={this.onHoverCancel}
				onMouseLeave={this.offHoverCancel}
			>
				{this.state.hoverCancel ? "✘" : "No"}
			</button>
		]

		const delete_form = <>
			<div className="alt_header">
				<h3>Are you sure you want to delete your profile?</h3>
			<div className="delete_buttons_container">
				{
					{
						true: redirect_to_dash,
						false: (() => {
							switch(this.state.deleteSuccess) {
								case true: return redirect_to_index;
								case false: return confirmation_buttons;
								default: return null;
							}
						})()
					}[this.state.cancel]
				}
			</div>
			</div>
		</>

		return(
			<div className="default_wrapper">
				{localStorage.length === 0 ? redirect_to_index : delete_form }
			</div>
		)
	}
}