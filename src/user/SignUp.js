import React from 'react'
import { Redirect } from 'react-router'

import './SignUp.css'

export default class SignUp extends React.Component {

	state = {
		logIn: false,
		username: "",
		password: "",
		errors: []
	}

	onChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	onSubmitSignUpFunctions = (event) => {
		this.signUpSubmitted(event)
		this.props.updateLogin()
	}

	signUpSubmitted = (event) => {
		event.preventDefault()
		fetch("http://localhost:3001/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				username: this.state.username,
				password: this.state.password
			})
		})
	    .then(response => response.json())
	    .then(res_obj => {
			if (res_obj.errors) {
				this.setState({
					errors: res_obj.errors
				})
			} else {
				this.onClickUpdateTrafficFunctions(event, res_obj)
				this.props.setToken(res_obj)
				this.setState({
					loggedIn: true
				})
			}
		})
	}

	onClickUpdateTrafficFunctions = (event, res_obj) => {
		this.props.update_traffic_data({
			user_id: res_obj.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		})
	}

	render(){
		return <>
			{
		        (!!this.state.errors) ? (
		  				<div className="default_error_report">
		  					{
		              this.state.errors.map( error =>
		                <div className="default_error_item">
		                  { error }
		                </div>
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
				!(this.state.loggedIn) ?
					<div className="default_container">
						<form
							name="sign_up_form"
							interaction="submit"
							className="default_form"
							onSubmit={ this.onSubmitSignUpFunctions }
						>
							<h2>Sign Up</h2>
							<label htmlFor="sign_up_username">Username</label>
							<input id="log_in_username"
								type="text"
								onChange={ this.onChange }
								name="username"
								value={ this.state.username }
							/>
							<label htmlFor="sign_up_password">Password</label>
							<input id="log_in_password"
								type="password"
								onChange={ this.onChange }
								name="password"
								value={ this.state.password }
							/>
						<input className="default_button" type="submit" />
						</form>
					</div>
				:
					<Redirect to='/dashboard' />
			}
	</>
	}
}