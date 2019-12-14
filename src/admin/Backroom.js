import React from 'react'
import RTVcontainer from './RTVcontainer'
import {
        //  Link
        } from 'react-router-dom'

import './Backroom.css'

export default class Backroom extends React.Component{

	state = {
		RTV_data: []
	}

	componentDidMount(){
		this.updateRTV()
		this.interval = setInterval(this.updateRTV, 1000);
	}

	updateRTV = () => {
		fetch("http://localhost:3001/traffics")
	    .then(res => res.json())
	    .then(res_obj =>
			this.setState({
				RTV_data: res_obj.data
			})
		)
	}

	render(){
		return(
			<div className="default_container">
				<RTVcontainer
					RTV_data={this.state.RTV_data}
				/>
			</div>
		)
	}
}