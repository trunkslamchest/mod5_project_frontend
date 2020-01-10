import React from 'react'

export default class DashboardAnswersCard extends React.Component{

	render(){

		const time = 10.00 - (parseFloat(this.props.answer.user_time))

		const convertedTime = time.toFixed(2)

		return(
			<div className="answer_card">
				<div className={this.props.question.correct_answer === this.props.answer.user_answer ? "answer_card_header_correct" : "answer_card_header_incorrect"}>
					<h3>{ this.props.question.question_desc }</h3>
				</div>

				<ul>
					<li><h4>Category</h4>{ this.props.question.category }</li>
					<li><h4>Difficulty</h4>{ this.props.question.difficulty }</li>
				</ul>

				<ul>
					<li><h4>Correct Answer</h4>{ this.props.question.correct_answer }</li>
					<li><h4>Your Answer</h4>{ this.props.answer.user_answer }</li>
				</ul>

				<ul>
					<li><h4>Your Time</h4>{ convertedTime === 10.00.toFixed(2) ? "No Time" : `${convertedTime} seconds` }</li>
				</ul>
			</div>
		)
	}
}