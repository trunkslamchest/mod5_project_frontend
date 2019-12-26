import React from 'react'

import QuickPlayDisplay from './QuickPlayDisplay'

import '../css/Questions.css'
import '../css/PlayByDifficulty.css'

import {
		//  NavLink,
		//  Link,
		//  Redirect,
		// Route,
		// Switch,
		//  useRouteMatch,
		//  useParams
	} from 'react-router-dom'

export default class PlayByDifficultyContainer extends React.Component{

	state={
		mounted: null,
		difficulty: "",
		sortedQuestions: [],
		answeredQuestionsIDs: [],
		displaySelect: false,
		questionsUpdate: false,
		updatedAnsweredQuestions: false,
		gotRandomQuestion: false,
	}

	componentDidMount(){
		this.setState({
			mounted: true,
			displaySelect: true,
		})
	}

	componentDidUpdate(){
		if (!this.state.displaySelect && !this.state.questionsUpdated) {
			this.getSortedQuestions()
		}
		if (this.state.questionsUpdated && !this.state.updatedAnsweredQuestions) {
			this.getSortedAnsweredQuestions(this.props.user_id)
		}
		if(this.state.updatedAnsweredQuestions && !this.state.gotRandomQuestion) {
			this.getRandomQuestion()
		}
	}

	getSortedQuestions = () => {
			fetch(`http://localhost:3001/questions/`)
			.then(res => res.json())
			.then(res_obj =>
				this.setState({
					sortedQuestions: res_obj.data.filter(question_obj => question_obj.attributes.question.difficulty === this.state.difficulty),
					questionsUpdated: true,
				})
			)
	}

	getSortedAnsweredQuestions = (user_id) => {
		fetch(`http://localhost:3001/users/${user_id}`)
		.then(res => res.json())
		.then(res_obj =>
			this.setState({
				answeredQuestionsIDs: [...new Set(res_obj.data.attributes.answers.map(question_obj => question_obj.question_id))].sort(),
				updatedAnsweredQuestions: true
			})
		)
	}

	getRandomQuestion = () => {

		const all_questions_answered = <h3 key={"all_questions_answered"}> You Have Answered All the {this.state.difficulty } Questions! </h3>

		const filtered_questions = this.state.sortedQuestions.filter( question =>
			!this.state.answeredQuestionsIDs.includes(parseInt(question.id))
		)

		const rng = filtered_questions[Math.floor(Math.random() * filtered_questions.length - 1) + 1]

		let randomQuestion = filtered_questions.map(question_obj =>
			(question_obj.id === rng.id) ?
			<QuickPlayDisplay
				key={ question_obj.id }
				question={ question_obj.attributes.question }
				user_id={ this.props.user_id }
				user_name={ this.props.user_name }
				nextQuestion={ this.nextQuestion }
			/>
			:
			""
		)

		return filtered_questions.length === 0 ? all_questions_answered : randomQuestion
	}

	nextQuestion = (user_id) => {
		this.setState({
			display: 'question'
		}, this.getSortedAnsweredQuestions(user_id))
	}


	onClickEasyFunctions = (event) => {
		this.setState({
			difficulty: event.target.value,
			displaySelect: false
		})
	}

	onClickMediumFunctions = (event) => {
		this.setState({
			difficulty: event.target.value,
			displaySelect: false
		})
	}

	onClickHardFunctions = (event) => {
		this.setState({
			difficulty: event.target.value,
			displaySelect: false
		})
	}

	render(){

		// const error = <h3>Error. Big Oof.</h3>

		const blank = <></>

		const header = <><h3>Select A Difficulty</h3></>

		const display_header = <>{ this.state.displaySelect ? header : blank }</>

		const select_difficulty_buttons = [
			<button
				key={"easy_button1"}
				value={ "Easy" }
				className="easy_button"
				onClick={ this.onClickEasyFunctions }
			>
				Easy
			</button>,
			<button
				key={"medium_button1"}
				value={ "Medium" }
				className="medium_button"
				onClick={ this.onClickMediumFunctions }
			>
				Medium
			</button>,
			<button
				key={"hard_button1"}
				value={ "Hard" }
				className="hard_button"
				onClick={ this.onClickHardFunctions }
			>
				Hard
			</button>,
		]

		return(
			<div className="question_wrapper">
				{ display_header }
				<div className="select_buttons_container">
					{ this.state.displaySelect ? select_difficulty_buttons : blank }
				</div>
				<>
					{this.state.updatedAnsweredQuestions ? this.getRandomQuestion() : blank }
				</>
			</div>
		)
	}
}
