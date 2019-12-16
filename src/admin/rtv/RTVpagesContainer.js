import React from 'react'
import RTVpagesList from './RTVpagesList'
import {
        //  Link
        } from 'react-router-dom'

import './RTV.css'

export default class RTVpagesContainer extends React.Component{

	state = {
		RTV_page_data: []
	}

	componentDidMount(){
		this.updateRTVpages()
		// this.RTVinterval = setInterval(this.updateRTVpages, 1000);
	}

	componentWillUnmount(){
		clearInterval(this.RTVinterval)
	}

	updateRTVpages = () => {
		fetch("http://localhost:3001/pages")
	    .then(res => res.json())
	    .then(res_obj =>
			this.setState({
				RTV_page_data: res_obj.data
			})
		)
	}

	render(){
		return(
			<div className="backroom_wrapper">
				<div className="RTV_main_window">
					<RTVpagesList
						RTV_page_data={this.state.RTV_page_data}
					/>
				</div>
			</div>
		)
	}
}