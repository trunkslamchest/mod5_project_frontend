import React from 'react'

import QuestionDisplayComments from './QuestionDisplayComments.js'

import trafficFunctions from '../utility/trafficFunctions'
import questionFunctions from '../utility/questionFunctions'

import './QuestionDisplay.css'
import './QuestionAnswered.css'

import up_vote from '../assets/up_vote1.png'
import no_vote from '../assets/no_vote1.png'
import down_vote from '../assets/down_vote1.png'

var shuffle = require('shuffle-array')

export default class QuestionDisplay extends React.Component{

	state = {
		answers: [],
		votes: [],
		comments: [],
		user_answer: '',
		user_result: '',
		time: 10.00,
		display: 'question',
		stopTime: false,
		setTime: false,
		voted: false,
		showHeader: false,
		showQuestion: false,
		showChoices: false,
		showTimer: false,
		startTimer: false,
		showAnsweredHeader: false,
		showCorrectAnswer: false,
		showDifficulty: false,
		showVoteButtons: false,
		showCommentButton: false,
		showCommentText:false,
		showAllComments:false,
		showAnsweredButton: false,
		enableQuestion: false,
		enableCommentButton: false,
		enableAnsweredButton: false
	}

	componentDidMount(){

		this.randomizeAnswerOrder(this.props.question)
		this.timerTimeout = setTimeout(() => { this.setState({ showTimer: true })}, 1000)
		this.startTimer = setTimeout(() => { this.timerInterval = setInterval(this.timerFunctions, 10)}, 5000)
		this.headerTimeout = setTimeout(() => { this.setState({ showHeader: true })}, 2000)
		this.questionTimeout = setTimeout(() => { this.setState({ showQuestion: true })}, 3000)
		this.enableQuestionTimeout = setTimeout(() => { this.setState({ enableQuestion: true })}, 5000)
		this.choicesTimeout = setTimeout(() => { this.setState({ showChoices: true })}, 4000)

		// this.onPageLoadFunctions()
	}

	displayAnsweredCorrect = () => {
		this.answeredHeaderTimeout = setTimeout(() => { this.setState({ showAnsweredHeader: true })}, 1000)
		this.difficultyTimeout = setTimeout(() => { this.setState({ showDifficulty: true })}, 2000)
		this.voteButtonsTimeout = setTimeout(() => { this.setState({ showVoteButtons: true })}, 2500)
		this.commentButtonTimeout = setTimeout(() => { this.setState({ showCommentButton: true })}, 3000)
		this.answeredButtonsTimeout = setTimeout(() => { this.setState({ showAnsweredButton: true })}, 3500)

		this.enableCommentButtonTimeout = setTimeout(() => { this.setState({ enableCommentButton: true })}, 3750)
		this.enableAnsweredButtonTimeout = setTimeout(() => { this.setState({ enableAnsweredButton: true })}, 4250)
	}

	displayAnsweredIncorrect = () => {
		this.answeredHeaderTimeout = setTimeout(() => { this.setState({ showAnsweredHeader: true })}, 1000)
		this.correctAnswerTimeout = setTimeout(() => { this.setState({ showCorrectAnswer: true })}, 1500)
		this.difficultyTimeout = setTimeout(() => { this.setState({ showDifficulty: true })}, 2000)
		this.voteButtonsTimeout = setTimeout(() => { this.setState({ showVoteButtons: true })}, 2500)
		this.commentButtonTimeout = setTimeout(() => { this.setState({ showCommentButton: true })}, 3000)
		this.answeredButtonsTimeout = setTimeout(() => { this.setState({ showAnsweredButton: true })}, 3500)

		this.enableCommentButtonTimeout = setTimeout(() => { this.setState({ enableCommentButton: true })}, 3750)
		this.enableAnsweredButtonTimeout = setTimeout(() => { this.setState({ enableAnsweredButton: true })}, 4250)
	}

	displayAnsweredOuttaTime = () => {
		this.answeredHeaderTimeout = setTimeout(() => { this.setState({ showAnsweredHeader: true })}, 1000)
		this.difficultyTimeout = setTimeout(() => { this.setState({ showDifficulty: true })}, 2000)
		this.voteButtonsTimeout = setTimeout(() => { this.setState({ showVoteButtons: true })}, 2500)
		this.commentButtonTimeout = setTimeout(() => { this.setState({ showCommentButton: true })}, 3000)
		this.answeredButtonsTimeout = setTimeout(() => { this.setState({ showAnsweredButton: true })}, 3500)

		this.enableCommentButtonTimeout = setTimeout(() => { this.setState({ enableCommentButton: true })}, 3750)
		this.enableAnsweredButtonTimeout = setTimeout(() => { this.setState({ enableAnsweredButton: true })}, 4250)
	}

