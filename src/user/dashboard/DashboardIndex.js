import React from 'react'

import {
        //  Link
        } from 'react-router-dom'

export default class DashboardIndex extends React.Component{

	render(){

		return(
				<div className="dashboard_greeting">
					<h2>Welcome, {this.props.first_name}!</h2>
				</div>
		)
	}
}