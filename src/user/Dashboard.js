import React from 'react'
import {
         Link
        } from 'react-router-dom'

import './Dashboard.css'

export default class Dashboard extends React.Component{
	
	
	render(){
		console.log(this.props)
	const age = 2019 - this.props.birth_year
		
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
	<li>Birthday: { this.props.birth_month }, { this.props.birth_day }</li>
						
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