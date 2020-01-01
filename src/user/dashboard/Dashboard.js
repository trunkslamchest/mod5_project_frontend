import React from 'react'

import DashboardIndex from './DashboardIndex'
import DashboardUserInfo from './DashboardUserInfo'
import DashboardStats from './DashboardStats'
import DashboardAnswers from './DashboardAnswers'
import DashboardVotes from './DashboardVotes'
import DashboardComments from './DashboardComments'

import { Redirect } from 'react-router-dom'

import '../../css/Dashboard.css'

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
		// this.onMountAsync()
	}

	componentDidUpdate(){
		if (this.state.mounted && this.props.user_id && this.state.updated_user === false){
			this.getUser(this.props.user_id)
		}
		if (this.state.mounted && this.props.user_id && this.state.updated_all_questions === false){
			this.getAllQuestions()
		}
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

	getUser = (user_id) => {
		fetch(`http://localhost:3001/users/${user_id}`)
		.then(res => res.json())
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
		fetch(`http://localhost:3001/questions/`)
		.then(res => res.json())
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

	displaySwitchToUserInfo = () => {
		this.setState({
			display: 'user_info'
		})
	}

	displaySwitchToStats = () => {
		this.setState({
			display: 'stats'
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
																first_name={ this.state.user.first_name }
															/>;
								case 'user_info': return <DashboardUserInfo
																update_traffic_data={this.props.update_traffic_data }
																update_page_data={this.props.update_page_data}
																user={ this.state.user }
															/>;
									case 'stats': return <DashboardStats
																user={ this.state.user }
																user_answers={ this.state.user_answers }
																all_questions={ this.state.all_questions }
																update_traffic_data={this.props.update_traffic_data }
																update_page_data={this.props.update_page_data}
															/>;
									case 'answers': return <DashboardAnswers
																user_answers={ this.state.user_answers }
																all_questions={ this.state.all_questions }
																update_traffic_data={this.props.update_traffic_data }
																update_page_data={this.props.update_page_data}
															/>;
									case 'votes': return <DashboardVotes
																user_votes={ this.state.user_votes }
																all_questions={ this.state.all_questions }
																update_traffic_data={this.props.update_traffic_data }
																update_page_data={this.props.update_page_data}
															/>;
									case 'comments': return <DashboardComments
																user_comments={ this.state.user_comments }
																all_questions={ this.state.all_questions }
																update_traffic_data={this.props.update_traffic_data }
																update_page_data={this.props.update_page_data}
															/>;
									default: return <DashboardIndex
													first_name={ this.state.user.first_name }
												/>;
								}
							})()
						}[localStorage.length === 0]
					}
			</div>
		)
	}
}
