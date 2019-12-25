import React from 'react'

import DashboardAnswersCard from './DashboardAnswersCard'

import {
        //  Link
        } from 'react-router-dom'

export default class DashboardAnswers extends React.Component{

	state = {
		allQuestions: [],
		questions: null,
		userAnswers: [],
		userQuestions: [],
		mounted: false,
		updatedAnswers: false,
		updatedAllQuestions: false,
		updatedUserQuestions: false
	}

	componentDidMount(){
		this.setState({
			mounted: true
		})
	}

	componentDidUpdate(){
		if (this.state.mounted) {
			this.getAnswers()
			this.getAllQuestions()
			this.getUserQuestions()
		}
	}

	getAnswers = () => {
		if (this.props.user_id && this.state.updatedAnswers !== true ) {
			fetch(`http://localhost:3001/users/${this.props.user_id}`)
			.then(res => res.json())
			.then(res_obj =>
				this.setState({
					userAnswers: res_obj.data.attributes.answers,
					// questions: res_obj.data.attributes.questions,
					updatedAnswers: true
				})
			)
		}
	}

	getAllQuestions = () => {
		if (this.props.user_id && this.state.updatedAllQuestions !== true ) {
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
			let userAnswerIDs = this.state.userAnswers.map(answer => answer.question_id)
			let userQuestions = this.state.allQuestions.filter(question => userAnswerIDs.includes(question.id))
			// console.log(userQuestions)
			this.setState({
				userQuestions: userQuestions,
				updatedUserQuestions: true
			})
		}
	}

	onPageLoadFunctions = (props) => {
		this.props.update_page_data({
			user_id: props.user_id,
			page_name: "user_dashboard_answers"
		})
	}

	render(){
		// console.log(this.props)
		// console.log(this.state)

		const distributeCombineQuestionsAnswers =
		(this.state.updatedUserQuestions) ? this.state.userQuestions.map(question =>
				this.state.userAnswers.map(answer =>
					(question.id === answer.question_id) ?
						<DashboardAnswersCard
							key={answer.id}
							question={question}
							answer={answer}
						/>
					: ""
				)
			)
			: ""

		return(
			<ul>
				{ distributeCombineQuestionsAnswers }
			</ul>
		)
	}
}