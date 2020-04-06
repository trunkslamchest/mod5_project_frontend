import React from 'react'

import BackroomIndex from './BackroomIndex'

import RTVsidebar from './rtv/RTVsidebar'
import RTVusersContainer from './rtv/RTVusersContainer'
import RTVpagesContainer from './rtv/RTVpagesContainer'

import DBeditMainContainer from './db_edit/DBeditMainContainer'

import STanalyticsIndex from './stats/STanalyticsIndex'

import {
	//  NavLink,
	//  Link,
	 Redirect,
	// Route,
	// Switch,
	//  useRouteMatch,
	//  useParams
} from 'react-router-dom'

import './Backroom.css'

export default class Backroom extends React.Component{

	state = {
		display: "index",
		db_display: null
	}

	showRTVusers = () => {
		this.setState({
			display: "RTVusers"
		})
	}

	showRTVpages = () => {
		this.setState({
			display: "RTVpages"
		})
	}

	showDBedit = () => {
		this.setState({
			display: "DBedit"
		})
	}

	showBRanalytics = () => {
		this.setState({
			display: "BRanalytics"
		})
	}

	update_db_view_from_sidebar = (db_index_msg) => {
		this.setState({
			db_display: db_index_msg
		})
	}

	render(){
		return(
			<div className="backroom_wrapper">
				<div className="side_window">
					<RTVsidebar
						showRTVusers={ this.showRTVusers }
						showRTVpages={ this.showRTVpages }
						showDBedit={ this.showDBedit }
						showBRanalytics={ this.showBRanalytics }
						update_db_view_from_sidebar={ this.update_db_view_from_sidebar }
					/>
				</div>
				<div className="main_window">
					{
						{
							true: <Redirect to='/' />,
							false: (() => {
							switch(this.state.display) {
								case 'index': return <BackroomIndex />;
								case 'RTVusers': return <RTVusersContainer />;
								case 'RTVpages': return <RTVpagesContainer />;
								case 'DBedit': return <DBeditMainContainer update_db_display={ this.state.db_display } />;
								case 'BRanalytics': return <STanalyticsIndex />;
								default: return <BackroomIndex />;
								}
							})()
						}[localStorage.length === 0 || localStorage.access !== 'admin']
					}
				</div>
			</div>
		)
	}
}