	onClickFunctions = (event) => {
		this.onClickSelectAnswerFunctions(event)
		this.onClickTrafficFunctions(event)
		this.stopTime()

		this.setState({ display: 'answered' })
	}

	onClickBlankFunctions = () => {
	}

	onClickSelectAnswerFunctions = (event) => {
		event.persist()

		this.stopTime()

		let answerObj

		if (event.target.value === this.props.question.correct_answer) {

			answerObj = {
				user_id: this.props.user_id,
				question_id: this.props.question.id,
				user_answer: event.target.value,
				user_result:'correct',
				user_time: this.state.time
			}

			questionFunctions('post', 'http://localhost:3001/answers', answerObj)
				.then(() => {
					this.setState({
						user_answer: event.target.value,
						user_result: 'Correct!',
						display: 'answered',
					})
				})
			this.displayAnsweredCorrect()
		} else {

			answerObj = {
				user_id: this.props.user_id,
				question_id: this.props.question.id,
				user_answer: event.target.value,
				user_result:'incorrect',
				user_time: this.state.time
			}

			questionFunctions('post', 'http://localhost:3001/answers', answerObj)
				.then(() => {
					this.setState({
						user_answer: event.target.value,
						user_result: 'Incorrect!',
						display: 'answered'
					})
				})
			this.displayAnsweredIncorrect()
		}
	}

	outtaTime = () => {

		let answerObj = {
			user_id: this.props.user_id,
			question_id: this.props.question.id,
			user_answer: 'No Answer',
			user_result: 'No Answer',
			user_time: "0.0"
		}

		questionFunctions('post', 'http://localhost:3001/answers', answerObj)
		.then(() => {
			this.setState({
				user_answer: 'No Answer',
				user_result: 'Outta Time!',
				display: 'answered',
				time: "-1"
			})
		})
		this.displayAnsweredOuttaTime()
	}

	randomizeAnswerOrder = (question) => {
		const question_answers = [
			question.correct_answer,
			question.incorrect_answers[0],
			question.incorrect_answers[1],
			question.incorrect_answers[2]
		]

		const shuffled_answers = shuffle(question_answers)

		this.setState({ answers: shuffled_answers })
	}

	stopTime = (time) => {
		this.setState({
			time: time,
			stopTime: true
		})
	}

	setTime = (time) => {
		this.setState({ time: time })
	}

	timerFunctions = () => {
		if (this.state.stopTime){
			this.setState({
				time: this.state.time
			}, this.setTime(this.state.time))
			clearInterval(this.timerInterval)
		}

		if (this.state.time <= 0) {
			this.setState({
				time: 0.0,
				display: 'answered'
			}, clearInterval(this.timerInterval))
		} else {
			this.setState({
				time: (this.state.time - 0.01).toFixed(2),
			})
		}
	}

	getVotes = () => {
		questionFunctions('get', `http://localhost:3001/questions/${this.props.question.id}`)
		.then(res_obj =>
			this.setState({
				votes: res_obj.data.attributes.votes.map(vote => vote.vote_num)
			})
		)
	}

	onClickUpVoteFunctions = (event) => {
		event.persist()

		let voteObj = {
			user_id: this.props.user_id,
			question_id: this.props.question.id,
			vote_num: 1
		}

		questionFunctions('post', 'http://localhost:3001/votes', voteObj)
		.then(() => {
			this.setState({
				voted: true,
				showVoteButtons: false
			})
			this.getVotes()
			this.onClickTrafficFunctions(event)
		})
	}

	onClickNoVoteFunctions = (event) => {
		event.persist()

		let voteObj = {
			user_id: this.props.user_id,
			question_id: this.props.question.id,
			vote_num: 0
		}

		questionFunctions('post', 'http://localhost:3001/votes', voteObj)
		.then(() => {
			this.setState({
				voted: true,
				showVoteButtons: false
			})
			this.getVotes()
			this.onClickTrafficFunctions(event)
		})
	}

