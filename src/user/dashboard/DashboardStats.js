import React from 'react'

import DashboardStatsDifficulty from './DashboardStatsDifficulty'
import DashboardStatsCategory from './DashboardStatsCategory'

import trafficFunctions from '../../utility/trafficFunctions'

import './DashboardStats.css'

export default class DashboardStats extends React.Component{

	state = {
		user_answers: [],
		all_questions: [],
		average_time: 0,
		mounted: false,
		updated_all_questions: false,
		updated_user_answers: false,
		updated_average_time: false,
		updated_rating:false
	}

	componentDidMount(){
		this.setState({ mounted: true })
		this.onPageLoadFunctions()
	}

	componentDidUpdate(){
		if(this.state.mounted && !this.state.updated_user_answers){
			this.setUserAnswers()
		}
		if(this.state.mounted && !this.state.updated_all_questions){
			this.setAllQuestions()
		}
		if(this.state.updated_user_answers && !this.state.updated_average_time){
			this.getAverageTime()
		}
		if(this.state.updated_all_questions && !this.state.updated_rating){
			this.getRating()
		}
	}

	setUserAnswers = () => {
		this.setState({
			user_answers: this.props.user_answers,
			updated_user_answers: true
		})
	}

	setAllQuestions = () => {
		this.setState({
			all_questions: this.props.all_questions,
			updated_all_questions: true
		})
	}

	getAverageTime = () => {
		let sum = 0
		let questionTimes = this.state.user_answers.map(answer => parseFloat(answer.user_time))

		questionTimes.forEach((time) => {
			sum += (10 - time)
		})

		this.setState({
			average_time: (sum / this.state.user_answers.length).toFixed(2),
			updated_average_time: true
		})
	}

	getRating = () => {
		let totalQuestionsAnsweredPercent = (this.state.user_answers.length / this.state.all_questions.length)
		let totalQuestionsCorrectPercent = (this.state.user_answers.filter(answer => answer.user_result === "correct").length / this.state.user_answers.length)
		let totalQuestionsWithNoAnswers = this.state.user_answers.filter(answer => answer.user_time === "0.0").length

		let time = this.state.average_time

		let question_factor = (totalQuestionsCorrectPercent + totalQuestionsAnsweredPercent) / 2.0
		let no_answers_factor = totalQuestionsWithNoAnswers === 0 ? 0 : totalQuestionsWithNoAnswers * 0.25
		let time_factor = (10 - time) * question_factor
		let final_factor = totalQuestionsWithNoAnswers === 0 ? time_factor : time_factor - no_answers_factor

		let final_rating = final_factor.toFixed(2)

		this.setState({
			rating: final_rating,
			updated_rating: true
		})
	}

	onPageLoadFunctions = () => {
		var pageInfo = {
			user_id: localStorage.user_id,
			page_name: 'dashboard_user_stats',
		}

		trafficFunctions('page', 'http://localhost:3001/pages', pageInfo)
	}

	render(){

		const totalQuestions = Object.keys(this.state.all_questions).length
		const totalQuestionsWithNoAnswers = this.state.user_answers.filter(answer => answer.user_time === "0.0").length

		const totalQuestionsAnswered = this.state.user_answers.length
		const totalQuestionsAnsweredPercent = ((this.state.user_answers.length / this.state.all_questions.length) * 100).toFixed(2)

		const totalQuestionsCorrect = this.state.user_answers.filter(answer => answer.user_result === "correct").length
		const totalQuestionsCorrectPercent = ((this.state.user_answers.filter(answer => answer.user_result === "correct").length / this.state.user_answers.length) * 100).toFixed(2)

		const correct_answers = <>{ totalQuestionsCorrect }/{ totalQuestionsAnswered } correct ({totalQuestionsCorrectPercent}%)</>

		const stats_rating_countdown =
		<>
		<div className="stats_total_rating_coutdown">
			<p>Answer {5 - totalQuestionsAnswered} more questions to receive a rating!</p>
		</div>
		</>

		const rating = <><h1>{ this.state.rating }</h1></>

		const total_questions_answered =
		<div className="stats_total">
			<ul>
				<li>{ totalQuestionsAnswered }/{ totalQuestions } answered ({totalQuestionsAnsweredPercent}%)</li>
				<li>{ totalQuestionsAnswered > 0 ? correct_answers : "0/0 correct (0.00%)" }</li>
			 <br />
				<li>{ this.state.user_answers.length > 0 ? `Average Time: ${this.state.average_time} seconds` : "Average Time: 0.00 seconds" }</li>
				<li>Outta Times: { totalQuestionsWithNoAnswers }</li>
			</ul>
			<div className="stats_total_rating">
				<h2><span>SmartApp</span>™ Rating</h2>
				{ totalQuestionsAnswered < 5 ? stats_rating_countdown : rating }
			</div>
		</div>

		const questionsAnsweredByDifficulty =
			<DashboardStatsDifficulty
				user={ this.props.user }
				user_answers={ this.props.user_answers }
				all_questions={ this.state.all_questions }
			/>

		const questionsAnsweredByCategory =
			<DashboardStatsCategory
				user={ this.props.user }
				user_answers={ this.props.user_answers }
				all_questions={ this.state.all_questions }
			/>

		return(
			<div className={ "stats_wrapper"}>
				{ total_questions_answered }
				{ questionsAnsweredByDifficulty }
				{ questionsAnsweredByCategory }
			</div>
		)
	}
}
