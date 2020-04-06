import React from 'react'

import { Redirect } from 'react-router-dom'

import QuestionDisplay from './QuestionDisplay'

import trafficFunctions from '../utility/trafficFunctions'
import userFunctions from '../utility/userFunctions'
import questionFunctions from '../utility/questionFunctions'

import './Questions.css'
import './PlayByDifficulty.css'

export default class PlayByDifficultyContainer extends React.Component{

	state={
		difficulty: "",
		sortedQuestions: [],
		answeredQuestionsIDs: [],
		mounted: null,
		displaySelect: false,
		questionsUpdate: false,
		updatedAnsweredQuestions: false,
		gotRandomQuestion: false,
	}

	componentDidMount(){
		const redirect_to_index = <Redirect to="/" />

		if (localStorage.length === 0) {
			return redirect_to_index
		}

		this.setState({
			mounted: true,
			displaySelect: true,
		})

		this.onPageLoadFunctions()
	}

	componentDidUpdate(){
		if (!this.state.displaySelect && !this.state.questionsUpdated) {
			this.getSortedQuestions()
		}

		if (this.state.questionsUpdated && !this.state.updatedAnsweredQuestions) {
			this.getSortedAnsweredQuestions(this.props.user_id)
		}

		if (this.state.updatedAnsweredQuestions && !this.state.gotRandomQuestion) {
			this.getRandomQuestion()
		}

	}

	getSortedQuestions = () => {
		questionFunctions('get', 'http://localhost:3001/questions')
		.then(res_obj =>
			this.setState({
				sortedQuestions: res_obj.data.filter(question_obj => question_obj.attributes.question.difficulty === this.state.difficulty),
				questionsUpdated: true,
			})
		)
	}

	getSortedAnsweredQuestions = (user_id) => {
		userFunctions('get', `http://localhost:3001/users/${user_id}`)
		.then(res_obj =>
			this.setState({
				answeredQuestionsIDs: [...new Set(res_obj.data.attributes.answers.map(question_obj => question_obj.question_id))].sort(),
				updatedAnsweredQuestions: true
			})
		)
	}

	getRandomQuestion = () => {
		const all_questions_answered = <>
			<div className="question_wrapper_header">
				<h3 key={"all_questions_answered"}> You Have Answered All the { this.state.difficulty } Questions! </h3>
			</div>
			<button
				key={"reselect_button"}
				className="reselect_button"
				onClick={ this.onClickReSelectFunctions }
			>
				Select Another Difficulty
			</button>
		</>

		const headerCheck = this.state.displaySelect ? "" : all_questions_answered

		const filtered_questions = this.state.sortedQuestions.filter( question =>
			!this.state.answeredQuestionsIDs.includes(parseInt(question.id))
		)

		const rng = filtered_questions[Math.floor(Math.random() * filtered_questions.length - 1) + 1]

		let randomQuestion = filtered_questions.map(question_obj =>
			(question_obj.id === rng.id) ?
			<QuestionDisplay
				key={ question_obj.id }
				question={ question_obj.attributes.question }
				user_id={ this.props.user_id }
				user_name={ this.props.user_name }
				nextQuestion={ this.nextQuestion }
			/>
			:
			""
		)

		return filtered_questions.length === 0 ? headerCheck : randomQuestion
	}

	nextQuestion = (user_id) => {
		this.setState({ display: 'question' }, this.getSortedAnsweredQuestions(user_id))
	}

	onClickEasyFunctions = (event) => {
		this.setState({
			difficulty: event.target.value,
			displaySelect: false
		}, this.onClickTrafficFunctions(event))
	}

	onClickMediumFunctions = (event) => {
		this.setState({
			difficulty: event.target.value,
			displaySelect: false
		}, this.onClickTrafficFunctions(event))
	}

	onClickHardFunctions = (event) => {
		this.setState({
			difficulty: event.target.value,
			displaySelect: false
		}, this.onClickTrafficFunctions(event))
	}

	onClickReSelectFunctions = (event) => {
		this.setState({
			mounted: true,
			category: "",
			sortedQuestions: [],
			answeredQuestionsIDs: [],
			displaySelect: true,
			questionsUpdated: false,
			updatedAnsweredQuestions: false,
		})
	}

	onClickTrafficFunctions = (event) => {
		let elementInfo = {
			user_id: this.props.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		}

		trafficFunctions('element', 'http://localhost:3001/traffics', elementInfo)
	}

	onPageLoadFunctions = () => {
		let pageInfo = {
			user_id: localStorage.user_id,
			page_name: 'play_by_difficulty',
		}

		trafficFunctions('page', 'http://localhost:3001/pages', pageInfo)
	}

	render(){

		const blank = <></>

		const redirect_to_index = <Redirect to="/" />

		const header = <div className="question_wrapper_header"><h3>Select A Difficulty</h3></div>

		const display_header = <>{ this.state.displaySelect ? header : blank }</>

		const select_difficulty_buttons = [
			<button
				key={"easy_button"}
				value={ "Easy" }
				className="easy_button"
				name="easy_button"
				interaction="click"
				onClick={ this.onClickEasyFunctions }
			>
				Easy
			</button>,
			<button
				key={"medium_button"}
				value={ "Medium" }
				className="medium_button"
				name="medium_button"
				interaction="click"
				onClick={ this.onClickMediumFunctions }
			>
				Medium
			</button>,
			<button
				key={"hard_button"}
				value={ "Hard" }
				className="hard_button"
				name="hard_button"
				interaction="click"
				onClick={ this.onClickHardFunctions }
			>
				Hard
			</button>,
		]

		return(
			<div className="question_wrapper">
			{ localStorage.length === 0 ? redirect_to_index : "" }
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
