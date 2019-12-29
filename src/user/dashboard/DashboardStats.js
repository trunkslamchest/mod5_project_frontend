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
		// this.getUser()
		this.getAllQuestions()
		// this.setState({
		// 	mounted: true
		// })
		this.onMountAsync()
	}

	onMountAsync = async () => {
		try {
			await this.props.user_id;
			this.getUser(this.props.user_id);
		} catch(errors) {
			console.log(errors);
		}
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

	getUser = (user_id) => {
		fetch(`http://localhost:3001/users/${user_id}`)
		.then(res => res.json())
		.then(res_obj =>
			this.setState({
				user: res_obj.data.attributes,
				user_answers: [...new Set(res_obj.data.attributes.answers.map(question_obj => question_obj))].sort()
			})
		)
	}

	totalQuestionsAnswered = () => {
		return this.state.user_answers.length
	}

	totalQuestionsAnsweredPercent = () => {
		return ((this.state.user_answers.length / this.state.all_questions.length) * 100).toFixed(2)
	}

	totalQuestionsCorrect = () => {
		return this.state.user_answers.filter(answer => answer.user_result === "correct").length
	}

	totalQuestionsCorrectPercent = () => {
		return ((this.state.user_answers.filter(answer => answer.user_result === "correct").length / this.state.user_answers.length) * 100).toFixed(2)
	}

	totalQuestionsWithNoAnswers = () => {
		let questionsWithNoAnswer = this.state.user_answers.filter(answer => answer.user_time === "0.0")
		return questionsWithNoAnswer.length
	}

	averageTimeToAnswer = () => {
		let sum = 0
		let questionTimes = this.state.user_answers.map(answer => parseFloat(answer.user_time))

		questionTimes.forEach((time) => {
			sum += (10 - time)
		})

		let averageTime = (sum / this.state.user_answers.length).toFixed(2)

		return averageTime
	}

	render(){

		const average_time = <>Average Time: { this.averageTimeToAnswer() } seconds</>

		const correct_answers = <>{ this.totalQuestionsCorrect() }/{Object.keys(this.state.user_answers).length} correct ({this.totalQuestionsCorrectPercent()}%)</>

		const total_questions_answered =
		<div className="stats_total">
			<ul>
				{/* <li>All Questions</li> */}
				<li>{ this.totalQuestionsAnswered() }/{Object.keys(this.state.all_questions).length} answered ({this.totalQuestionsAnsweredPercent()}%)</li>
				<li>{ this.state.user_answers.length > 0 ? correct_answers : "0/0 correct (0.00%)" }</li>
			<br />
				<li>{ this.state.user_answers.length > 0 ? average_time : "Average Time: 0.00 seconds" }</li>
				<li>Outta Times: { this.totalQuestionsWithNoAnswers() }</li>
			</ul>
			<div className="stats_total_rating">
				<h2>SmartApp™ Rating</h2>
				<h1>10.0</h1>
			</div>
		</div>

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
				{ questionsAnsweredByCategory }
			</>
		)
	}
}