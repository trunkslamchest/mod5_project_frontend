import React from 'react'
import { Redirect } from 'react-router'

import '../css/LogOut.css'

export default class LogOut extends React.Component {

	state = {
		user_id: "",
		logOutSuccess: false,
		cancel: false
	}

	componentDidMount(){
		this.setState({
			user_id: this.props.user_id
		})
		this.onMountAsync()
	}

	onMountAsync = async () => {
		try {
			await this.props
			let user_id = await this.props.user_id;
			await this.onPageLoadFunctions(user_id)
		} catch(errors) {
			console.log(errors);
		}
	}

	onPageLoadFunctions = (user_id) => {
		this.props.update_page_data({
			user_id: user_id,
			page_name: "log_out"
		})
	}

	onClickYes = (event) => {
		this.onClickUpdateTrafficFunctions(event)
		this.props.logOut(this.props.token)
		this.setState({
			logOutSuccess: true
		})
	}

	onClickNo = (event) => {
		this.onClickUpdateTrafficFunctions(event)
		this.setState({
			cancel: true
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
				className="alt_button"
				onClick={ this.onClickYes }
			>
				Yes
			</button>,
			<button
				key={"lo2"}
				name="log_out_form"
				interaction="cancel"
				className="alt_button"
				onClick={ this.onClickNo }
			>
				No
			</button>
		]

		return(
			<div className="default_wrapper">
				<div className="default_container_header">
					<h3>Are you sure you want to log out?</h3>
				</div>
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
		)
	}
}