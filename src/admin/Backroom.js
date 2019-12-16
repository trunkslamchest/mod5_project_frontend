import React from 'react'

import BackroomIndex from './BackroomIndex'

import RTVsidebar from './rtv/RTVsidebar'
import RTVusersContainer from './rtv/RTVusersContainer'
import RTVpagesContainer from './rtv/RTVpagesContainer'
import DBeditMainContainer from './db_edit/DBeditMainContainer'
import BRanalytics from './BRanalytics/BRanalytics'


import {
		// Route,
		// Switch,
        //  Link
        } from 'react-router-dom'

import './Backroom.css'

export default class Backroom extends React.Component{

	state = {
		display: "index",
		db_display: null
	}

	// UNSAFE_componentWillReceiveProps(nextProps){
	// 	console.log(nextProps)
	// 	this.setState({
	// 		display: nextProps.update_dbedit_from_sidebar,
	// 	})
	// }

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
				<div className="RTV_main_window">
					{
						(() => {
							switch(this.state.display) {
							case 'index': return <BackroomIndex />;
							case 'RTVusers': return <RTVusersContainer />;
							case 'RTVpages': return <RTVpagesContainer />;
							case 'DBedit': return <DBeditMainContainer update_db_display={ this.state.db_display } />;
							case 'BRanalytics': return <BRanalytics />;
							default: return <BackroomIndex />;
							}
						})()
					}
				</div>
			</div>
		)
	}
}