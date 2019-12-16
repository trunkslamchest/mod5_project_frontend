import React from 'react'
// import RTVitem from './RTVitem'
import {
		//  Link,
		//  NavLink
		} from 'react-router-dom'

import './RTVsidebar.css'


export default class RTVsidebar extends React.Component{

	onClickRTVusersFunctions = () => {
		this.props.showRTVusers()
	}

	onClickRTVpagesFunctions = () => {
		this.props.showRTVpages()
	}

	onClickDBeditFunctions = () => {
		let db_index_msg = "index"
		this.props.update_db_view_from_sidebar(db_index_msg)
		this.props.showDBedit()
	}

	onClickAnalyticsFunctions = () => {
		this.props.showBRanalytics()
	}

	render(){
		return(
				<div className="side_bar">
					<ul>
						<li onClick={ this.onClickRTVusersFunctions }>
							RTV Users
						</li>
						<li onClick={ this.onClickRTVpagesFunctions }>
							RTV Pages
						</li>
						<li onClick={ this.onClickDBeditFunctions }>
							DB Editor
						</li>
						<li onClick={ this.onClickAnalyticsFunctions }>
							Analytics
						</li>
					</ul>
				</div>
		)
	}
}