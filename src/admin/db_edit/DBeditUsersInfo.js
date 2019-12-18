import React from 'react'

import {
		//  Link
	} from 'react-router-dom'

import './DBedit.css'




export default class DBeditUsersInfo extends React.Component{
	componentDidMount(){
	}

	deleteUserFunctions = () => {
		this.props.displaySwitchToDelete(this.props.user)
	}

	render(){
		const user = this.props.user

		const index_buttons = [
				<button className="default_button" value="Edit User" onClick={ this.editFieldFunctions }>
					Edit User
				</button>,
				<button className="default_button" value="Delete User" onClick={ this.deleteUserFunctions }>
					Delete User
				</button>
		]

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
			index_buttons,
			user_info_list
		]

		return(
			<div className="DBedit_user_wrapper">
					{ user_info }
			</div>
		)
	}
}