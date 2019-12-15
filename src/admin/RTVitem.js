import React from 'react'
import {
		//  Link
		} from 'react-router-dom'

import './Backroom.css'

export default class RTVitem extends React.Component{
	render(){
		console.log(this.props.RTV_obj.attributes)
		const RTV_timestamp = this.props.RTV_obj.attributes.timestamp
		const RTV_item = this.props.RTV_obj.attributes
		return(
			<div className="RTV_item">
				id: { RTV_item.id } | user_id: { (RTV_item.user_id === null) ? ("guest") : (RTV_item.user_id) }
				<br />
				interaction: { RTV_item.interaction } | element: { RTV_item.element }
				<br />
				timestamp: { RTV_timestamp.month }/{ RTV_timestamp.day }/{ RTV_timestamp.year } { RTV_timestamp.hour }:{ RTV_timestamp.minute }:{ RTV_timestamp.second } { RTV_timestamp.day_night }
				<hr />
			</div>
		)
	}
}