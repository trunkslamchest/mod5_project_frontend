import React from 'react'

export default class RTVpagesRow extends React.Component{
	render(){

		const RTV_timestamp = this.props.RTV_page_obj.attributes.timestamp
		const RTV_item = this.props.RTV_page_obj.attributes

		return(
			<tr>
				<td>
					{ (RTV_item.user_id === null) ? ("guest") : (RTV_item.user_id) }
				</td>
				<td>
					{ RTV_item.page_name }
				</td>
				<td>
					{ RTV_timestamp.month }/{ RTV_timestamp.day }/{ RTV_timestamp.year } { RTV_timestamp.hour }:{ RTV_timestamp.minute }:{ RTV_timestamp.second } { RTV_timestamp.day_night }
				</td>
			</tr>
		)
	}
}