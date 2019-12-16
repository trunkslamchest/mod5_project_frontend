import React from 'react'
import RTVusersItem from './RTVusersItem'
import {
		//  Link
		} from 'react-router-dom'

import './RTV.css'

export default class RTVusersList extends React.Component{
	render(){
		const distribute_RTV_data = this.props.RTV_users_data.map( RTV_users_obj =>
			<RTVusersItem
				key={RTV_users_obj.id}
				RTV_users_obj={RTV_users_obj}
			/>
		)
		return(
			<>
				<h3>Real Time User Traffic</h3>
					<div className="RTV_sub_header">
						<div className="RTV_sub_header_item">
							User ID
						</div>
						<div className="RTV_sub_header_item">
							Interaction
						</div>
						<div className="RTV_sub_header_item">
							Element
						</div>
						<div className="RTV_sub_header_item">
							Timestamp
						</div>
					</div>
				{ distribute_RTV_data }
			</>
		)
	}
}