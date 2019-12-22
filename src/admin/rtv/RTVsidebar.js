import React from 'react'

import '../../css/RTVsidebar.css'

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
						Real Time User Traffic
					</li>
					<li onClick={ this.onClickRTVpagesFunctions }>
						Real Time Page Traffic
					</li>
					<li onClick={ this.onClickDBeditFunctions }>
						Database Editor
					</li>
					<li onClick={ this.onClickAnalyticsFunctions }>
						Statistical Analytics
					</li>
				</ul>
			</div>
		)
	}
}