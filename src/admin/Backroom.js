import React from 'react'
import RTVcontainer from './RTVcontainer'
import RTVsidebar from './RTVsidebar'
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
		this.RTVinterval = setInterval(this.updateRTV, 1000);
	}

	componentWillUnmount(){
		clearInterval(this.RTVinterval)
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
			<div className="backroom_wrapper">
				<div className="RTV_side_window">
					<RTVsidebar
					/>
				</div>
				<div className="RTV_main_window">
					<RTVcontainer
						RTV_data={this.state.RTV_data}
					/>
				</div>
			</div>
		)
	}
}