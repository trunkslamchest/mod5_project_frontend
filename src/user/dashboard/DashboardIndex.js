import React from 'react'

export default class DashboardIndex extends React.Component{

	render(){

		return(
			<div className="dasboard_index">
				<div className="alt_header">
					<h3>Welcome, {this.props.first_name}!</h3>
				</div>
			</div>
		)
	}
}