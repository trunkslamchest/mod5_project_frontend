import React from 'react'
import { Redirect } from 'react-router'

import './EditProfile.css'

export default class EditProfile extends React.Component {

	state = {
		new_user_name: "",
		updateSuccess: false,
		errors: []
	}

	componentDidMount(){
		this.setState({
			new_user_name: this.props.user_name
		})
	}

	onChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	onSubmitEditProfileFunctions = (event) => {
		this.EditProfileSubmitted(event)
	}

	onResetFunctions = (event) => {
		this.setState({
			new_user_name: this.props.user_name
		})
		console.log(this.state.new_user_name)
	}
	
	onCancelFunctions = (event) => {
		// <Redirect to='./dashboard' />
	}

	EditProfileSubmitted = (event) => {
		event.preventDefault()

		fetch(`http://localhost:3001/users/${this.props.user_id}`, {
			method: "PATCH",
			headers: {
				"content-type":"application/json"
			},
			body: JSON.stringify({
				user_name: this.state.new_user_name
			})
		})
		.then(res => res.json())
		.then(res_obj => {
			if (res_obj.errors) {
				this.setState({
					errors: res_obj.errors
				})
			} else {
				this.props.setToken(res_obj)
				this.setState({
					updateSuccess: true
				})
			}
		})
	}

	render(){
		return(
			<>
				{
					(!!this.state.errors) ? (
						<div className="default_error_report">
							{
							 this.state.errors.map( error =>
									<>
										{ error }
									</>
								)
							}
  						</div>
					)
						:
					(
						""
					)
				}
				{
					!(this.state.updateSuccess) ?
						<div className="default_container">
							<h3>Edit Profile</h3>
							{ this.props.username }
								<form className="default_form" onSubmit={ this.onSubmitEditProfileFunctions }>
									<label htmlFor="edit_username">Username</label>
									<input id="edit_user_name"
										type="text"
										onChange={ this.onChange }
										name="new_user_name"
										placeholder={ this.props.user_name }
										value={ this.state.new_user_name }
									/>

									<input className="default_button" type="submit" value="Update Profile" />
									<input className="default_button" type="reset" onClick={ this.onResetFunctions } value="Reset" />
									<input className="default_button" type="reset" onClick={ this.onCancelFunctions } value="Cancel" />
								</form>
						</div>
					:
						<Redirect to='./dashboard' />
				}
			</>
		)
	}
}