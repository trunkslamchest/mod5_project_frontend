import React from 'react'
import RTVitem from './RTVitem'
import {
		//  Link
		} from 'react-router-dom'

import './Backroom.css'

export default class RTVcontainer extends React.Component{
	render(){
		const distribute_RTV_data = this.props.RTV_data.map( RTV_obj =>
			<RTVitem
				key={RTV_obj.id}
				RTV_obj={RTV_obj}
			/>
		)
		return(
			<div className="default_container">
				<div className="default_container_header">
					<h3>Real Time Traffic Viewer</h3>
				</div>
				{ distribute_RTV_data }
			</div>
		)
	}
}