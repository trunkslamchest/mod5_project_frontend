import React from 'react'

const RTVpagesRow = (props) => {
	const RTV_timestamp = props.RTV_page_obj.attributes.timestamp
	const RTV_item = props.RTV_page_obj.attributes

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

export default RTVpagesRow