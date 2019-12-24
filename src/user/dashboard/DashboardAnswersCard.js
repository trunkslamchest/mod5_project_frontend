import React from 'react'

import {
	//  Link
	} from 'react-router-dom'

export default class DashboardAnswersCard extends React.Component{

	render(){

		const time = 10.00 - (parseFloat(this.props.answer.user_time))

		const convertedTime = time.toFixed(2)

		return(
			<>
				<br />
				<li>Category: { this.props.question.category }</li>
				<li>Difficulty: { this.props.question.difficulty }</li>
				<li>Question: { this.props.question.question_desc }</li>
				<li>Correct Answer: { this.props.question.correct_answer }</li>
				<li>Your Answer: { this.props.answer.user_answer }</li>
				<li>Time: { convertedTime === 10.00.toFixed(2) ? "No Time" : `${convertedTime} seconds` }</li>
				<br />
				<hr />
			</>
		)
	}
}