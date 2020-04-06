import React from 'react'

import { Redirect } from 'react-router-dom'

import QuestionDisplay from './QuestionDisplay'

import trafficFunctions from '../utility/trafficFunctions'
import userFunctions from '../utility/userFunctions'
import questionFunctions from '../utility/questionFunctions'

import './Questions.css'

export default class QuickPlayContainer extends React.Component{

	state={
		user_id: '',
		allQuestions: [],
		answeredQuestionsIDs: [],
		displayQuestion: false,
		mounted: null,
		updatedAllQuestions: false,
		updatedAnsweredQuestions: false,
		updatedRandomQuestion: false,
	}

	componentDidMount(){
		const redirect_to_index = <Redirect to="/" />

		if (localStorage.length === 0) {
			return redirect_to_index
		}

		this.setState({
			mounted: true,
			displayQuestion: true,
		})

		this.onPageLoadFunctions()
	}

	componentDidUpdate(){
		if (this.state.mounted && !this.state.updatedAllQuestions) {
			this.getQuestions()
		}

		if (this.state.updatedAllQuestions && !this.state.updatedAnsweredQuestions) {
			this.getAnsweredQuestions(this.props.user_id)
		}

		if (this.state.updatedAnsweredQuestions && !this.state.updatedRandomQuestion) {
			this.getRandomQuestion()
		}
	}

	getQuestions = () => {
		questionFunctions('get', 'http://localhost:3001/questions')
		.then(res_obj =>
			this.setState({
				allQuestions: res_obj.data.map(question_obj => question_obj.attributes.question),
				updatedAllQuestions: true
			})
		)
	}

	getAnsweredQuestions = (user_id) => {
		userFunctions('get', `http://localhost:3001/users/${user_id}`)
		.then(res_obj =>
			this.setState({
				answeredQuestionsIDs: [...new Set(res_obj.data.attributes.answers.map(question_obj => question_obj.question_id))].sort(),
				updatedAnsweredQuestions: true
			})
		)
	}

	getRandomQuestion = () => {

		const all_questions_answered =
				<div className="question_wrapper_header">
					<h3 key={"all_questions_answered"}> You Have Answered All Available Questions! </h3>
				</div>

		const headerCheck = this.state.displayQuestion ? "" : all_questions_answered

		const filtered_questions = this.state.allQuestions.filter( question =>
			!this.state.answeredQuestionsIDs.includes(question.id)
		)

		const rng = filtered_questions[Math.floor(Math.random() * filtered_questions.length - 1) + 1]

		let randomQuestion = filtered_questions.map(question_obj =>
			(question_obj.id === rng.id) ?
			<QuestionDisplay
				key={ question_obj.id }
				question={ question_obj }
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
		this.setState({ displayQuestion: true }, this.getAnsweredQuestions(user_id))
	}

	componentWillUnmount(){
		this.setState({ displayQuestion: false })
	}

	onPageLoadFunctions = () => {
		let pageInfo = {
			user_id: localStorage.user_id,
			page_name: 'quick_play',
		}

		trafficFunctions('page', 'http://localhost:3001/pages', pageInfo)
	}


	render(){

		const loading =
			<div className="loading_container">
				<div className="loading_animation_container">
					<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
				</div>
			</div>

		const getRandomQuestion = this.state.displayQuestion ? this.getRandomQuestion() : loading

		const redirect_to_index = <Redirect to="/" />

		return(
			<div className="question_wrapper">
				{ localStorage.length === 0 ? redirect_to_index : getRandomQuestion }
			</div>
		)
	}
}
