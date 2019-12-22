import React from 'react'

export default class DBeditQuestionsTable extends React.Component{

	onClickTableRowFunctions = () => {
		this.props.displaySwitchToQuestionInfo(this.props.question.attributes)
	}

	render(){

		const question = this.props.question.attributes

		const DBedit_table =
			<tr onClick={ this.onClickTableRowFunctions } className="DBedit_sub_row">
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
}