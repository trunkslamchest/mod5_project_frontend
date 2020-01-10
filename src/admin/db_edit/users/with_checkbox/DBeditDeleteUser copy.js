import React from 'react'
import { Redirect } from 'react-router'

import './DBedit.css'

export default class DBeditDeleteUser extends React.Component {

	state = {
		user_id: "",
		deleteSuccess: false,
		cancel: false
	}

	componentDidMount(){
	}

	onMountAsync = async () => {
	}

	onClickYes = (event) => {
		fetch(`http://localhost:3001/users/${this.props.user_id}`, {
			method: "DELETE"
		})
		.then(

			this.setState({
				deleteSuccess: true
			}, this.props.displaySwitchToIndex('index'))
		)
	}

	onClickNo = (event) => {
		this.props.displaySwitchToIndex('index')
	}

	render(){
		
		console.log("delete user props", this.props)
		console.log("delete user state", this.state)
		
		const confirmation_buttons = [
			<button
				key={"b1"}
				name="delete_profile_form"
				interaction="submit"
				className="default_button"
				onClick={ this.onClickYes }
			>
				Yes
			</button>,
			<button
				key={"b2"}
				name="delete_profile_form"
				interaction="cancel"
				className="default_button"
				onClick={ this.onClickNo }
			>
				No
			</button>
		]

		return(
			<div className="DBedit_default_wrapper">
					<h3>Are you sure you want to delete this user?</h3>
				<div className="delete_profile_buttons_container">
					{ confirmation_buttons }
				</div>
			</div>
		)
	}
}