import React from 'react'

const DashboardAnswersCard = (props) => {

		const time = 10.00 - (parseFloat(props.answer.user_time))

		const convertedTime = time.toFixed(2)

		return(
			<div className="answer_card">
				<div className={props.question.correct_answer === props.answer.user_answer ? "answer_card_header_correct" : "answer_card_header_incorrect"}>
					<h3>{ props.question.question_desc }</h3>
				</div>

				<ul>
					<li><h4>Category</h4>{ props.question.category }</li>
					<li><h4>Difficulty</h4>{ props.question.difficulty }</li>
				</ul>

				<ul>
					<li><h4>Correct Answer</h4>{ props.question.correct_answer }</li>
					<li><h4>Your Answer</h4>{ props.answer.user_answer }</li>
				</ul>

				<ul>
					<li><h4>Your Time</h4>{ convertedTime === 10.00.toFixed(2) ? "No Time" : `${convertedTime} seconds` }</li>
				</ul>
			</div>
		)
}

export default DashboardAnswersCard