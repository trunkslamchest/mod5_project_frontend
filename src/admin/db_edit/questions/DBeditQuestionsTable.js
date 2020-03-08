import React from 'react'

const DBeditQuestionsTable = (props) => {

	const onClickTableRowFunctions = () => {
		props.displaySwitchToQuestionInfo(props.question.attributes.question)
	}

	const question = props.question.attributes.question

	const DBedit_table =
		<tr onClick={ onClickTableRowFunctions } className="DBedit_sub_row">
			<td>{question.id}</td>
			<td>{question.question_desc}</td>
			<td>{question.difficulty}</td>
			<td>{question.category}</td>
			<td>{question.correct_answer}</td>
			<td>
				{question.incorrect_answers[0]}
				<br />
				{question.incorrect_answers[1]}
				<br />
				{question.incorrect_answers[2]}
			</td>
		</tr>
	return(
		<>
			{ DBedit_table }
		</>
	)
}

export default DBeditQuestionsTable