	onClickDownVoteFunctions = (event) => {
		event.persist()

		let voteObj = {
			user_id: this.props.user_id,
			question_id: this.props.question.id,
			vote_num: -1
		}

		questionFunctions('post', 'http://localhost:3001/votes', voteObj)
		.then(() => {
			this.setState({
				voted: true,
				showVoteButtons: false
			})
			this.getVotes()
			this.onClickTrafficFunctions(event)
		})
	}

	calculateUpVotes = () => {
		let total_votes = this.state.votes.length
		let up_votes = this.state.votes.filter(vote => vote === 1 )
		let total_up_votes = up_votes.length
		let up_vote_percent = ((total_up_votes / total_votes) * 100).toFixed(2)
		if (up_votes.length === 0) {
			return "0%"
		} else {
			return `${up_vote_percent}%`
		}
	}

	calculateNoVotes = () => {
		let total_votes = this.state.votes.length
		let no_votes = this.state.votes.filter(vote => vote === 0 )
		let total_no_votes = no_votes.length
		let no_vote_percent = ((total_no_votes / total_votes) * 100).toFixed(2)
		if (no_votes.length === 0) {
			return "0%"
		} else {
			return `${no_vote_percent}%`
		}
	}

	calculateDownVotes = () => {
		let total_votes = this.state.votes.length
		let down_votes = this.state.votes.filter(vote => vote === -1 )
		let total_down_votes = down_votes.length
		let down_vote_percent = ((total_down_votes / total_votes) * 100).toFixed(2)
		if (down_votes.length === 0) {
			return "0%"
		} else {
			return `${down_vote_percent}%`
		}
	}

	getComments = () => {
		questionFunctions('get', `http://localhost:3001/questions/${this.props.question.id}`)
		.then(res_obj =>
			this.setState({ comments: res_obj.data.attributes.comments.map(comment => comment) })
		)
	}

	onClickCommentFunctions = (event) => {
		event.persist()
		this.onClickTrafficFunctions(event)
		this.setState({
			showCommentButton: false,
			showCommentText: true,
		})
	}

