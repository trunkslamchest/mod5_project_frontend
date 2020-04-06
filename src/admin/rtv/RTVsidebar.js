import React from 'react'

import './RTVsidebar.css'

const RTVsidebar = (props) => {

	const onClickRTVusersFunctions = () => {
		props.showRTVusers()
	}

	const onClickRTVpagesFunctions = () => {
		props.showRTVpages()
	}

	const onClickDBeditFunctions = () => {
		let db_index_msg = "index"
		props.update_db_view_from_sidebar(db_index_msg)
		props.showDBedit()
	}

	const onClickAnalyticsFunctions = () => {
		props.showBRanalytics()
	}

	return(
		<div className="side_bar">
			<ul>
				<li onClick={ onClickRTVusersFunctions }>
					Real Time User Traffic
				</li>
				<li onClick={ onClickRTVpagesFunctions }>
					Real Time Page Traffic
				</li>
				<li onClick={ onClickDBeditFunctions }>
					Database Editor
				</li>
				<li onClick={ onClickAnalyticsFunctions }>
					Statistical Analytics
				</li>
			</ul>
		</div>
	)

}

export default RTVsidebar