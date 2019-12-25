import React from 'react'
import { Redirect } from 'react-router'

import '../css/LogIn.css'

export default class LogIn extends React.Component {

	state = {
		loggedIn: false,
		cancel: false,
		user_name: "",
		password: "",
		errors: []
	}

	componentDidMount(){
		// this.onMountAsync()
	}

	// onMountAsync = async () => {
	// 	try {
	// 		await !!this.props
	// 		await this.props.user_id;
	// 		await this.onPageLoadFunctions()
	// 	} catch(errors) {
	// 		console.log(errors);
	// 	}
	// }

	onChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	onSubmitLoginFunctions = async (event) => {
		this.logInSubmitted(event)
		this.props.updateLogin()
	}

	logInSubmitted = (event) => {
		event.preventDefault()
		event.persist()
		fetch("http://localhost:3001/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				user_name: this.state.user_name,
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
				this.onPageLoadFunctions()
				this.onSubmitUpdateTrafficFunctions(event, res_obj)
				this.props.setToken(res_obj)
				this.setState({
					loggedIn: true
				})
			}
		})
	}

	onCancelFunctions = (event) => {
		this.onClickUpdateTrafficFunctions(event)
		this.setState({
			cancel: true
		})
	}

	onClickUpdateTrafficFunctions = (event) => {
		this.props.update_traffic_data({
			user_id: this.props.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		})
	}

	onSubmitUpdateTrafficFunctions = (event, res_obj) => {
		this.props.update_traffic_data({
			user_id: res_obj.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		})
	}

	onPageLoadFunctions = () => {
		this.props.update_page_data({
			user_id: this.props.user_id,
			page_name: "log_in"
		})
	}

	render(){
	const login_form =
		<div className="default_wrapper">
			<div className="default_container_header">
				<h3>Log In</h3>
			</div>
			<form
				name="log_in_form"
				interaction="submit"
				className="log_in_form"
				onSubmit={ this.onSubmitLoginFunctions }
			>
				<div className="login_div">
					<label htmlFor="log_in_user_name">User Name</label>
					<br />
					<input
						id="log_in_user_name"
						type="text"
						name="user_name"
						onChange={ this.onChange }
						value={ this.state.user_name }
					/>
					<br />
					<label htmlFor="log_in_password">Password</label>
					<br />
					<input
						id="log_in_password"
						type="password"
						name="password"
						onChange={ this.onChange }
						value={ this.state.password }
					/>
				</div>
				<br />
				<div className="log_in_centered_buttons_container">
					<input
						className="alt_button"
						type="submit"
					/>
					<input
						type="reset"
						name="Log In Form"
						interaction="Cancel"
						className="alt_button"
						onClick={ this.onCancelFunctions }
						value="Cancel"
					/>
				</div>
			</form>
		</div>
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
			{
				true: (() => {
					switch(this.state.cancel) {
						case true: return <Redirect to='/' />
						case false: return login_form
						default: return null;
					}
				})(),
				false: <Redirect to='/dashboard' />
			}[!(this.state.loggedIn)]
		}
	</>
	}
}