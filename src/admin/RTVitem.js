import React from 'react'
import {
		//  Link
		} from 'react-router-dom'

import './Backroom.css'

export default class RTVitem extends React.Component{
	render(){
		const RTV_item = this.props.RTV_obj.attributes
		return(
			<>
				id: { RTV_item.id }
				<br />
				user_id: { RTV_item.user_id }
				<br />
				interaction: { RTV_item.interaction }
				<br />
				element: { RTV_item.element }
				<hr />
			</>
		)
	}
}