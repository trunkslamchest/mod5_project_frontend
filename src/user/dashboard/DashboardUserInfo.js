import React from 'react'

import {
         Link
        } from 'react-router-dom'

export default class DashboardUserInfo extends React.Component{

	state={

	}

	onClickEditProfileFunctions = (event) => {
		this.onClickUpdateTrafficFunctions(event)
	}

	onClickDeleteProfileFunctions = (event) => {
		this.onClickUpdateTrafficFunctions(event)
	}

	formatted_birth_day = () => {
		const number_ends = [ "st", "nd", "rd", "th" ]
		const number_split = localStorage.birth_day.split('').pop()

		if ((parseInt(this.props.birth_day, 10) > 10) && (parseInt(this.props.birth_day, 10) < 19)) {
			return `${this.props.birth_day}` + number_ends[3]
		} else {
			if ((number_split === '1')) {
				return `${this.props.birth_day}` + number_ends[0]
			} else if (number_split === '2') {
				return `${this.props.birth_day}` + number_ends[1]
			} else if (number_split === '3') {
				return `${this.props.birth_day}` + number_ends[2]
			} else {
				return `${this.props.birth_day}` + number_ends[3]
			}
		}
	}

	formatted_join_day = () => {
		const number_ends = [ "st", "nd", "rd", "th" ]
		const number_split = localStorage.join_day.split('').pop()

		if ((parseInt(this.props.join_day, 10) > 10) && (parseInt(this.props.join_day, 10) < 19)) {
			return `${this.props.join_day}` + number_ends[3]
		} else {
			if ((number_split === '1')) {
				return `${this.props.join_day}` + number_ends[0]
			} else if (number_split === '2') {
				return `${this.props.join_day}` + number_ends[1]
			} else if (number_split === '3') {
				return `${this.props.join_day}` + number_ends[2]
			} else {
				return `${this.props.join_day}` + number_ends[3]
			}
		}
	}

	onClickUpdateTrafficFunctions = (event) => {
		this.props.update_traffic_data({
			user_id: this.props.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		})
	}

	onPageLoadFunctions = (props) => {
		this.props.update_page_data({
			user_id: props.user_id,
			page_name: "user_dashboard"
		})
	}

	render(){
		const age = 2019 - this.props.birth_year
		const address = `${this.props.house_number} ${this.props.street_name}, ${this.props.city_town} ${this.props.state}, ${this.props.zip_code}`

		const dashboard_edit_buttons = [
			<Link
				key={ "dashboard_edit_profile" }
				to='/edit_profile'
				name="edit_profile_button"
				interaction="click"
				className="alt_button"
				onClick={ this.onClickEditProfileFunctions }
			>
				Edit Profile
			</Link>,
			<Link
				key={ "dashboard_delete_profile" }
				to='/delete_profile'
				name="delete_profile_button"
				interaction="click"
				className="alt_button"
				onClick={ this.onClickDeleteProfileFunctions }
			>
				Delete Profile
			</Link>
		]

		return(
			<>
				<ul>
					<li>User Name: {this.props.user_name }</li>
					<li>Email Address: {this.props.email }</li>
					<br />
					<li>First Name: { this.props.first_name }</li>
					<li>Last Name: {this.props.last_name }</li>
					<li>Gender: {this.props.gender }</li>
					<br />
					<li>Age: { age }</li>
					<li>Birthday: { this.props.birth_month } { this.formatted_birth_day() }</li>
					<br />
				 	<li>Address: { address }</li>
					<br />
					<li>Join Date: {this.props.join_month } {this.formatted_join_day() }, { this.props.join_year }</li>
				</ul>
				<hr />
				<div className="default_centered_buttons_container">
					{ dashboard_edit_buttons }
				</div>
			</>
		)
	}
}