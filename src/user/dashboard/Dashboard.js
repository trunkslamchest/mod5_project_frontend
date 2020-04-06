import React from 'react'

import DashboardIndex from './DashboardIndex'
import DashboardUserInfo from './DashboardUserInfo'
import DashboardStats from './DashboardStats'
import DashboardAnswers from './DashboardAnswers'
import DashboardVotes from './DashboardVotes'
import DashboardComments from './DashboardComments'

import { Redirect } from 'react-router-dom'

import trafficFunctions from '../../utility/trafficFunctions'
import userFunctions from '../../utility/userFunctions'
import questionFunctions from '../../utility/questionFunctions'

import './Dashboard.css'

export default class Dashboard extends React.Component{

	state = {
		display: '',
		all_questions: [],
		user_answers: [],
		user_votes: [],
		user_comments: [],
		mounted: false,
		updated_user: false,
		updated_all_questions: false,
	}

	componentDidMount(){
		this.setState({ mounted: true })

		this.onPageLoadFunctions()
	}

	componentDidUpdate(){

		if (this.state.mounted && this.props.user_id && !this.state.loaded){
			this.setState({
				loaded: true,
				display: 'dashboard'
			})
		}

		if (this.state.loaded && !this.state.updated_all_questions){
			this.getAllQuestions()
		}
		if (this.state.updated_all_questions && !this.state.updated_user){
			this.getUserStats(this.props.user_id)
		}
	}

	getUserStats = (user_id) => {
		userFunctions('get', `http://localhost:3001/users/${user_id}`)
		.then(res_obj =>
			this.setState({
				user_answers: res_obj.data.attributes.answers,
				user_votes: res_obj.data.attributes.votes,
				user_comments: res_obj.data.attributes.comments,
				updated_user: true
			})
		)
	}

	getAllQuestions = () => {
		questionFunctions('get', 'http://localhost:3001/questions')
		.then(res_obj =>
			this.setState({
				all_questions: res_obj.data.map(question_obj => question_obj.attributes.question),
				updated_all_questions: true
			})
		)
	}

	displaySwitchToDashboard = () => {
		this.setState({ display: 'dashboard' })
	}

	displaySwitchToUserInfo = (event) => {
		this.setState({ display: 'user_info' }, this.onClickTrafficFunctionsLI(event))
	}

	displaySwitchToStats = (event) => {
		this.setState({ display: 'stats' }, this.onClickTrafficFunctionsLI(event))
	}

	displaySwitchToAnswers = (event) => {
		this.setState({ display: 'answers' }, this.onClickTrafficFunctionsLI(event))
	}

	displaySwitchToVotes = (event) => {
		this.setState({ display: 'votes' }, this.onClickTrafficFunctionsLI(event))
	}

	displaySwitchToComments = (event) => {
		this.setState({ display: 'comments' }, this.onClickTrafficFunctionsLI(event))
	}

	onClickEditProfileFunctions = (event) => {
		this.onClickTrafficFunctions(event)
	}

	onClickDeleteProfileFunctions = (event) => {
		this.onClickTrafficFunctions(event)
	}

	onClickTrafficFunctions = (event) => {
		let elementInfo = {
			user_id: this.props.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		}

		trafficFunctions('element', 'http://localhost:3001/traffics', elementInfo)
	}

	onClickTrafficFunctionsLI = (event) => {
		let elementInfo = {
			user_id: this.props.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.attributes.name.value
		}

		trafficFunctions('element', 'http://localhost:3001/traffics', elementInfo)
	}

	onPageLoadFunctions = () => {
		let pageInfo = {
			user_id: localStorage.user_id,
			page_name: 'dashboard_index',
		}

		trafficFunctions('page', 'http://localhost:3001/pages', pageInfo)
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
															first_name={ this.props.first_name }
														/>;
								case 'user_info': return <DashboardUserInfo
															update_traffic_data={ this.props.update_traffic_data }
															update_page_data={ this.props.update_page_data }
															// ~~~~~~~~~~~~~~~~~~~~
															user_id= {this.props.user_id }
															user_name={ this.props.user_name }
															email={ this.props.email }
															access={ this.props.access }
															// ~~~~~~~~~~~~~~~~~~~~
															first_name={ this.props.first_name }
															last_name={ this.props.last_name }
															gender={ this.props.gender }
															// ~~~~~~~~~~~~~~~~~~~~
															birth_day={ this.props.birth_day }
															birth_month={ this.props.birth_month }
															birth_year={ this.props.birth_year }
															// ~~~~~~~~~~~~~~~~~~~~
															house_number={ this.props.house_number }
															street_name={ this.props.street_name }
															city_town={ this.props.city_town }
															state={ this.props.state }
															zip_code={ this.props.zip_code }
															// ~~~~~~~~~~~~~~~~~~~~
															join_day={this.props.join_day}
															join_month={this.props.join_month}
															join_year={this.props.join_year}
														/>;
								case 'stats': return <DashboardStats
															user={ this.state.user }
															user_answers={ this.state.user_answers }
															all_questions={ this.state.all_questions }
														/>;
								case 'answers': return <DashboardAnswers
															user_answers={ this.state.user_answers }
															all_questions={ this.state.all_questions }
														/>;
								case 'votes': return <DashboardVotes
															user_votes={ this.state.user_votes }
															all_questions={ this.state.all_questions }
														/>;
								case 'comments': return <DashboardComments
															user_comments={ this.state.user_comments }
															all_questions={ this.state.all_questions }
														/>;
								default: return <></>;
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
