import React from 'react'
// import ReactTimeout from 'react-timeout'

// import QuickPlayVotes from './QuickPlayVotes'
import QuickPlayDisplayComments from './QuickPlayDisplayComments.js'

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

export default class QuickPlayDisplay extends React.Component{

	state = {
		answers: [],
		user_answer: '',
		user_result: '',
		time: 10.01,
		stopTime: false,
		getTime: false,
		voted: false,
		votes: [],
		display: 'question',
		showHeader: null,
		showQuestion: null,
		showChoices: null,
		showTimer: null,
		startTimer: null,
		showAnsweredHeader: null,
		showCorrectAnswer: null,
		showVoteButtons: null,
		showCommentButton: null,
		showCommentText:null,
		showAllComments:null,
		comments: [],
		showAnsweredButtons: null,
	}

	componentDidMount(){
		this.randomizeAnswerOrder(this.props.question)
		this.timerFunctions()
		this.timerTimeout = setTimeout(() => { this.setState({ showTimer: true })}, 1000)
		this.startTimer = setTimeout(() => { this.timerInterval = setInterval(this.timerFunctions, 10)}, 4000)
		this.headerTimeout = setTimeout(() => { this.setState({ showHeader: true })}, 2000)
		this.questionTimeout = setTimeout(() => { this.setState({ showQuestion: true })}, 3000)
		this.choicesTimeout = setTimeout(() => { this.setState({ showChoices: true })}, 4000)
	}

	displayAnswered = () => {
		this.answeredHeaderTimeout = setTimeout(() => { this.setState({ showAnsweredHeader: true })}, 1000)
		this.correctAnswerTimeout = setTimeout(() => { this.setState({ showCorrectAnswer: true })}, 2000)
		this.voteButtonsTimeout = setTimeout(() => { this.setState({ showVoteButtons: true })}, 3000)
		this.commentButtonTimeout = setTimeout(() => { this.setState({ showCommentButton: true })}, 4000)
		this.answeredButtonsTimeout = setTimeout(() => { this.setState({ showAnsweredButtons: true })}, 5000)
	}

