import React from 'react'

import DashboardIndex from './DashboardIndex'
import DashboardUserInfo from './DashboardUserInfo'
import DashboardStats from './DashboardStats'
import DashboardAnswers from './DashboardAnswers'
import DashboardVotes from './DashboardVotes'
import DashboardComments from './DashboardComments'

import { Redirect } from 'react-router-dom'

import { TrafficUpdate } from '../../utility/trafficFunctions'
import { UserUpdate } from '../../utility/userFunctions'
import { QuestionUpdate } from '../../utility/questionFunctions'

import '../../css/Dashboard.css'

var sendTraffic = new TrafficUpdate()
var sendUserUpdate = new UserUpdate()
var sendQuestionUpdate = new QuestionUpdate()

export default class Dashboard extends React.Component{

	state = {
		display: '',
		all_questions: [],
		user: [],
		user_answers: [],
		user_votes: [],
		user_comments: [],
		mounted: false,
		updated_user: false,
		updated_all_questions: false,
	}

	componentDidMount(){
		this.setState({
			mounted: true
		})

		this.onPageLoadFunctions()
	}

	componentDidUpdate(){
		if (this.state.mounted && this.props.user_id && !this.state.updated_all_questions){
			this.getAllQuestions()
		}
		if (this.state.updated_all_questions && this.props.user_id && !this.state.updated_user){
			this.getUser(this.props.user_id)
		}
	}

	getUser = (user_id) => {
		sendUserUpdate.getUser(user_id)
		.then(res_obj =>
			this.setState({
				user: res_obj.data.attributes.user,
				user_answers: res_obj.data.attributes.answers,
				user_votes: res_obj.data.attributes.votes,
				user_comments: res_obj.data.attributes.comments,
				updated_user: true
			})
		)
	}

	getAllQuestions = () => {
		sendQuestionUpdate.getAllQuestions()
		.then(res_obj =>
			this.setState({
				all_questions: res_obj.data.map(question_obj => question_obj.attributes.question),
				updated_all_questions: true
			})
		)
	}

	displaySwitchToDashboard = () => {
		this.setState({
			display: 'dashboard'
		})
	}

	displaySwitchToUserInfo = (event) => {
		this.setState({
			display: 'user_info'
		}, this.onClickUpdateTrafficFunctionsLI(event))
	}

	displaySwitchToStats = (event) => {
		this.setState({
			display: 'stats'
		}, this.onClickUpdateTrafficFunctionsLI(event))
	}

	displaySwitchToAnswers = (event) => {
		this.setState({
			display: 'answers'
		}, this.onClickUpdateTrafficFunctionsLI(event))
	}

	displaySwitchToVotes = (event) => {
		this.setState({
			display: 'votes'
		}, this.onClickUpdateTrafficFunctionsLI(event))
	}

	displaySwitchToComments = (event) => {
		this.setState({
			display: 'comments'
		}, this.onClickUpdateTrafficFunctionsLI(event))
	}

	onClickEditProfileFunctions = (event) => {
		this.onClickUpdateTrafficFunctions(event)
	}

	onClickDeleteProfileFunctions = (event) => {
		this.onClickUpdateTrafficFunctions(event)
	}

	onClickUpdateTrafficFunctions = (event) => {
		sendTraffic.elementUpdate({
			user_id: this.props.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		})
	}

	onClickUpdateTrafficFunctionsLI = (event) => {
		sendTraffic.elementUpdate({
			user_id: this.props.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.attributes.name.value
		})
	}

	onPageLoadFunctions = () => {
		sendTraffic.pageUpdate({
			user_id: localStorage.user_id,
			page_name: "dashboard_index",
		})
	}

	render(){

		const dashboard_tabs = [
			<li
				key={"dashboard_info"}
				name="dashboard_user_info_button"
				interaction="click"
				onClick={ this.displaySwitchToUserInfo }
			>
				Info
			</li>,
			<li
				key={"dashboard_stats"}
				name="dashboard_stats_button"
				interaction="click"
				onClick={ this.displaySwitchToStats }
			>
				Stats
			</li>,
			<li
				key={"dashboard_answers"}
				name="dashboard_answers_button"
				interaction="click"
				onClick={ this.displaySwitchToAnswers }
			>
				Answers
			</li>,
			<li
				key={"dashboard_votes"}
				name="dashboard_votes_button"
				interaction="click"
				onClick={ this.displaySwitchToVotes }
			>
				Votes
			</li>,
			<li
				key={"dashboard_comments"}
				name="dashboard_comments_button"
				interaction="click"
				onClick={ this.displaySwitchToComments }
			>
				Comments
			</li>
		]

		const loading =
			<div className="loading_container">
				<div className="loading_animation_container">
					<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
				</div>
			</div>

		const dashboard =
			<>
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
																		first_name={ this.state.user.first_name }
																	/>;
								case 'user_info': return <DashboardUserInfo
																		user={ this.state.user }
																	/>;
								case 'stats': return <DashboardStats
															update_traffic_data={ this.props.update_traffic_data }
															update_page_data={ this.props.update_page_data }
															// ~~~~~~~~~~~~~~~~~~~~
															user={ this.state.user }
															user_answers={ this.state.user_answers }
															all_questions={ this.state.all_questions }
														/>;
								case 'answers': return <DashboardAnswers
															update_traffic_data={ this.props.update_traffic_data }
															update_page_data={ this.props.update_page_data }
															// ~~~~~~~~~~~~~~~~~~~~
															user_answers={ this.state.user_answers }
															all_questions={ this.state.all_questions }
														/>;
								case 'votes': return <DashboardVotes
															update_traffic_data={ this.props.update_traffic_data }
															update_page_data={ this.props.update_page_data }
															// ~~~~~~~~~~~~~~~~~~~~
															user_votes={ this.state.user_votes }
															all_questions={ this.state.all_questions }
														/>;
								case 'comments': return <DashboardComments
															update_traffic_data={ this.props.update_traffic_data }
															update_page_data={ this.props.update_page_data }
															// ~~~~~~~~~~~~~~~~~~~~
															user_comments={ this.state.user_comments }
															all_questions={ this.state.all_questions }
														/>;
								default: return <DashboardIndex
													first_name={ this.state.user.first_name }
												/>;
							}
						})()
					}[localStorage.length === 0]
				}
			</>

		return(
			<div className="dashboard_wrapper">
				{ this.state.updated_all_questions ? dashboard : loading }
			</div>
		)
	}
}
