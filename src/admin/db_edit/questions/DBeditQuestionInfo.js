import React from 'react'

import '../DBedit.css'

export default class DBeditQuestionInfo extends React.Component{

	componentDidMount(){}

	editQuestionFunctions = () => {
		this.props.displaySwitchtoEdit(this.props.question)
	}

	deleteQuestionFunctions = () => {
		this.props.displaySwitchToDelete(this.props.question)
	}

	render(){
		// console.log("edit user info", this.props)
		const question = this.props.question

		const buttons = [
			<button className="alt_button" value="Edit Question" onClick={ this.editQuestionFunctions }>
				Edit Question
			</button>,
			<button className="alt_button" value="Delete Question" onClick={ this.deleteQuestionFunctions }>
				Delete Question
			</button>
		]

		const question_info_list =
			<ul>
				<label htmlFor="question_id">ID</label>
				<li>{question.id}</li>
			<br />
				<label htmlFor="question_id">Question</label>
				<li>{question.question_desc}</li>
			<br />
				<label htmlFor="question_id">Difficulty</label>
				<li>{question.difficulty}</li>
			<br />
				<label htmlFor="question_id">Category</label>
				<li>{question.category}</li>
			<br />
				<label htmlFor="question_id">Correct Answer</label>
				<li>{question.correct_answer}</li>
			<br />
				<label htmlFor="question_id">Incorrect Answers</label>
				<li>{question.incorrect_answers[0]}</li>
				<li>{question.incorrect_answers[1]}</li>
				<li>{question.incorrect_answers[2]}</li>
			</ul>

		const question_info = [
			question_info_list,
			// buttons,
		]

		return(
			<div className="DBedit_default_wrapper">
				<h3>Question Info</h3>
				{ question_info }
				<hr />
				<div className="DBedit_default_buttons_container">
					<button className="alt_button" value="Edit Question" onClick={ this.editQuestionFunctions }>
						Edit Question
					</button>
					<button className="alt_button" value="Delete Question" onClick={ this.deleteQuestionFunctions }>
						Delete Question
					</button>
				</div>
			</div>
		)
	}
}