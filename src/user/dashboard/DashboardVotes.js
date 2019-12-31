import React from 'react'

import DashboardVoteCard from './DashboardVoteCard'

import {
        //  Link
        } from 'react-router-dom'
		
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
		if (this.state.mounted) {
			this.getVotes()
			this.getAllQuestions()
			this.getUserQuestions()
		}
	}

	getVotes = () => {
		if (this.props.user_id && this.state.updatedVotes !== true ) {
			fetch(`http://localhost:3001/users/${this.props.user_id}`)
			.then(res => res.json())
			.then(res_obj =>
				this.setState({
					userVotes: res_obj.data.attributes.votes,
					updatedVotes: true
				})
			)
		}
	}

	getAllQuestions = () => {
		if (this.state.updatedVotes && this.state.updatedAllQuestions !== true ) {
			fetch(`http://localhost:3001/questions/`)
			.then(res => res.json())
			.then(res_obj =>
				this.setState({
					allQuestions: res_obj.data.map(question_obj => question_obj.attributes.question),
					updatedAllQuestions: true
				})
			)
		}
	}

	getUserQuestions = () => {
		if (this.state.updatedAllQuestions && this.state.updatedUserQuestions !== true ) {
			let userVoteIDs = this.state.userVotes.map(vote => vote.question_id)
			let userQuestions = this.state.allQuestions.filter(question => userVoteIDs.includes(question.id))
			this.setState({
				userQuestions: userQuestions,
				updatedUserQuestions: true
			})
		}
	}

	render(){

		// console.log(this.state)

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