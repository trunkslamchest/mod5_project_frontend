import React from 'react'
import {
         Link
        } from 'react-router-dom'

import './Dashboard.css'

export default class Dashboard extends React.Component{
	
	render(){
		return(
			<div className="dashboard_container">
				<div className="dashboard_greeting">
					<h2>Welcome, {this.props.first_name}!</h2>
					<Link to='/edit_profile' className="edit_profile_link">Edit Profile</Link>
				</div>
				<div className="dashboard_info">
					<ul>
						
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