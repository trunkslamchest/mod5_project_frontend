import React from 'react'
import {
		//  Link
		} from 'react-router-dom'

import './RTV.css'

export default class RTVpagesItem extends React.Component{
	render(){
		const RTV_timestamp = this.props.RTV_page_obj.attributes.timestamp
		const RTV_item = this.props.RTV_page_obj.attributes
		return(
			<div className="RTV_item">
				{/* <div className="RTV_sub_item">
					id: { RTV_item.id }
				</div> */}
				<div className="RTV_sub_item">
					{ (RTV_item.user_id === null) ? ("guest") : (RTV_item.user_id) }
				</div>
				<div className="RTV_sub_item">
					{ RTV_item.page_name }
				</div>
				<div className="RTV_sub_item">
					{ RTV_timestamp.month }/{ RTV_timestamp.day }/{ RTV_timestamp.year } { RTV_timestamp.hour }:{ RTV_timestamp.minute }:{ RTV_timestamp.second } { RTV_timestamp.day_night }
				</div>
			</div>
		)
	}
}