import React from 'react'

const DBeditQuestionInfo = (props) => {

	const editQuestionFunctions = () => {
		props.displaySwitchtoEdit(props.question)
	}

	const deleteQuestionFunctions = () => {
		props.displaySwitchToDelete(props.question)
	}

	const question = props.question

	const buttons = [
		<button
			key={"DBe_edit_question"}
			className="alt_button"
			value="Edit Question"
			onClick={ editQuestionFunctions }
		>
			Edit Question
		</button>,
		<button
			key={"DBe_delete_question"}
			className="alt_button"
			value="Delete Question"
			onClick={ deleteQuestionFunctions }
		>
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

	return(
		<div className="DBedit_default_wrapper">
			<h3>Question Info</h3>
			{ question_info_list }
			<hr />
			<div className="DBedit_default_buttons_container">
				{ buttons }
			</div>
		</div>
	)

}

export default DBeditQuestionInfo