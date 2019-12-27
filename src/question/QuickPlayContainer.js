import React from 'react'

import QuestionDisplay from './QuestionDisplay'

import '../css/Questions.css'

import {
		//  NavLink,
		//  Link,
		//  Redirect,
		// Route,
		// Switch,
		//  useRouteMatch,
		//  useParams
	} from 'react-router-dom'

export default class QuickPlayContainer extends React.Component{


state={
	all_questions: [],
	answered_questions_ids: [],
	display: 'question',
	mounted: false,
	updatedAnsweredQuestions: false
}

componentDidMount(){
	this.getQuestions()
	this.onMountAsync()
}

onMountAsync = async () => {
	try {
		await this.props.user_id;
		this.getAnsweredQuestions(this.props.user_id);
	} catch(errors) {
		console.log(errors);
	}
}

	// componentDidUpdate(){
	// 	if (this.state.mounted) {
	// 		this.getAnsweredQuestions();
	// 	}
	// }

	getQuestions = () => {
		fetch(`http://localhost:3001/questions/`)
		.then(res => res.json())
		.then(res_obj =>
			this.setState({
				all_questions: res_obj.data.map(question_obj => question_obj.attributes.question),
			})
		)
	}

	getAnsweredQuestions = (user_id) => {
		// if (this.props.user_id && this.state.updatedAnsweredQuestions !== true ) {
			fetch(`http://localhost:3001/users/${user_id}`)
			.then(res => res.json())
			.then(res_obj =>
				this.setState({
					answered_questions_ids: [...new Set(res_obj.data.attributes.answers.map(question_obj => question_obj.question_id))].sort(),
					updatedAnsweredQuestions: true
				})
			)
		// }
	}

	getRandomQuestion = () => {

		const all_questions_answered = <h3 key={"all_questions_answered"}> You Have Answered All Available Questions! </h3>

		const filtered_questions = this.state.all_questions.filter( question =>
			!this.state.answered_questions_ids.includes(question.id)
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
		return this.state.answered_questions_ids.length === this.state.all_questions.length ? all_questions_answered : randomQuestion
	}

	nextQuestion = (user_id) => {
		this.setState({
			display: 'question'
		}, this.getAnsweredQuestions(user_id))
	}

	render(){
		const blank = <></>
		// console.log(this.state)
		// const error = <h3>Error. Big Oof.</h3>

		return(
			<div className="question_wrapper">
				{
				(() => {
					switch(this.state.display) {
						case 'question': return this.getRandomQuestion();
						default: return blank;
					}
				})()
				}
			</div>
		)
	}
}
