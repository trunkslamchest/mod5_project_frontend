import React from 'react'
import { Redirect } from 'react-router'

import './EditProfile.css'

export default class EditProfile extends React.Component {

	state = {
		edit_user_name: "",
		edit_email: "",
		edit_first_name: "",
		edit_last_name: "",
		updateSuccess: false,
		errors: []
	}

	componentDidMount(){
		if (this.props.user_id) {
			this.setState({
				edit_user_name: this.props.user_name,
				edit_email: this.props.email,
				edit_first_name: this.props.first_name,
				edit_last_name: this.props.last_name
			})
		}
	}

	onChange = async (event) => {
		event.persist()
		try {
			const update_fields = await this.update_selected_fields(event)
		} catch(e) {
    		console.error("Problem", e)
  		}
	}

	update_selected_fields = async (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	onSubmitEditProfileFunctions = async (event) => {
		event.persist()
		event.preventDefault()
		try {
			this.EditProfileSubmitted(event)
		} catch(e) {
    		console.error("Problem", e)
  		}
	}

	EditProfileSubmitted = (event) => {
		fetch(`http://localhost:3001/users/${this.props.user_id}`, {
			method: "PATCH",
			headers: {
				"content-type":"application/json"
			},
			body: JSON.stringify({
				user_name: event.target["edit_user_name"].value,
				email: event.target["edit_email"].value,
				first_name: event.target["edit_first_name"].value,
				last_name: event.target["edit_last_name"].value
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

	onResetFunctions = (event) => {
		this.setState({
			edit_user_name: this.props.user_name,
			edit_email: this.props.email,
			edit_first_name: this.props.first_name,
			edit_last_name: this.props.last_name
		}, console.log("reset functions", this.state))
	}

	// onCancelFunctions = (event) => {
	// 	// <Redirect to='./dashboard' />
	// }

	render(){

		// console.log("props", this.props)
		// console.log("props load test", !!(this.props.user_id))
		// console.log("current state", this.state)
		// console.log("current state test", this.state.edit_user_name === false)

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
								<form className="default_form" onSubmit={ this.onSubmitEditProfileFunctions }>
									<label htmlFor="edit_user_name">Username</label>
									<input id="edit_user_name"
										type="text"
										onChange={ this.onChange }
										name="edit_user_name"
										placeholder={ this.props.user_name }
										value={ (this.state.edit_user_name === "") ? (this.props.user_name) : (this.state.edit_user_name) }
									/>
									<label htmlFor="edit_email">Email</label>
									<input id="edit_email"
										type="text"
										onChange={ this.onChange }
										name="edit_email"
										placeholder={ this.props.email }
										value={ (this.state.edit_email === "") ? (this.props.email) : (this.state.edit_email) }
									/>
									<hr />
									<label htmlFor="edit_first_name">First Name</label>
									<input id="edit_first_name"
										type="text"
										onChange={ this.onChange }
										name="edit_first_name"
										placeholder={ this.props.first_name }
										value={ (this.state.edit_first_name === "") ? (this.props.first_name) : (this.state.edit_first_name) }
									/>
									<label htmlFor="edit_last_name">Last Name</label>
									<input id="edit_last_name"
										type="text"
										onChange={ this.onChange }
										name="edit_last_name"
										placeholder={ this.props.last_name }
										value={ (this.state.edit_last_name === "") ? (this.props.last_name) : (this.state.edit_last_name) }
									/>
									<input className="default_button" type="submit" value="Update Profile" />
									<input className="default_button" type="reset" onClick={ this.onResetFunctions } value="Reset" />
									{/* <input className="default_button" type="reset" onClick={ this.onCancelFunctions } value="Cancel" /> */}
								</form>
						</div>
					:
						<Redirect to='./dashboard' />
				}
			</>
		)
	}
}