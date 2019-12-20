import React from 'react'
import RTVusersList from './RTVusersList'

import './RTV.css'

export default class RTVusersContainer extends React.Component{

	state = {
		RTV_users_data: []
	}

	componentDidMount(){
		this.updateRTVusers()
		this.RTVinterval = setInterval(this.updateRTVusers, 1000);
	}

	componentWillUnmount(){
		clearInterval(this.RTVinterval)
	}

	updateRTVusers = () => {
		fetch("http://localhost:3001/traffics")
	    .then(res => res.json())
	    .then(res_obj =>
			this.setState({
				RTV_users_data: res_obj.data
			})
		)
	}

	render(){
		return(
			<RTVusersList
				RTV_users_data={this.state.RTV_users_data}
			/>
		)
	}
}