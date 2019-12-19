import React from 'react'

import '../DBedit.css'

export default class DBeditUsersInfo extends React.Component{

	componentDidMount(){}

	editUserFunctions = () => {
		this.props.displaySwitchtoEdit(this.props.user)
	}

	deleteUserFunctions = () => {
		this.props.displaySwitchToDelete(this.props.user)
	}

	render(){
		const user = this.props.user

		const user_info_list =
			<ul>
				<li>User ID: {user.id}</li>
				<li>User Name: {user.user_name}</li>
				<li>Email Address: {user.email}</li>
				<li>Access Level: {user.access}</li>
			<br />
				<li>First Name: {user.first_name}</li>
				<li>Last Name: {user.last_name}</li>
				<li>Gender: {user.gender}</li>
			<br />
				<li>Birth Day: {user.birth_day}</li>
				<li>Birth Month: {user.birth_month}</li>
				<li>Birth Year: {user.birth_year}</li>
			<br />
				<li>Apartment/House Number: {user.house_number}</li>
				<li>Street Name: {user.street_name}</li>
				<li>City/Town: {user.city_town}</li>
				<li>State: {user.state}</li>
				<li>Zip Code: {user.zip_code}</li>
			<br />
				<li>Join Day: {user.join_day}</li>
				<li>Join Month: {user.join_month}</li>
				<li>Join Year: {user.join_year}</li>
			</ul>

		const user_info = [
			user_info_list
		]

		return(
			<div className="DBedit_default_wrapper">
				<h3>User Info</h3>
				{ user_info }
				<hr />
				<div className="DBedit_default_buttons_container">
					<button className="alt_button" value="Edit User" onClick={ this.editUserFunctions }>
						Edit User
					</button>
					<button className="alt_button" value="Delete User" onClick={ this.deleteUserFunctions }>
						Delete User
					</button>
				</div>
			</div>
		)
	}
}