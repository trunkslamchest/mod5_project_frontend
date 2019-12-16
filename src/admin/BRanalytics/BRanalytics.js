import React from 'react'
import {
        //  Link
        } from 'react-router-dom'

import './BRanalytics.css'

export default class BRanalytics extends React.Component{

	state = {

	}

	componentDidMount(){

	}

	componentWillUnmount(){

	}

	render(){
		return(
			<div className="backroom_wrapper">
				<div className="RTV_main_window">
					<h3>Website Anayltics</h3>
					<div className="RTV_sub_header">
						<div className="RTV_sub_header_item">
							Column1
						</div>
						<div className="RTV_sub_header_item">
							Column2
						</div>
						<div className="RTV_sub_header_item">
							Column3
						</div>
						<div className="RTV_sub_header_item">
							Column4
						</div>
					</div>
				</div>
			</div>
		)
	}
}