	onClickSelectAnswerFunctions = (event) => {
		event.persist()
		this.stopTime()
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
					user_result: "correct",
					user_time: this.state.time
				})
			})
			.then(response => response.json())
			.then(res_obj => {
				this.setState({
					user_answer: event.target.value,
					user_result: 'Correct!',
					display: 'answered',
				})
			})
			this.displayAnswered()
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
					user_result: "incorrect",
					user_time: this.state.time
				})
			})
			.then(response => response.json())
			.then(res_obj => {
				this.setState({
					user_answer: event.target.value,
					user_result: 'Incorrect!',
					display: 'answered'
				})
			})
			this.displayAnswered()
		}
	}

	outtaTime = () => {
		fetch("http://localhost:3001/answers", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				user_id: this.props.user_id,
				question_id: this.props.question.id,
				user_answer: 'No Answer',
				user_result: "Outta Time",
				user_time: "0.0"
			})
		})
		.then(response => response.json())
		.then(res_obj => {
			this.setState({
				user_answer: 'No Answer',
				user_result: 'Outta Time!',
				display: 'answered',
				time: "-1"
			})
		})
		this.displayAnswered()
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

	onClickFunctions = (event) => {
		this.onClickSelectAnswerFunctions(event)
		this.stopTime()
	}

	stopTime = (time) => {
		this.setState({
			time: time,
			stopTime: true
		})
	}

	getTime = (time) => {
		this.setState({
			time: time
		})
	}

	timerFunctions = () => {

		if (this.state.stopTime){
			this.setState({
				time: this.state.time
			}, this.getTime(this.state.time))
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
		fetch(`http://localhost:3001/questions/${this.props.question.id}`)
		.then(res => res.json())
		.then(res_obj =>
			this.setState({
				votes: res_obj.data.attributes.votes.map(vote => vote.vote_num)
			})
		)
	}

	onClickUpVoteFunctions = (event) => {
		event.persist()
		fetch("http://localhost:3001/votes", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				user_id: this.props.user_id,
				question_id: this.props.question.id,
				vote_num: 1
			})
		})
		.then(response => response.json())
		.then(res_obj => {
			this.setState({
				voted: true,
				showVoteButtons: false
			})
			this.getVotes()
		})
	}

	onClickNoVoteFunctions = (event) => {
		event.persist()
		fetch("http://localhost:3001/votes", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				user_id: this.props.user_id,
				question_id: this.props.question.id,
				vote_num: 0
			})
		})
		.then(response => response.json())
		.then(res_obj => {
			this.setState({
				voted: true,
				showVoteButtons: false
			})
			this.getVotes()
		})
	}

	onClickDownVoteFunctions = (event) => {
		event.persist()
		fetch("http://localhost:3001/votes", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				user_id: this.props.user_id,
				question_id: this.props.question.id,
				vote_num: -1
			})
		})
		.then(response => response.json())
		.then(res_obj => {
			this.setState({
				voted: true,
				showVoteButtons: false
			})
			this.getVotes()
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
		fetch(`http://localhost:3001/questions/${this.props.question.id}`)
		.then(res => res.json())
		.then(res_obj =>
			this.setState({
				comments: res_obj.data.attributes.comments.map(comment => comment)
			})
		)
	}


	onClickCommentFunctions = (event) => {
		event.persist()
			this.setState({
				showCommentButton: false,
				showCommentText: true,
			})
	}

	onChangeComment = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	onSubmitCommentFunctions = (event) => {
		this.addCommentSubmitted(event)
	}

	addCommentSubmitted = (event) => {
		event.persist()
		event.preventDefault()

		fetch("http://localhost:3001/comments", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				user_id: this.props.user_id,
				user_name: this.props.user_name,
				question_id: this.props.question.id,
				comment_text: this.state.comment_text
			})
		})
		.then(response => response.json())
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
	}

	onClickNextQuestionFunctions = () => {
		this.props.nextQuestion(this.props.user_id)
		this.setState({
			display: 'question'
		})
	}

	componentWillUnmount(){
		clearTimeout(this.headerTimeout)
		clearTimeout(this.questionTimeout)
		clearTimeout(this.choicesTimeout)
		clearTimeout(this.timerTimeout)
		clearInterval(this.startTimer)
		clearTimeout(this.answeredHeaderTimeout)
		clearTimeout(this.correctAnswerTimeout)
		clearTimeout(this.voteButtonsTimeout)
		clearTimeout(this.commentButtonTimeout)
		clearTimeout(this.showAnsweredButtons)
	}

	componentWillDidmount(){
		clearTimeout(this.headerTimeout)
		clearTimeout(this.questionTimeout)
		clearTimeout(this.choicesTimeout)
		clearTimeout(this.timerTimeout)
		clearInterval(this.startTimer)
		clearTimeout(this.answeredHeaderTimeout)
		clearTimeout(this.correctAnswerTimeout)
		clearTimeout(this.voteButtonsTimeout)
		clearTimeout(this.commentButtonTimeout)
		clearTimeout(this.showAnsweredButtons)
	}

	render(){

		// console.log(this.state)

		const question_buttons = [
			<button
				key={"answer_button1"}
				value={ this.state.answers[0] }
				className="alt_button"
				onClick={ this.onClickFunctions }
			>
				{ this.state.answers[0] }
			</button>,
			<button
				key={"answer_button2"}
				value={ this.state.answers[1] }
				className="alt_button"
				onClick={ this.onClickFunctions }
			>
				{ this.state.answers[1] }
			</button>,
			<button
				key={"answer_button3"}
				value={ this.state.answers[2] }
				className="alt_button"
				onClick={ this.onClickFunctions }
			>
				{ this.state.answers[2] }
			</button>,
			<button
				key={"answer_button4"}
				value={ this.state.answers[3] }
				className="alt_button"
				onClick={ this.onClickFunctions }
			>
				{ this.state.answers[3] }
			</button>
		]

		const correct_answer_text =
		<>
			<h3>The correct answer was:</h3>
			<p>{ this.props.question.correct_answer }</p>
		</>

		const vote_for_question_buttons = [
			<button
				key={"up_vote_button"}
				className="up_vote_button"
				onClick={ this.onClickUpVoteFunctions }
			>
				+
			</button>,
			<button
				key={"no_vote_button"}
				className="no_vote_button"
				onClick={ this.onClickNoVoteFunctions }
			>
				o
			</button>,
			<button
			key={"down_vote_button"}
			className="down_vote_button"
			onClick={ this.onClickDownVoteFunctions }
			>
				-
			</button>
		]

		const blank = <></>

		const header = <h3> { this.props.question ? `In ${ this.props.question.category }...` : blank }</h3>

		const question_desc = <h2>{ this.props.question ? `${this.props.question.question_desc}`: blank }</h2>

		const question_choices = <>{ this.state.answers ? question_buttons : blank }</>

		const time = <>{ this.state.time ? this.state.time : blank }</>

		const answered_header = <h3> { this.state.time === 0 ? this.outtaTime() : this.state.user_result } </h3>

		const correct_answer = <>{ this.state.showCorrectAnswer ? correct_answer_text : blank }</>

		const answer = <>{ this.state.user_result === 'Incorrect!' ? correct_answer : blank }</>

		const vote_total =
			<ul>
				<li>Up Votes: { this.state.votes.length > 0 ? this.calculateUpVotes() : blank }</li>
				<li>No Votes: { this.state.votes.length > 0 ?this.calculateNoVotes() : blank }</li>
				<li>Down Votes: { this.state.votes.length > 0 ? this.calculateDownVotes() : blank }</li>
			</ul>

		const comment_button =
		<div className="comment_button_container">
			<button
				key={"comment_button"}
				name="comment_button_name"
				value="comment_button_value"
				className="comment_button"
				onClick={ this.onClickCommentFunctions }
			>
				Comment
			</button>
		</div>

		const comment_form =
		<form
			name="add_comment_form"
			interaction="submit"
			className="comment_form"
			onSubmit={ this.onSubmitCommentFunctions }
		>
			{/* <div className="comment_div"> */}
				<textarea
					rows="5"
					id="add_comment"
					name="comment_text"
					placeholder="Add A Comment..."
					onChange={ this.onChangeComment }
					value={ this.state.comment_text }
				/>
			{/* </div> */}
			<div className="comment_button_container">
				<input
					className="comment_button"
					type="submit"
					value="Add Comment"
				/>
			</div>
		</form>

		const all_comments = this.state.comments.map(comment =>
		<QuickPlayDisplayComments
			key={comment.id}
			comment={comment}
		/>
		)

		const next_question_button =
			<button
				key={"next_question_button"}
				className="next_question_button"
				onClick={ this.onClickNextQuestionFunctions }
			>
				Next Question
			</button>

		const displayQuestion =
			<div className="question_card">
				<div className="question_time">
					{ this.state.showTimer ? time : ""}
				</div>
				<div className="question_header">
					{ this.state.showHeader ? header : ""}
				</div>
				<div className="question_desc">
					{ this.state.showQuestion ? question_desc : ""}
				</div>
				<div className="question_choices">
					{ this.state.showChoices ? question_choices : ""}
				</div>
			</div>

		const DisplayAnswer =
			<div className="question_card">
				<div className="question_header">
					{ this.state.showAnsweredHeader ? answered_header : ""}
				</div>
				<div className="question_correct_answer">
					{ this.state.showCorrectAnswer ? answer : ""}
				</div>
				<div className="question_vote">
					{ this.state.showVoteButtons ? vote_for_question_buttons : ""}
					{ this.state.voted ? vote_total : "" }
				</div>
				<div className="question_comments">
					{ this.state.showCommentButton ? comment_button : ""}
					{ this.state.showCommentText ? comment_form : "" }
					{ this.state.showAllComments ? all_comments : "" }
				</div>
				<div className="question_next_question_button_container">
					{ this.state.showAnsweredButtons ? next_question_button : "" }
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