	onChangeComment = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}

	onSubmitCommentFunctions = (event) => {
		this.addCommentSubmitted(event)
		this.onClickTrafficFunctions(event)
	}

	addCommentSubmitted = (event) => {
		event.persist()
		event.preventDefault()

		let commentObj = {
			user_id: this.props.user_id,
			user_name: this.props.user_name,
			question_id: this.props.question.id,
			comment_text: this.state.comment_text
		}

		if (this.state.comment_text){
			questionFunctions('post', 'http://localhost:3001/comments', commentObj)
			.then(res_obj => {
				if (res_obj.errors) {
					this.setState({
						errors: res_obj.errors
					})
				} else {
					this.setState({
						showCommentText:false,
						showAllComments:true,
					})
					this.getComments()
				}
			})
		} else {
			alert("Please Enter A Comment")
		}
	}

	onClickNextQuestionFunctions = (event) => {
		this.props.nextQuestion(this.props.user_id)
		this.onClickTrafficFunctions(event)

		this.setState({ display: 'question' })
	}

	componentWillUnmount(){
		clearTimeout(this.headerTimeout)
		clearTimeout(this.questionTimeout)
		clearTimeout(this.choicesTimeout)
		clearTimeout(this.timerTimeout)
		clearInterval(this.startTimer)
		clearTimeout(this.answeredHeaderTimeout)
		clearTimeout(this.correctAnswerTimeout)
		clearTimeout(this.difficultyTimeout)
		clearTimeout(this.voteButtonsTimeout)
		clearTimeout(this.commentButtonTimeout)
		clearTimeout(this.showAnsweredButtons)
		clearTimeout(this.enableQuestionTimeout)
		clearTimeout(this.enableCommentTimeout)
		clearTimeout(this.enableAnsweredTimeout)
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
			page_name: 'question_display_engaged',
		}

		trafficFunctions('page', 'http://localhost:3001/pages', pageInfo)
	}

	render(){

		const blank = <></>

		const loading =
			<div className="loading_container">
				<div className="loading_animation_container">
					<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
				</div>
			</div>

		const question_buttons = <>
			<div className="div1">
				<button
					key={"answer_button1"}
					value={ this.state.answers[0] }
					className={this.state.enableQuestion ? "question_card_choices_button" : "question_card_choices_button_disabled" }
					name="answer_button"
					interaction="click"
					onClick={ this.state.enableQuestion ? this.onClickFunctions : this.onClickBlankFunctions }
				>
					{ this.state.answers[0] }
				</button>
				<button
					key={"answer_button2"}
					value={ this.state.answers[1] }
					className={this.state.enableQuestion ? "question_card_choices_button" : "question_card_choices_button_disabled" }
					name="answer_button"
					interaction="click"
					onClick={ this.state.enableQuestion ? this.onClickFunctions : this.onClickBlankFunctions }
				>
					{ this.state.answers[1] }
				</button>
			</div>
			<div className="div2">
				<button
					key={"answer_button3"}
					value={ this.state.answers[2] }
					className={this.state.enableQuestion ? "question_card_choices_button" : "question_card_choices_button_disabled" }
					name="answer_button"
					interaction="click"
					onClick={ this.state.enableQuestion ? this.onClickFunctions : this.onClickBlankFunctions }
				>
					{ this.state.answers[2] }
				</button>
				<button
					key={"answer_button4"}
					value={ this.state.answers[3] }
					className={this.state.enableQuestion ? "question_card_choices_button" : "question_card_choices_button_disabled" }
					name="answer_button"
					interaction="click"
					onClick={ this.state.enableQuestion ? this.onClickFunctions : this.onClickBlankFunctions }
				>
					{ this.state.answers[3] }
				</button>
			</div>
		</>

		const time = <><h1>{ this.state.time ? this.state.time : blank }</h1></>

		const question_text = <h2>{ this.props.question ? `${this.props.question.question_desc}`: blank }</h2>

		const question_difficulty = <h3>{ this.props.question ? `In ${ this.props.question.category }...` : blank }</h3>

		const question_choices = <>{ this.state.answers ? question_buttons : blank }</>

		const correct_answer_text = <>
			<h3>The correct answer was</h3>
			<h4>{ this.props.question.correct_answer }</h4>
		</>

		const difficulty_text = <>
			<h3>Question Difficulty</h3>
			<h4>{ this.props.question.difficulty }</h4>
		</>

		const rate_header = <h3>Rate this question</h3>

		const vote_header = <h3>Vote Totals</h3>

		const vote_for_question_buttons = [
			<button
				key={"up_vote_button"}
				className="up_vote_button"
				name="up_vote_button"
				interaction="click"
				onClick={ this.onClickUpVoteFunctions }
			>
				<img
					src={ up_vote }
					alt="up_vote"
					name="up_vote_img"
					interaction="click"
					onClick={ this.onClickUpVoteFunctions }
				/>
			</button>,
			<button
				key={"no_vote_button"}
				className="no_vote_button"
				name="no_vote_button"
				interaction="click"
				onClick={ this.onClickNoVoteFunctions }
			>
				<img
					src={ no_vote }
					alt="no_vote"
					name="no_vote_img"
					interaction="click"
					onClick={ this.onClickNoVoteFunctions }
				/>
			</button>,
			<button
				key={"down_vote_button"}
				className="down_vote_button"
				name="down_vote_button"
				interaction="click"
				onClick={ this.onClickDownVoteFunctions }
			>
				<img
				src={ down_vote }
				alt="down_vote"
				name="down_vote_img"
				interaction="click"
				onClick={ this.onClickDownVoteFunctions }
			/>
			</button>
		]

		const answered_header = <h3> { this.state.time === 0 ? this.outtaTime() : this.state.user_result } </h3>

		const correct_answer = <>{ this.state.showCorrectAnswer ? correct_answer_text : blank }</>

		const answer = <>{ this.state.user_result === 'Incorrect!' ? correct_answer : blank }</>

		const difficulty = <>{ this.state.showDifficulty ? difficulty_text : blank }</>

		const vote_total =
			<ul>
				<li><h5>Up Votes</h5> { this.state.votes.length > 0 ? this.calculateUpVotes() : blank }</li>
				<li><h5>No Votes</h5> { this.state.votes.length > 0 ? this.calculateNoVotes() : blank }</li>
				<li><h5>Down Votes</h5> { this.state.votes.length > 0 ? this.calculateDownVotes() : blank }</li>
			</ul>

		const comment_button =
			<button
				key={"comment_button"}
				name="comment_button"
				value="comment_button"
				interaction="click"
				className={ this.state.enableCommentButton ? "question_card_comment_button" : "question_card_comment_button_disabled" }
				onClick={ this.state.enableCommentButton ? this.onClickCommentFunctions : this.onClickBlankFunctions }
			>
				Leave a Comment
			</button>

		const comment_form =
			<form
				name="add_comment_form"
				interaction="submit"
				className="question_card_comment_form"
				onSubmit={ this.onSubmitCommentFunctions }
			>
				<textarea
					rows="5"
					id="add_comment"
					name="comment_text"
					placeholder="Add A Comment..."
					onChange={ this.onChangeComment }
					value={ this.state.comment_text }
				/>
				<div className="comment_button_container">
					<input
						type="submit"
						className="question_card_comment_button"
						value="Add Comment"
					/>
				</div>
			</form>

		const all_comments = this.state.comments.map(comment =>
			<QuestionDisplayComments
				key={comment.id}
				comment={comment}
			/>
		)

		const next_question_button =
			<button
				key={"next_question_button"}
				name="next_question_button"
				interaction="click"
				className={ this.state.enableAnsweredButton ? "question_card_next_question_button" : "question_card_next_question_button_disabled" }
				onClick={ this.state.enableAnsweredButton ? this.onClickNextQuestionFunctions : this.onClickBlankFunctions }
			>
				Next Question
			</button>

		const question_card =
			<div className="question_card">
				<div className={ !this.state.showTimer ? "blank" : "question_card_timer" } >
					<h2>Time Left</h2>
					{ this.state.showTimer ? time : blank }
				</div>
				<div className={ !this.state.showHeader ? "blank" : "question_card_header" }>
					{ this.state.showHeader ? question_difficulty : blank }
				</div>
				<div className={ !this.state.showQuestion ? "blank" : "question_card_text" }>
					{ this.state.showQuestion ? question_text : blank }
				</div>
				<div className={ !this.state.showChoices ? "blank" : "question_card_choices" }>
					{ this.state.showChoices ? question_choices : blank }
				</div>
			</div>

		const displayQuestion = this.state.showTimer ? question_card : loading

		const DisplayAnswer =
			<div className="question_card">
				<div className={ this.state.showAnsweredHeader ? "question_card_answer_header" : "blank" }>
					{ this.state.showAnsweredHeader ? answered_header : blank }
				</div>
				<div className={ this.state.showCorrectAnswer ? "question_card_correct_answer" : "blank" }>
					{ this.state.showCorrectAnswer ? answer : blank }
				</div>
				<div className={ this.state.showDifficulty ? "question_card_difficulty" : "blank" }>
					{ this.state.showDifficulty ? difficulty : blank }
				</div>

				<div className={ this.state.showVoteButtons ? "question_card_vote" : "blank" }>
					<div className={ this.state.showVoteButtons ? "question_card_vote_header" : "blank" }>
						{ this.state.showVoteButtons ? rate_header : blank }
					</div>
					<div className={ this.state.showVoteButtons ? "question_card_vote_buttons_container" : "blank" }>
						{ this.state.showVoteButtons ? vote_for_question_buttons : blank }
					</div>
				</div>

				<div className={ this.state.voted ? "question_card_voted" : "blank" }>
					<div className={ this.state.voted ? "question_card_voted_header" : "blank" }>
						{ this.state.voted ? vote_header : blank }
					</div>

					<div className={ this.state.voted ? "question_card_voted_totals" : "blank" }>
						{ this.state.voted ? vote_total : blank }
					</div>
				</div>

				<div className={ this.state.showCommentButton || this.state.showCommentText || this.state.showAllComments ? "question_card_comment": "blank"}>
					<div className={ this.state.showCommentButton ? "question_card_comment_button_container": "blank"}>
						{ this.state.showCommentButton ? comment_button : blank }
					</div>
					<div className={ this.state.showCommentText ? "question_card_comment_text": "blank"}>
						{ this.state.showCommentText ? comment_form : blank }
					</div>
					<div className={ this.state.showAllComments ? "question_card_all_comments": "blank"}>
						{ this.state.showAllComments ? all_comments : blank }
					</div>
				</div>

				<div className={ this.state.showAnsweredButton ? "question_card_next_question_button_container": "blank"}>
					{ this.state.showAnsweredButton ? next_question_button : blank }
				</div>
			</div>

		return(
			<>
				{
					(() => {
						switch(this.state.display) {
							case 'question': return displayQuestion;
							case 'answered': return DisplayAnswer;
							default: return blank;
						}
					})()
				}
			</>
		)
	}
}
