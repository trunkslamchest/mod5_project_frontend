import React from 'react'

import { Redirect } from 'react-router-dom'

import QuestionDisplay from './QuestionDisplay'

import trafficFunctions from '../utility/trafficFunctions'
import userFunctions from '../utility/userFunctions'
import questionFunctions from '../utility/questionFunctions'

import './Questions.css'
import './PlayByCategory.css'

export default class PlayByDifficultyContainer extends React.Component{

	state={
		mounted: null,
		category: "",
		sortedQuestions: [],
		answeredQuestionsIDs: [],
		displaySelect: false,
		displayQuestion: false,
		questionsUpdated: false,
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
			displayQuestion: false
		})

		this.onPageLoadFunctions()
	}

	componentDidUpdate(){
		if ((!this.state.displaySelect && !this.state.questionsUpdated)) {
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
		questionFunctions('get', 'http://localhost:3001/questions')
		.then(res_obj =>
			this.setState({
				sortedQuestions: res_obj.data.filter(question_obj => question_obj.attributes.question.category === this.state.category),
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
		const all_questions_answered =
		<>
			<div className="question_wrapper_header">
				<h3 key={"all_questions_answered"}> You Have Answered All the { this.state.category } Questions! </h3>
			</div>
			<button
				key={"reselect_button"}
				className="reselect_button"
				onClick={ this.onClickReSelectFunctions }
			>
				Select Another Category
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
		this.setState({ displayQuestion: true }, this.getSortedAnsweredQuestions(user_id))
	}

	onClickSelectFunctions = (event) => {
		this.setState({
			category: event.target.value,
			displaySelect: false,
			displayQuestion: true
		}, this.onClickTrafficFunctions(event))
	}

	onClickReSelectFunctions = (event) => {
		this.setState({
			mounted: true,
			category: "",
			sortedQuestions: [],
			answeredQuestionsIDs: [],
			displaySelect: true,
			displayQuestion: false,
			questionsUpdated: false,
			updatedAnsweredQuestions: false,
		})
	}

	componentWillUnmount(){
		this.setState({ displayQuestion: false })
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
			page_name: 'play_by_category',
		}

		trafficFunctions('page', 'http://localhost:3001/pages', pageInfo)
	}

	render(){

		const blank = <></>

		const redirect_to_index = <Redirect to="/" />

		const header = <div className="question_wrapper_header"><h3>Select A Category</h3></div>

		const display_header = <> { this.state.displaySelect ? header : blank } </>

		const select_category_buttons = [
			<button
				key={"anime_button"}
				value={ "Anime" }
				className="category_button"
				name="anime_button"
				interaction="click"
				onClick={ this.onClickSelectFunctions }
			>
				Anime
			</button>,
			<button
				key={"art_button"}
				value={ "Art" }
				className="category_button"
				name="art_button"
				interaction="click"
				onClick={ this.onClickSelectFunctions }
			>
				Art
			</button>,
			<button
				key={"books_button"}
				value={ "Books" }
				className="category_button"
				name="books_button"
				interaction="click"
				onClick={ this.onClickSelectFunctions }
			>
				Books
			</button>,
			<button
				key={"celebrities_button"}
				value={ "Celebrities" }
				className="category_button"
				name="celebrities_button"
				interaction="click"
				onClick={ this.onClickSelectFunctions }
			>
				Celebrities
			</button>,
			<button
				key={"computers_button"}
				value={ "Computers" }
				className="category_button"
				name="computers_button"
				interaction="click"
				onClick={ this.onClickSelectFunctions }
			>
				Computers
			</button>,
			<button
				key={"film_button"}
				value={ "Film" }
				className="category_button"
				name="film_button"
				interaction="click"
				onClick={ this.onClickSelectFunctions }
			>
				Film
			</button>,
			<button
				key={"general_knowledge_button"}
				value={ "General Knowledge" }
				className="category_button"
				name="general_knowledge_button"
				interaction="click"
				onClick={ this.onClickSelectFunctions }
			>
				General Knowledge
			</button>,
				<button
				key={"geography_button"}
				value={ "Geography" }
				className="category_button"
				name="geography_button"
				interaction="click"
				onClick={ this.onClickSelectFunctions }
			>
				Geography
			</button>,
				<button
				key={"history_button"}
				value={ "History" }
				className="category_button"
				name="history_button"
				interaction="click"
				onClick={ this.onClickSelectFunctions }
			>
				History
			</button>,
			<button
				key={"math_button"}
				value={ "Math" }
				className="category_button"
				name="math_button"
				interaction="click"
				onClick={ this.onClickSelectFunctions }
			>
				Math
			</button>,
			<button
				key={"music_button"}
				value={ "Music" }
				className="category_button"
				name="music_button"
				interaction="click"
				onClick={ this.onClickSelectFunctions }
			>
				Music
			</button>,
			<button
				key={"mythology_button"}
				value={ "Mythology" }
				className="category_button"
				name="mythology_button"
				interaction="click"
				onClick={ this.onClickSelectFunctions }
			>
				Mythology
			</button>,
			<button
				key={"nature_button"}
				value={ "Nature" }
				className="category_button"
				name="nature_button"
				interaction="click"
				onClick={ this.onClickSelectFunctions }
			>
				Nature
			</button>,
			<button
				key={"politics_button"}
				value={ "Politics" }
				className="category_button"
				name="politics_button"
				interaction="click"
				onClick={ this.onClickSelectFunctions }
			>
				Politics
			</button>,
			<button
				key={"science_button"}
				value={ "Science" }
				className="category_button"
				name="science_button"
				interaction="click"
				onClick={ this.onClickSelectFunctions }
			>
				Science
			</button>,
			<button
				key={"sports_button"}
				value={ "Sports" }
				className="category_button"
				name="sports_button"
				interaction="click"
				onClick={ this.onClickSelectFunctions }
			>
				Sports
			</button>,
			<button
				key={"television_button"}
				value={ "Television" }
				className="category_button"
				name="television_button"
				interaction="click"
				onClick={ this.onClickSelectFunctions }
			>
				Television
			</button>,
			<button
				key={"theatre_button"}
				value={ "Theatre" }
				className="category_button"
				name="theatre_button"
				interaction="click"
				onClick={ this.onClickSelectFunctions }
			>
				Theatre
			</button>,
			<button
				key={"vehicles_button"}
				value={ "Vehicles" }
				className="category_button"
				name="vehicles_button"
				interaction="click"
				onClick={ this.onClickSelectFunctions }
			>
				Vehicles
			</button>,
			<button
				key={"video_games_button"}
				value={ "Video Games" }
				className="category_button"
				name="video_games_button"
				interaction="click"
				onClick={ this.onClickSelectFunctions }
			>
				Video Games
			</button>,
		]

		return(
			<div className="question_wrapper">
				{ localStorage.length === 0 ? redirect_to_index : "" }
				{ display_header }
				<div className="select_buttons_container">
					{ this.state.displaySelect ? select_category_buttons : blank }
				</div>
				<>
					{this.state.updatedAnsweredQuestions ? this.getRandomQuestion() : blank }
				</>
			</div>
		)
	}
}
