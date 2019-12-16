import React from 'react'

import './Home.css'

export default class Home extends React.Component {

	onClickUpdateTrafficFunctions = (event) => {
		this.props.update_traffic_data({
			user_id: this.props.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		})
	}

	render(){
		return(
			<div className="default_wrapper">
				<div className="default_header">
					Index Page Template
				</div>
			</div>
		)
	}
}