import React from 'react'

import {
         Link
        } from 'react-router-dom'

import '../../css/DashboardUserInfo.css'

export default class DashboardUserInfo extends React.Component{

	state={}

	componentDidMount(){
		this.onPageLoadFunctions()
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

		if ((parseInt(this.props.user.birth_day, 10) > 10) && (parseInt(this.props.user.birth_day, 10) < 19)) {
			return `${this.props.user.birth_day}` + number_ends[3]
		} else {
			if ((number_split === '1')) {
				return `${this.props.user.birth_day}` + number_ends[0]
			} else if (number_split === '2') {
				return `${this.props.user.birth_day}` + number_ends[1]
			} else if (number_split === '3') {
				return `${this.props.user.birth_day}` + number_ends[2]
			} else {
				return `${this.props.user.birth_day}` + number_ends[3]
			}
		}
	}

	formatted_join_day = () => {
		const number_ends = [ "st", "nd", "rd", "th" ]
		const number_split = localStorage.join_day.split('').pop()

		if ((parseInt(this.props.user.join_day, 10) > 10) && (parseInt(this.props.user.join_day, 10) < 19)) {
			return `${this.props.user.join_day}` + number_ends[3]
		} else {
			if ((number_split === '1')) {
				return `${this.props.user.join_day}` + number_ends[0]
			} else if (number_split === '2') {
				return `${this.props.user.join_day}` + number_ends[1]
			} else if (number_split === '3') {
				return `${this.props.user.join_day}` + number_ends[2]
			} else {
				return `${this.props.user.join_day}` + number_ends[3]
			}
		}
	}

	onClickUpdateTrafficFunctions = (event) => {
		event.persist()
		this.props.update_traffic_data({
			user_id: this.props.user.id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		})
	}

	onPageLoadFunctions = () => {
		this.props.update_page_data({
			user_id: localStorage.user_id,
			page_name: "dashboard_user_info"
		})
	}

	render(){

		const age = 2019 - this.props.user.birth_year

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
			<div className="user_info_wrapper">
				<div className="alt_header">
					<h3>{ this.props.user.user_name }</h3>
					<h5>{ this.props.user.email }</h5>
				</div>
				<div className="user_info_body">
					<ul>
						<li>{ this.props.user.first_name }</li>
						<li>{this.props.user.last_name }</li>
					</ul>
					<ul>
						<li>{this.props.user.gender }</li>
						<li>{ age } years old</li>
						<li>{ this.props.user.birth_month } { this.formatted_birth_day() }, { this.props.user.birth_year }</li>
					</ul>
					<ul>
						<li>{ this.props.user.house_number } { this.props.user.street_name }</li>
						<li>{this.props.user.city_town}, {this.props.user.state}</li>
						<li>{ this.props.user.zip_code }</li>
					</ul>
					<ul>
						<li>Join Date</li>
						<li>{this.props.user.join_month } {this.formatted_join_day() }, { this.props.user.join_year }</li>
					</ul>
				<div className="user_info_buttons_container">
					{ dashboard_edit_buttons }
				</div>
				</div>
			</div>
		)
	}
}