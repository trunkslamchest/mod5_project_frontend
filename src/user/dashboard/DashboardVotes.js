import React from 'react'

import DashboardVoteCard from './DashboardVoteCard'

import '../../css/DashboardVotes.css'

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
		this.setState({
			mounted: true
		})
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

	render(){

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
				{ distributeCombineQuestionsVotes }
			</div>
		)
	}
}