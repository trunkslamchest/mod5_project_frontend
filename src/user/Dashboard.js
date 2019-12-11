import React from 'react'
import {
         Link
        } from 'react-router-dom'

import './Dashboard.css'

export default class Dashboard extends React.Component{
	
	
	// birth_day_format = () => {
	// 	const number_ends = [ "st", "nd", "rd", "th" ]
	// 	// let number_split = 0
	// 	if (this.props.birth_day) {
	// 		const number_split = this.props.birth_day.split('').pop()
	// 			// if ((number_split === '1')) {
	// 			// 	return `${this.props.birth_day}` + number_ends[0]
	// 			// } else if (number_split === '2') {
	// 			// 	return `${this.props.birth_day}` + number_ends[1]
	// 			// } else if (number_split === '3') {
	// 			// 	return `${this.props.birth_day}` + number_ends[2]
	// 			// } else {
	// 			// 	return `${this.props.birth_day}` + number_ends[3]
	// 			// }
	// 	}
	// 			return number_split
	// 	}
	
	render(){
		
	// const birth_day_format_return  = !!(this.props.birth_day) ? ( this.birth_day_format() ) : ""
		// console.log(this.props.birth_day.split('', 1))
		// console.log(birth_day_format_return)
		// console.log(this.birth_day_format())
		// console.log(!!this.props.birth_day === true)
		
		// console.log(number_ends[0])
	const age = 2019 - this.props.birth_year
	const birthday = `${this.props.birth_month} ${this.props.birth_day}`
	const address = `${this.props.house_number} ${this.props.street_name}, ${this.props.city_town} ${this.props.state}, ${this.props.zip_code}`
		return(
			<div className="dashboard_container">
				<div className="dashboard_greeting">
					<h2>Welcome, {this.props.first_name}!</h2>
					<Link to='/edit_profile' className="edit_profile_link">Edit Profile</Link>
				</div>
				<div className="dashboard_info">
					<ul>
						<li>User ID: { this.props.user_id }</li>
						<li>User Name: { this.props.user_name }</li>
						<li>Email Address: { this.props.email }</li>
						<li>Access: { this.props.access }</li>
					<hr />
						<li>First Name: { this.props.first_name }</li>
						<li>Last Name: { this.props.last_name }</li>
						<li>Gender: { this.props.gender }</li>
					<hr />
						<li>Age: { age }</li>
						{/* { (!!this.props.birth_day) ? (this.birth_day_format()) : ("") } */}
	<li>Birthday: {this.props.birth_month } { this.props.formatted_birth_day}</li>
					<hr />
						<li>Address: { address }</li>
					
					</ul>
				</div>
				<div className="dashboard_votes">
					<h3>My Votes</h3>
				</div>
				<div className="dashboard_comments">
					<h3>My Comments</h3>
				</div>
			</div>
		)
	}
}