import React from 'react'
import RTVpagesItem from './RTVpagesItem'
import {
		//  Link
		} from 'react-router-dom'

import './RTV.css'

export default class RTVpagesList extends React.Component{
	render(){
		const distribute_RTV_page_data = this.props.RTV_page_data.map( RTV_page_obj =>
			<RTVpagesItem
				key={RTV_page_obj.id}
				RTV_page_obj={RTV_page_obj}
			/>
		)
		return(
			<>
				<h3>Real Time Page Traffic</h3>
					<div className="RTV_sub_header">
						<div className="RTV_sub_header_item">
							User ID
						</div>
						<div className="RTV_sub_header_item">
							Page
						</div>
						<div className="RTV_sub_header_item">
							Timestamp
						</div>
					</div>
				{ distribute_RTV_page_data }
			</>
		)
	}
}