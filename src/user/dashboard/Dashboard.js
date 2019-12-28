import React from 'react'

import DashboardIndex from './DashboardIndex'
import DashboardUserInfo from './DashboardUserInfo'
import DashboardStats from './DashboardStats'
import DashboardAnswers from './DashboardAnswers'
import DashboardVotes from './DashboardVotes'
import DashboardComments from './DashboardComments'

import {
		//  Link
		Redirect
        } from 'react-router-dom'

import '../../css/Dashboard.css'

export default class Dashboard extends React.Component{

	state = {
		display: '',
	}

	componentDidMount(){
		this.onMountAsync()
	}

	onMountAsync = async () => {
		// try {
		// 	let props = await this.props
		// 	await this.props.user_id;
		// 	// await this.onPageLoadFunctions(props)
		// } catch(errors) {
		// 	console.log(errors);
		// }
	}

	UNSAFE_componentWillReceiveProps(nextProps){
		// this.onPageLoadFunctions(nextProps)
	}

	displaySwitchToDashboard = () => {
		this.setState({
			display: 'dashboard'
		})
	}

	displaySwitchToUserInfo = () => {
		this.setState({
			display: 'user_info'
		})
	}

	displaySwitchToAnswers = () => {
		this.setState({
			display: 'answers'
		})
	}

	displaySwitchToVotes = () => {
		this.setState({
			display: 'votes'
		})
	}

	displaySwitchToComments = () => {
		this.setState({
			display: 'comments'
		})
	}

	displaySwitchToStats = () => {
		this.setState({
			display: 'stats'
		})
	}

	onClickEditProfileFunctions = (event) => {
		this.onClickUpdateTrafficFunctions(event)
	}

	onClickDeleteProfileFunctions = (event) => {
		this.onClickUpdateTrafficFunctions(event)
	}

	onClickUpdateTrafficFunctions = (event) => {
		this.props.update_traffic_data({
			user_id: this.props.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		})
	}

	onPageLoadFunctions = (props) => {
		this.props.update_page_data({
			user_id: props.user_id,
			page_name: "user_dashboard"
		})
	}

	render(){

		// console.log(this.props)
		// console.log(this.state)

		const dashboard_tabs = [
			<li
				key={"dashboard_info"}
				onClick={ this.displaySwitchToUserInfo }
			>
				Info
			</li>,
			<li
				key={"dashboard_stats"}
				onClick={ this.displaySwitchToStats }
			>
				Stats
			</li>,
			<li
				key={"dashboard_answers"}
				onClick={ this.displaySwitchToAnswers }
			>
				Answers
			</li>,
			<li
				key={"dashboard_votes"}
				onClick={ this.displaySwitchToVotes }
			>
				Votes
			</li>,
			<li
				key={"dashboard_comments"}
				onClick={ this.displaySwitchToComments }
			>
				Comments
			</li>
		]

		return(
			<div className="dashboard_wrapper">
				<div className="dashboard_tabs">
					<ul>
						{ dashboard_tabs }
					</ul>
				</div>
					{
						{
							true: <Redirect to='/' />,
							false: 	(() => {
								switch(this.state.display) {
									case 'dashboard': return <DashboardIndex
																first_name={ this.props.first_name }
															/>;
									case 'user_info': return <DashboardUserInfo
																update_traffic_data={this.props.update_traffic_data }
																update_page_data={this.props.update_page_data}
																// ~~~~~~~~~~~~~~~~~~~~
																user_id={ this.props.user_id }
																user_name={ this.props.user_name }
																email={ this.props.email }
																access={ this.props.access }
																// // ~~~~~~~~~~~~~~~~~~~~
																first_name={ this.props.first_name }
																last_name={ this.props.last_name }
																gender={ this.props.gender }
																// // ~~~~~~~~~~~~~~~~~~~~
																birth_day={ this.props.birth_day }
																birth_month={ this.props.birth_month }
																birth_year={ this.props.birth_year }
																// // ~~~~~~~~~~~~~~~~~~~~
																house_number={ this.props.house_number }
																street_name={ this.props.street_name }
																city_town={ this.props.city_town }
																state={ this.props.state }
																zip_code={ this.props.zip_code }
																// ~~~~~~~~~~~~~~~~~~~~
																join_day={ this.props.join_day }
																join_month={ this.props.join_month }
																join_year={ this.props.join_year }
															/>;
									case 'stats': return <DashboardStats
																user_id={ this.props.user_id }
																update_traffic_data={this.props.update_traffic_data }
																update_page_data={this.props.update_page_data}
															/>;
									case 'answers': return <DashboardAnswers
																user_id={ this.props.user_id }
																update_traffic_data={this.props.update_traffic_data }
																update_page_data={this.props.update_page_data}
															/>;
									case 'votes': return <DashboardVotes
																user_id={ this.props.user_id }
																update_traffic_data={this.props.update_traffic_data }
																update_page_data={this.props.update_page_data}
															/>;
									case 'comments': return <DashboardComments
																user_id={ this.props.user_id }
																update_traffic_data={this.props.update_traffic_data }
																update_page_data={this.props.update_page_data}
															/>;
									default: return <DashboardIndex
													first_name={ this.props.first_name }
												/>;
								}
							})()
						}[localStorage.length === 0]
					}
			</div>
		)
	}
}
