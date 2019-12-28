import React from 'react'
import { Redirect } from 'react-router'

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
		// this.onMountAsync()
	}

	// onMountAsync = async () => {
	// 	try {
	// 		await this.props
	// 		let user_id = await this.props.user_id;
	// 		await this.onPageLoadFunctions(user_id)
	// 	} catch(errors) {
	// 		console.log(errors);
	// 	}
	// }

	onClickYes = (event) => {
		fetch(`http://localhost:3001/users/${this.props.user_id}`, {
			method: "DELETE"
		})
		.then(
			this.setState({
				deleteSuccess: true
			}, this.props.log_out(), this.onClickUpdateTrafficFunctions(event))
		)
	}

	onClickNo = (event) => {
		this.onClickUpdateTrafficFunctions(event)
		this.setState({
			cancel: true
		})
	}

	onPageLoadFunctions = (user_id) => {
		this.props.update_page_data({
			user_id: user_id,
			page_name: "Delete Profile"
		})
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
				key={"b1"}
				name="delete_profile_form"
				interaction="submit"
				className="alt_button"
				onClick={ this.onClickYes }
			>
				Yes
			</button>,
			<button
				key={"b2"}
				name="delete_profile_form"
				interaction="cancel"
				className="alt_button"
				onClick={ this.onClickNo }
			>
				No
			</button>
		]

		const delete_form = <>
			<div className="default_header">
				<h3>Are you sure you want to delete your profile?</h3>
			</div>
			<div className="default_centered_buttons_container">
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
		</>

		return(
			<div className="default_wrapper">
				{localStorage.length === 0 ? redirect_to_index : delete_form }
			</div>
		)
	}
}