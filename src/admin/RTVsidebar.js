import React from 'react'
// import RTVitem from './RTVitem'
import {
		//  Link
		} from 'react-router-dom'

import './Backroom.css'

export default class RTVsidebar extends React.Component{
	render(){
		return(
				<div className="RTV_side_bar_item">
					<ul>
						<li>RTV Users</li>
						<li>RTV Pages</li>
						<li>DB Editor</li>
						<li>Analytics</li>
					</ul>
				</div>
		)
	}
}