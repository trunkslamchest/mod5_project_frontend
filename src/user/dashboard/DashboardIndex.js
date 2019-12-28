import React from 'react'

import {
        //  Link
        } from 'react-router-dom'

export default class DashboardIndex extends React.Component{

	render(){

		return(
			<div className="dashboard_header">
				<h3 >Welcome, {this.props.first_name}!</h3>
			</div>
		)
	}
}