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

export default class QuestionContainer extends React.Component{


state={
	all_questions: [],
	answered_questions_ids: [],
	display: 'question',
}

	componentDidMount(){
		this.getQuestions()
		this.onMountAsync()
	}

	// UNSAFE_componentWillReceiveProps(nextProps){
	// 	this.getAnsweredQuestions(nextProps.user_id)
	// }

	onMountAsync = async () => {
		try {
			await this.props.user_id;
			this.getAnsweredQuestions(this.props.user_id);
		} catch(errors) {
			console.log(errors);
		}
	}

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
		fetch(`http://localhost:3001/users/${user_id}`)
		.then(res => res.json())
		.then(res_obj =>
			this.setState({
				answered_questions_ids: res_obj.data.attributes.answers.map(question_obj => question_obj.question_id)
			})
		)
	}

	getRandomQuestion = () => {

		const all_questions_answered = <h3 key={"all_questions_answered"}> You Have Answered All Available Questions! </h3>

		const filtered_questions = this.state.all_questions.filter( question =>
			!this.state.answered_questions_ids.includes(question.id)
		)

		const rng = filtered_questions[Math.floor(Math.random() * filtered_questions.length - 1) + 1]
			// console.log(filtered_questions.length === 0)
		let randomQuestion = filtered_questions.map(question_obj =>
			(question_obj.id === rng.id) ?
			<QuestionDisplay
				key={ question_obj.id }
				question={ question_obj }
				user_id={ this.props.user_id }
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
		console.log(this.state.answered_questions_ids.length === 50)
		const blank = <></>

		// const error = <h3>Error. Big Oof.</h3>

		// const all_questions_answered = <h3 key={"all_questions_answered"}> You Have Answered All Available Questions! </h3>
		// 	filtered_questions.length === 0 ? all_questions_answered : randomQuestion
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



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// import React from 'react'

// import QuestionDisplay from './QuestionDisplay'

// import '../css/Questions.css'

// import {
// 		//  NavLink,
// 		//  Link,
// 		//  Redirect,
// 		// Route,
// 		// Switch,
// 		//  useRouteMatch,
// 		//  useParams
// 	} from 'react-router-dom'

// export default class QuestionContainer extends React.Component{


// state={
// 	all_questions: [],
// 	// all_question_ids: [],
// 	// answered_questions: [],
// 	answered_questions_ids: [],
// 	unanswered_question_ids: []
// }

// 	componentDidMount(){
// 		this.getQuestions()
// 		this.onMountAsync()
// 	}

// 	onMountAsync = async () => {
// 		try {
// 			await this.props.user_id;
// 			this.getAnsweredQuestions(this.props.user_id);
// 		} catch(errors) {
// 			console.log(errors);
// 		}
// 	}

// 	// UNSAFE_componentWillReceiveProps(nextProps){
// 	// 	this.getAnsweredQuestions(this.props.user_id);
// 	// }

// 	// getQuestion = () => {
// 	// 	let n = Math.floor(Math.random() * 6) + 1

// 	// 	fetch(`http://localhost:3001/questions/${n}`)
// 	// 	.then(res => res.json())
// 	// 	.then(res_obj =>
// 	// 		// console.log(res_obj.data.attributes.question.id),
// 	// 		this.setState({
// 	// 			question_id: res_obj.data.attributes.question.id,
// 	// 			question: res_obj.data.attributes.question,
// 	// 			found_question: true
// 	// 		})
// 	// 	)
// 	// 	// .then(	this.getUserAnswers() )
// 	// }

// 	getQuestions = () => {
// 		fetch(`http://localhost:3001/questions/`)
// 		.then(res => res.json())
// 		.then(res_obj =>
// 			this.setState({
// 				all_questions: res_obj.data.map(question_obj => question_obj.attributes.question),
// 				// all_questions_ids: res_obj.data.map(question_obj => question_obj.attributes.question.id)
// 			})
// 		)
// 	}

// 	getAnsweredQuestions = () => {
// 		fetch(`http://localhost:3001/users/${this.props.user_id}`)
// 		.then(res => res.json())
// 		.then(res_obj =>
// 			this.setState({
// 				// answered_questions: res_obj.data.attributes.answers.map(question_obj => question_obj),
// 				answered_questions_ids: res_obj.data.attributes.answers.map(question_obj => question_obj.question_id)
// 			})
// 		)
// 	}

// 	getRandomQuestion = () => {

// 		const filtered_questions = this.state.all_questions.filter( question =>
// 			!this.state.answered_questions_ids.includes(question.id)
// 		)

// 		const rng = filtered_questions[Math.floor(Math.random() * filtered_questions.length) + 1]

// 		const randomQuestion = filtered_questions.map(question_obj =>
// 			(question_obj.id === rng.id) ?
// 			<QuestionDisplay
// 				key={ question_obj.id }
// 				question={ question_obj }
// 			/>
// 			:
// 			""
// 		)

// 		return randomQuestion

// 	}

// 	render(){

// 		// let rng = this.state.answered_questions_ids[Math.floor(Math.random() * this.state.answered_questions_ids.length)]
// 		// var random = this.state.answered_questions_ids[Math.floor(Math.random()*this.state.answered_questions_ids.length)]

// 			// const rng = this.state.answered_questions_ids[Math.floor(Math.random()*this.state.answered_questions_ids.length)]

// 			// console.log(this.rng())

// 			// console.log(this.state.answered_questions_ids)


// 			// console.log(this.state.answered_questions_ids)
// 			// console.log(this.state.answered_questions_ids.length)
// 			// console.log(this.state.answered_questions_ids.length > 0 ? this.state.answered_questions_ids[Math.floor(Math.random() * this.state.answered_questions_ids.length)] : "")

// 		// const filter_questions = this.state.all_questions.filter( question =>
// 		// 	!this.state.answered_questions_ids.includes(question.id)
// 		// )

// 		// const randomQuestion = filter_questions.map(question_obj =>
// 		// 	// console.log(question_obj.id)
// 		// 	// console.log( question_obj.id, rng, question_obj.id === rng)

// 		// 	(question_obj.id === this.rng()) ?
// 		// 	<QuestionDisplay
// 		// 		key={ question_obj.id }
// 		// 		question={ question_obj }
// 		// 	/>
// 		// 	:
// 		// 	question_obj.id
// 		// )

// // console.log(map_filtered_questions)

// 		// const select_random_question = map_filtered_questions.find(question => question.id === n)

// 		// const select_random_question = map_filtered_questions.filter(question => question.id === n)


// 		return(
// 			<>
// 				{ this.getRandomQuestion() }
// 			</>
// 		)
// 	}
// }

