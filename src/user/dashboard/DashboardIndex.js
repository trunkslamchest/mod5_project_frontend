import React from 'react'

const DashboardIndex = (props) => {

		return(
			<div className="dasboard_index">
				<div className="alt_header">
					<h3>Welcome, {props.first_name}!</h3>
				</div>
			</div>
		)

}

export default DashboardIndex