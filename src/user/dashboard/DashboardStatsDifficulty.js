import React from 'react'

import {
        //  Link
        } from 'react-router-dom'

export default class DashboardStatsDifficulty extends React.Component{

	state = {
		user_easy_questions: 0,
		user_medium_questions: 0,
		user_hard_questions: 0,
		user_correct_easy_questions: 0,
		user_correct_medium_questions: 0,
		user_correct_hard_questions: 0,
		all_questions: 0,
		all_easy_questions: 0,
		all_hard_questions: 0,
		all_medium_questions: 0,
		mounted: false,
		updatedAllQuestions : false,
		updatedDifficulties: false,
	}

	componentDidMount(){
		this.setState({
			mounted: true
		})
	}

	componentDidUpdate(){
		if (this.state.mounted) {
			this.questionsAnsweredByDifficulty()
			this.sortAllQuestionsByDifficulty()
		}
	}

	sortAllQuestionsByDifficulty = () => {
		if (Object.keys(this.props.all_questions).length > 0 && this.state.updatedAllQuestions !== true ) {

			let sorted = this.props.all_questions.map(question => question.difficulty).sort()
			let all_filtered_easy = sorted.filter(question => question === "Easy" || question === "easy")
			let all_filtered_medium = sorted.filter(question => question === "Medium" || question === "medium")
			let all_filtered_hard = sorted.filter(question => question === "Hard" || question === "hard")

			this.setState({
				all_questions: Object.keys(this.props.all_questions).length,
				all_easy_questions: all_filtered_easy.length,
				all_medium_questions: all_filtered_medium.length,
				all_hard_questions: all_filtered_hard.length,
				updatedAllQuestions: true
			})
		}
	}

	questionsAnsweredByDifficulty = () => {
		if (Object.keys(this.props.user).length > 0 && this.state.updatedDifficulties !== true ) {

			let user_answers_correct = this.props.user.answers.filter(answer => answer.user_result === "correct")
			let user_answers_correct_ids = user_answers_correct.map(answer => answer.question_id)

			let user_questions_easy = this.props.user.questions.filter(question => question.difficulty === "Easy" || question.difficulty === "easy")
			let user_questions_medium = this.props.user.questions.filter(question => question.difficulty === "Medium" || question.difficulty === "medium")
			let user_questions_hard = this.props.user.questions.filter(question => question.difficulty === "Hard" || question.difficulty === "hard")

			let user_filtered_correct_easy = user_questions_easy.filter(answer => user_answers_correct_ids.includes(answer.id))
			let user_filtered_correct_medium = user_questions_medium.filter(answer => user_answers_correct_ids.includes(answer.id))
			let user_filtered_correct_hard = user_questions_hard.filter(answer => user_answers_correct_ids.includes(answer.id))

			this.setState({
				user_questions: this.props.user.questions.length,
				user_easy_questions: user_questions_easy.length,
				user_medium_questions: user_questions_medium.length,
				user_hard_questions: user_questions_hard.length,
				user_correct_easy_questions: user_filtered_correct_easy.length,
				user_correct_medium_questions: user_filtered_correct_medium.length,
				user_correct_hard_questions: user_filtered_correct_hard.length,
				updatedDifficulties: true
			})
		}

	}

	render(){

		// {/* { this.state.user_easy_questions }/{ this.state.all_easy_questions } answered */}
		// {/* ({ ((this.state.user_easy_questions / this.state.all_easy_questions) * 100).toFixed(2) }%) */}
		// {/* { this.state.user_correct_easy_questions }/{ this.state.user_easy_questions } correct
		// ({((this.state.user_correct_easy_questions / this.state.user_easy_questions) * 100).toFixed(2)}%) */}

		const no_questions_answered = <> No questions answered! </>

		const no_correct_answers = <> No correct answers! </>

		const easy_questions =
			<ul>
				<li>Easy Questions:</li>
				<li>
					{this.state.user_easy_questions ? `${ this.state.user_easy_questions }/${ this.state.all_easy_questions } answered` : no_questions_answered }
					{this.state.user_easy_questions ? ` (${((this.state.user_easy_questions / this.state.all_easy_questions) * 100).toFixed(2)}%)` : "" }
				</li>
				<li>
					{this.state.user_correct_easy_questions ? `${ this.state.user_correct_easy_questions }/${ this.state.user_easy_questions } correct` : no_correct_answers }
					{this.state.user_correct_easy_questions ? ` (${((this.state.user_correct_easy_questions / this.state.user_easy_questions) * 100).toFixed(2)}%)` : "" }
				</li>
			</ul>

		const medium_questions =
			<ul>
				<li>
					{this.state.user_medium_questions ? `${ this.state.user_medium_questions }/${ this.state.all_medium_questions } answered` : no_questions_answered }
					{this.state.user_medium_questions ? ` (${((this.state.user_medium_questions / this.state.all_medium_questions) * 100).toFixed(2)}%)` : "" }
				</li>
				<li>
					{this.state.user_correct_medium_questions ? `${ this.state.user_correct_medium_questions }/${ this.state.user_medium_questions } correct` : no_correct_answers }
					{this.state.user_correct_medium_questions ? ` (${((this.state.user_correct_medium_questions / this.state.user_medium_questions) * 100).toFixed(2)}%)` : "" }
				</li>
			</ul>

		const hard_questions =
			<ul>
				<li>Hard Questions:</li>
				<li>
					{this.state.user_hard_questions ? `${ this.state.user_hard_questions }/${ this.state.all_hard_questions } answered` : no_questions_answered }
					{this.state.user_hard_questions ? ` (${((this.state.user_hard_questions / this.state.all_hard_questions) * 100).toFixed(2)}%)` : "" }
				</li>
				<li>
					{this.state.user_correct_hard_questions ? `${ this.state.user_correct_hard_questions }/${ this.state.user_hard_questions } correct` : no_correct_answers }
					{this.state.user_correct_hard_questions ? ` (${((this.state.user_correct_hard_questions / this.state.user_hard_questions) * 100).toFixed(2)}%)` : "" }
				</li>
			</ul>

		return(
			<div className="dashboard_stats_difficulty">
				{ easy_questions }
				{ medium_questions }
				{ hard_questions }
			</div>
		)
	}
}