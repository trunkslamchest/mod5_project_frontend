import React from 'react'
import { Redirect } from 'react-router'

import './DeleteProfile.css'

export default class DeleteProfile extends React.Component {

	state = {
		user_id: "",
		deleteSuccess: false,
		cancel: false
	}

	componentDidMount(){
		this.setState({
			user_id: this.props.user_id
		})
	}

	onClickYes = () => {
		fetch(`http://localhost:3001/users/${this.props.user_id}`, {
			method: "DELETE"
		})
		.then(
			this.setState({
				deleteSuccess: true
			}, this.props.log_out())
		)
	}

	onClickNo = () => {
		this.setState({
			cancel: true
		})
	}

	render(){

		const redirect_to_dash = <Redirect to="/dashboard" />
		const redirect_to_index = <Redirect to="/" />

		const confirmation_buttons = [
			<button className="default_button" onClick={ this.onClickYes }>Yes</button>,
			<button className="default_button" onClick={ this.onClickNo }>No</button>
		]

		return(
			<div className="default_container">
				<div className="default_container_header">
					<h3>Are you sure you want to delete your profile?</h3>
				</div>
				<div className="delete_profile_buttons_container">
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
		)
	}
}