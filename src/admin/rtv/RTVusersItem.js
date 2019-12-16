import React from 'react'
import {
		//  Link
		} from 'react-router-dom'

import './RTV.css'

export default class RTVusersItem extends React.Component{
	render(){
		const RTV_timestamp = this.props.RTV_users_obj.attributes.timestamp
		const RTV_item = this.props.RTV_users_obj.attributes
		return(
			<div className="RTV_item">
				{/* <div className="RTV_sub_item">
					id: { RTV_item.id }
				</div> */}
				<div className="RTV_sub_item">
					{ (RTV_item.user_id === null) ? ("guest") : (RTV_item.user_id) }
				</div>
				<div className="RTV_sub_item">
					{ RTV_item.interaction }
				</div>
				<div className="RTV_sub_item">
					{ RTV_item.element }
				</div>
				<div className="RTV_sub_item">
					{ RTV_timestamp.month }/{ RTV_timestamp.day }/{ RTV_timestamp.year } { RTV_timestamp.hour }:{ RTV_timestamp.minute }:{ RTV_timestamp.second } { RTV_timestamp.day_night }
				</div>
			</div>
		)
	}
}