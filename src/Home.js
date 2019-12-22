import React from 'react'

import './css/Home.css'

export default class Home extends React.Component {

	componentDidMount(){
		this.onMountAsync()
	}

	onMountAsync = async () => {
		try {
			await this.props
			await this.props.user_id;
			this.onPageLoadFunctions()
		} catch(errors) {
			console.log(errors);
		}
	}

	onPageLoadFunctions = (user_id) => {
		this.props.update_page_data({
			user_id: this.props.user_id,
			page_name: "index"
		})
	}

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