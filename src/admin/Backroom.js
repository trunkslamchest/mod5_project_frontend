import React from 'react'
import {
         Link
        } from 'react-router-dom'

import './Backroom.css'

export default class Backroom extends React.Component{
	
	state = {
				// traffic_data: {
				// 				sent: false,
				// 				user_id: null,
				// 				interaction: "",
				// 				element: "",
				// 				received: false,
				// 				// tracker: 0
				// 			 }
							traffic_data: [],
							b_temp: []
			}

	componentDidMount(){
		// this.props.get_traffic()
		
		// this.setState({
		// 	traffic_data: this.props.get_traffic
		// })
	fetch("http://localhost:3001/traffics")
    .then(res => res.json())
    .then(res_obj => 
	this.setState({
		b_temp: res_obj.data.map(traffic_obj => traffic_obj.attributes)
		})
	)
	// 		// 	this.setState({
	// 		// 	traffic_data: {
	// 		// 		user_id: res_obj.data.attributes.user_id,
	// 		// 		interaction: res_obj.data.attributes.interaction,
	// 		// 		element: res_obj.data.attributes.element
	// 		// 	}
	// 		// })
	// 		// const  = res_obj.data.map(traffic_obj => traffic_obj)
	// 			this.setState({
	// 				traffic_data: res_obj.data
	// 		})
    // )
	// console.log(this.props.traffic_data)
	// fetch("http://localhost:3001/traffics", {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json"
	// 		},
	// 		body: JSON.stringify({
	// 			user_id: this.props.traffic_data.user_id,
	// 			interaction: this.props.traffic_data.interaction,
	// 			element: this.props.traffic_data.element
	// 		})
	// 	})
	//     .then(response => response.json())
	//     .then(res_obj => {
	// 		this.setState({
	// 			traffic_data: {
	// 				user_id: res_obj.user_id,
	// 				interaction: res_obj.interaction,
	// 				element: res_obj.element
	// 			}
	// 		})
	// 			console.log(res_obj)
	// 	})
	}
	
	componentDidUpdate(){
				// this.props.get_traffic()
    // fetch("http://localhost:3001/traffics")
    // .then(res => res.json())
    // .then(res_obj =>
	// 	// console.log(res_obj.data.map(traffic_obj => traffic_obj.attributes))
	// 		// 	this.setState({
	// 		// 	traffic_data: {
	// 		// 		user_id: res_obj.data.user_id,
	// 		// 		interaction: res_obj.data.interaction,
	// 		// 		element: res_obj.data.element
	// 		// 	}
	// 		// })
    // )
	// console.log(this.props.traffic_data)
	}
	
	render(){
		// console.log("state traffic data", this.state.traffic_data)
		console.log("state traffic data", this.state.b_temp)
		// console.log("state traffic data", this.state.traffic_data)
		return(
			<div className="default_container">
				{/* Backroom Test */}
				{ (this.props.msg_obj !== "") ? ("yes") : ("no") }
			</div>
		)
	}
	
}