import React from 'react'

// import QuestionCard from './QuestionCard.js'

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

	componentDidMount(){
		this.randomizeAnswerOrder(this.props.question)
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
					user_id: this.props.user_id,
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
					user_id: this.props.user_id,
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

	onClickNextQuestionFunctions = () => {
		this.props.nextQuestion(this.props.user_id)
		this.setState({
			display: 'question'
		})
	}

	render(){
		// console.log("props", this.props)
		// console.log("shuffled_answers", this.state.answers)

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


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// export default class QuestionDisplay extends React.Component{
// 	// state = {
// 	// 	questions: {},
// 	// 	question: {},
// 	// 	question_id: {},
// 	// 	user: {},
// 	// 	found_question: null,
// 	// 	display: 'question'
// 	// }

// 	// onClickUpdateTrafficFunctions = (event) => {
// 	// 	this.props.update_traffic_data({
// 	// 		user_id: this.props.user_id,
// 	// 		interaction: event.target.attributes.interaction.value,
// 	// 		element: event.target.name
// 	// 	})
// 	// }

// 	// onPageLoadFunctions = (props) => {
// 	// 	this.props.update_page_data({
// 	// 		user_id: props.user_id,
// 	// 		page_name: "user_dashboard"
// 	// 	})
// 	// }

// 	render(){
// 		console.log(this.props)
// 		// let n = Math.floor(Math.random() * 6) + 1

// 		// const select_random_question = this.props.question.filter(question => question.id === n)
// 		// console.log(select_random_question)

// 		// const blank = <></>

// 		// const displayQuestion =
// 		// 		<QuestionDisplay
// 		// 			question={ this.state.question }
// 		// 			user={ this.state.user }
// 		// 			nextQuestion={ this.nextQuestion }
// 		// 			getQuestion={ this.getQuestion }
// 		// 			initNewQuestion={ this.initNewQuestion }
// 		// 			questions={this.state.questions}
// 		// 		/>

// 		return(
// 			<div className="question_wrapper">
// 			{/* {
// 				(() => {
// 					switch(this.state.display) {
// 						case 'question': return displayQuestion;
// 						default: return blank;
// 					}
// 				})()
// 			} */}
// 			</div>
// 		)
// 	}
// }