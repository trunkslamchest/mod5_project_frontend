import React from 'react'

export default class DashboardStatsDifficulty extends React.Component{

	state = {
		all_easy_questions: [],
		all_medium_questions: [],
		all_hard_questions: [],
		user_answers_correct: 0,
		user_answers_easy: 0,
		user_answers_easy_correct: 0,
		user_answers_medium: 0,
		user_answers_medium_correct: 0,
		user_answers_hard: 0,
		user_answers_hard_correct: 0,
		mounted: false,
		updatedAllQuestions : false,
		updatedDifficulties: false,
	}

	componentDidMount(){
		this.setState({
			mounted: true,
			updatedAllQuestions : false,
			updatedDifficulties: false,
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

			let all_easy_questions = this.props.all_questions.filter(question => question.difficulty === "Easy" || question.difficulty === "easy")
			let all_medium_questions = this.props.all_questions.filter(question => question.difficulty === "Medium" || question.difficulty === "medium")
			let all_hard_questions = this.props.all_questions.filter(question => question.difficulty === "Hard" || question.difficulty === "hard")

			this.setState({
				all_easy_questions: all_easy_questions,
				all_medium_questions: all_medium_questions,
				all_hard_questions: all_hard_questions,
				updatedAllQuestions: true
			})
		}
	}

	questionsAnsweredByDifficulty = () => {
		if (this.state.updatedAllQuestions && this.state.updatedDifficulties !== true ) {

			let user_answers = this.props.user_answers.filter(answer => answer)
			let user_answers_ids = user_answers.map(answer => answer.question_id)

			let user_answers_correct = this.props.user_answers.filter(answer => answer.user_result === "correct")
			let user_answers_correct_ids = user_answers_correct.map(answer => answer.question_id)

			let user_answers_easy = this.state.all_easy_questions.filter(answer => user_answers_ids.includes(answer.id))
			let user_answers_easy_correct = user_answers_easy.filter(answer => user_answers_correct_ids.includes(answer.id))

			let user_answers_medium = this.state.all_medium_questions.filter(answer => user_answers_ids.includes(answer.id))
			let user_answers_medium_correct = user_answers_medium.filter(answer => user_answers_correct_ids.includes(answer.id))

			let user_answers_hard = this.state.all_hard_questions.filter(answer => user_answers_ids.includes(answer.id))
			let user_answers_hard_correct = user_answers_hard.filter(answer => user_answers_correct_ids.includes(answer.id))

			this.setState({
				user_answers_correct: user_answers_correct.length,
				user_answers_easy: user_answers_easy.length,
				user_answers_easy_correct: user_answers_easy_correct.length,
				user_answers_medium: user_answers_medium.length,
				user_answers_medium_correct: user_answers_medium_correct.length,
				user_answers_hard: user_answers_hard.length,
				user_answers_hard_correct: user_answers_hard_correct.length,
				updatedDifficulties: true
			})
		}

	}

	render(){

		const no_questions_answered = <> No questions answered! </>

		const no_correct_answers = <> No correct answers! </>

		const zero_percent = <> (0.00%) </>

		const easy_questions =
			<ul>
				<li>Easy</li>
				<li>
					{this.state.updatedDifficulties ? `${ this.state.user_answers_easy }/${ this.state.all_easy_questions.length } answered` : no_questions_answered }
					{this.state.updatedDifficulties && this.state.user_answers_easy / this.state.all_easy_questions.length ? ` (${((this.state.user_answers_easy / this.state.all_easy_questions.length) * 100).toFixed(2)}%)` : zero_percent }
				</li>
				<li>
					{this.state.updatedDifficulties ? `${ this.state.user_answers_easy_correct }/${ this.state.user_answers_easy } correct` : no_correct_answers }
					{this.state.updatedDifficulties && this.state.user_answers_easy_correct / this.state.user_answers_easy ? ` (${((this.state.user_answers_easy_correct / this.state.user_answers_easy ) * 100).toFixed(2)}%)` : zero_percent }
				</li>
			</ul>

		const medium_questions =
			<ul>
				<li>Medium</li>
				<li>
					{this.state.updatedDifficulties ? `${ this.state.user_answers_medium }/${ this.state.all_medium_questions.length } answered` : no_questions_answered }
					{this.state.updatedDifficulties && this.state.user_answers_medium / this.state.all_medium_questions.length ? ` (${((this.state.user_answers_medium / this.state.all_medium_questions.length) * 100).toFixed(2)}%)` : zero_percent }
				</li>
				<li>
					{this.state.updatedDifficulties ? `${ this.state.user_answers_medium_correct }/${ this.state.user_answers_medium } correct` : no_correct_answers }
					{this.state.updatedDifficulties && this.state.user_answers_medium_correct / this.state.user_answers_medium ? ` (${((this.state.user_answers_medium_correct / this.state.user_answers_medium ) * 100).toFixed(2)}%)` : zero_percent }
				</li>
			</ul>

		const hard_questions =
			<ul>
				<li>Hard</li>
				<li>
					{this.state.updatedDifficulties ? `${ this.state.user_answers_hard }/${ this.state.all_hard_questions.length } answered` : no_questions_answered }
					{this.state.updatedDifficulties && this.state.user_answers_hard / this.state.all_hard_questions.length ? ` (${((this.state.user_answers_hard / this.state.all_hard_questions.length) * 100).toFixed(2)}%)` : zero_percent }
				</li>
				<li>
					{this.state.updatedDifficulties ? `${ this.state.user_answers_hard_correct }/${ this.state.user_answers_hard } correct` : no_correct_answers }
					{this.state.updatedDifficulties && this.state.user_answers_hard_correct / this.state.user_answers_hard ? ` (${((this.state.user_answers_hard_correct / this.state.user_answers_hard ) * 100).toFixed(2)}%)` : zero_percent }
				</li>
			</ul>

		return(
			<>
				<div className="stats_header">
					<h3> Difficulty </h3>
				</div>
				<div className="stats_difficulty">
					{ easy_questions }
					{ medium_questions }
					{ hard_questions }
				</div>
			</>
		)
	}
}