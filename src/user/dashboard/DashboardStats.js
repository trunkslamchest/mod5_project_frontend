import React from 'react'

import DashboardStatsDifficulty from './DashboardStatsDifficulty'
import DashboardStatsCategory from './DashboardStatsCategory'


import {
        //  Link
        } from 'react-router-dom'

export default class DashboardStats extends React.Component{

	state = {
		user: {},
		user_questions: [],
		user_answers: [],
		all_questions: [],
		mounted: null
	}

	componentDidMount(){
		this.getUser()
		this.getAllQuestions()
		this.setState({
			mounted: true
		})
	}

	getAllQuestions = () => {
		fetch(`http://localhost:3001/questions/`)
		.then(res => res.json())
		.then(res_obj =>
			this.setState({
				all_questions: res_obj.data.map(question_obj => question_obj.attributes.question),
			})
		)
	}

	getUser = () => {
		fetch(`http://localhost:3001/users/${this.props.user_id}`)
		.then(res => res.json())
		.then(res_obj =>
			this.setState({
				user: res_obj.data.attributes,
				user_questions: res_obj.data.attributes.questions,
				user_answers: res_obj.data.attributes.answers
			})
		)
	}

	totalQuestionsAnswered = () => {
		return this.state.user_questions.length
	}

	totalQuestionsAnsweredPercent = () => {
		return ((this.state.user_questions.length / 50.00) * 100).toFixed(2)
	}

	totalQuestionsCorrect = () => {
		return this.state.user_answers.filter(answer => answer.user_result === "correct").length
	}

	totalQuestionsCorrectPercent = () => {
		return ((this.state.user_answers.filter(answer => answer.user_result === "correct").length / Object.keys(this.state.user_answers).length) * 100).toFixed(2)
	}

	render(){

		const total_questions_answered =
			<ul>
				<li>All Questions:</li>
				<li>{ this.totalQuestionsAnswered() } out of {Object.keys(this.state.all_questions).length} answered ({this.totalQuestionsAnsweredPercent()}%)</li>
				<li>{ this.totalQuestionsCorrect() } out of {Object.keys(this.state.user_answers).length} correct ({this.totalQuestionsCorrectPercent()}%)</li>
			</ul>

		const questionsAnsweredByDifficulty =
			<DashboardStatsDifficulty
				user={ this.state.user }
				all_questions={ this.state.all_questions }
			/>

		const questionsAnsweredByCategory =
			<DashboardStatsCategory
				user={ this.state.user }
				all_questions={ this.state.all_questions }
			/>

		return(
			<>
				{ total_questions_answered }
			<hr />
				{ questionsAnsweredByDifficulty }
			<hr />
				{ questionsAnsweredByCategory }
			</>
		)
	}
}