import React from 'react'

import {
		//  NavLink,
		//  Link,
		//  Redirect,
		// Route,
		// Switch,
		//  useRouteMatch,
		//  useParams
	} from 'react-router-dom'

var shuffle = require('shuffle-array')

export default class QuestionDisplay extends React.Component{

	state = {
		answers: [],
		user_answer: '',
		user_result: '',
		display: 'question'
	}

	UNSAFE_componentWillReceiveProps(nextProps){
		if (nextProps.question.id) {
			this.randomizeAnswerOrder(nextProps.question)
		}
	}

	randomizeAnswerOrder = (question) => {
		const question_answers = [
			question.correct_answer,
			question.incorrect_answers[0],
			question.incorrect_answers[1],
			question.incorrect_answers[2]
		]

		const shuffled_answers = shuffle(question_answers)

		this.setState({
			answers: shuffled_answers
		})
	}

	onClickSelectAnswerFunctions = (event) => {
		event.persist()
		if (event.target.value === this.props.question.correct_answer) {
			fetch("http://localhost:3001/answers", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					user_id: this.props.user.id,
					question_id: this.props.question.id,
					user_answer: event.target.value,
					user_result: "correct"
				})
			})
			.then(response => response.json())
			.then(res_obj => {
				this.setState({
					user_answer: event.target.value,
					user_result: 'correct!',
					display: 'answered'
				})
			})
		} else {
			fetch("http://localhost:3001/answers", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					user_id: this.props.user.id,
					question_id: this.props.question.id,
					user_answer: event.target.value,
					user_result: "incorrect"
				})
			})
			.then(response => response.json())
			.then(res_obj => {
				this.setState({
					user_answer: event.target.value,
					user_result: 'incorrect!',
					display: 'answered'
				})
			})
		}
	}

	onClickNextQuestionFunctions = () => {
		this.props.nextQuestion('question')
		this.setState({
			display: 'question'
		}, this.props.getQuestion())
	}

	render(){

		const question = this.props.question

		const blank = <></>

		const question_answer_buttons = [
			<button
				key={"answer_button1"}
				value={ this.state.answers[0] }
				className="alt_button"
				onClick={ this.onClickSelectAnswerFunctions }
			>
				{ this.state.answers[0] }
			</button>,
			<button
				key={"answer_button2"}
				value={ this.state.answers[1] }
				className="alt_button"
				onClick={ this.onClickSelectAnswerFunctions }
			>
				{ this.state.answers[1] }
			</button>,
			<button
				key={"answer_button3"}
				value={ this.state.answers[2] }
				className="alt_button"
				onClick={ this.onClickSelectAnswerFunctions }
			>
				{ this.state.answers[2] }
			</button>,
			<button
				key={"answer_button4"}
				value={ this.state.answers[3] }
				className="alt_button"
				onClick={ this.onClickSelectAnswerFunctions }
			>
				{ this.state.answers[3] }
			</button>
		]

		const displayQuestion =
			<>
				<h3>In { question.category }...</h3>
				<div className="question_card">
					<div className="question_desc">
						<h2>{ question.question_desc }</h2>
					</div>
					<div className="question_choices">
						{ question_answer_buttons }
					</div>
				</div>
			</>

		const answered =
			<>
				<h3>{ this.state.user_result }</h3>
				<div className="default_centered_buttons_container">
					<button
						key={"next_question_button"}
						className="alt_button"
						onClick={ this.onClickNextQuestionFunctions }
					>
						Next Question
					</button>
				</div>
			</>

		return(
			<>
				{
					(() => {
						switch(this.state.display) {
							case 'question': return displayQuestion;
							case 'answered': return answered;
							default: return blank;
						}
					})()
				}
			</>
		)
	}

}