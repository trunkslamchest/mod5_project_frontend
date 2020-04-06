import React from 'react'

import DashboardVoteCard from './DashboardVoteCard'

import trafficFunctions from '../../utility/trafficFunctions'

import './DashboardVotes.css'

export default class DashboardVotes extends React.Component{

	state={
		userVotes: [],
		allQuestions: [],
		userQuestions: [],
		questions: null,
		mounted: false,
		updatedVotes: false,
		updatedAllQuestions: false,
		updatedUserQuestions: false,
	}

	componentDidMount(){
		this.setState({ mounted: true })

		this.onPageLoadFunctions()
	}

	componentDidUpdate(){
		if (this.state.mounted && !this.state.updatedVotes ){
			this.setVotes()
		}
		if (this.state.mounted && !this.state.updatedAllQuestions) {
			this.setAllQuestions()
		}
		if (this.state.updatedAllQuestions && !this.state.updatedUserQuestions) {
			this.setUserQuestions()
		}
	}

	setVotes = () => {
		this.setState({
			userVotes: this.props.user_votes,
			updatedVotes: true
		})
	}

	setAllQuestions = () => {
		this.setState({
			allQuestions: this.props.all_questions,
			updatedAllQuestions: true
		})
	}

	setUserQuestions = () => {
			let userVoteIDs = this.state.userVotes.map(vote => vote.question_id)
			let userQuestions = this.state.allQuestions.filter(question => userVoteIDs.includes(question.id))
			this.setState({
				userQuestions: userQuestions,
				updatedUserQuestions: true
			})
	}

	onPageLoadFunctions = () => {
		var pageInfo = {
			user_id: localStorage.user_id,
			page_name: 'dashboard_user_votes',
		}

		trafficFunctions('page', 'http://localhost:3001/pages', pageInfo)
	}

	render(){

		const no_votes_header =
			<div className="dashboard_alt_header">
				<h4> You have not voted on any questions yet!</h4>
			</div>

		const distributeCombineQuestionsVotes =
			(this.state.updatedUserQuestions) ? this.state.userQuestions.map(question =>
					this.state.userVotes.map(vote =>
						(question.id === vote.question_id) ?
							<DashboardVoteCard
								key={vote.id}
								question={question}
								vote={vote}
							/>
						: ""
					)
				)
				: ""

		return(
			<div className="vote_wrapper">
				{ this.state.userVotes.length === 0 ? no_votes_header: distributeCombineQuestionsVotes }

			</div>
		)
	}
}