import React from 'react'

import DashboardAnswersCard from './DashboardAnswersCard'

import trafficFunctions from '../../utility/trafficFunctions'

import './DashboardAnswers.css'

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
		this.setState({ mounted: true })

		this.onPageLoadFunctions()
	}

	componentDidUpdate(){
		if (this.state.mounted && !this.state.updatedAnswers ){
			this.setAnswers()
		}
		if (this.state.mounted && !this.state.updatedAllQuestions) {
			this.setAllQuestions()
		}
		if (this.state.updatedAllQuestions && !this.state.updatedUserQuestions) {
			this.setUserQuestions()
		}
	}

	setAnswers = () => {
		this.setState({
			userAnswers: this.props.user_answers,
			updatedAnswers: true
		})
	}

	setAllQuestions = () => {
		this.setState({
			allQuestions: this.props.all_questions,
			updatedAllQuestions: true
		})
	}

	setUserQuestions = () => {
		if (this.state.updatedAllQuestions && this.state.updatedUserQuestions !== true ) {
			let userAnswerIDs = this.state.userAnswers.map(answer => answer.question_id)
			let userQuestions = this.state.allQuestions.filter(question => userAnswerIDs.includes(question.id))
			this.setState({
				userQuestions: userQuestions,
				updatedUserQuestions: true
			})
		}
	}

	onPageLoadFunctions = () => {
		var pageInfo = {
			user_id: localStorage.user_id,
			page_name: 'dashboard_user_answers',
		}

		trafficFunctions('page', 'http://localhost:3001/pages', pageInfo)
	}

	render(){

		const no_answers_header =
			<div className="dashboard_alt_header">
				<h4> You have not answered any questions yet!</h4>
			</div>

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
			<div className="answers_wrapper">
				{ this.state.userAnswers.length === 0 ? no_answers_header: distributeCombineQuestionsAnswers }
			</div>
		)
	}
}