import React from 'react'

import {
	//  Link
	} from 'react-router-dom'

export default class DashboardAnswersCard extends React.Component{

	render(){

		const time = 10.00 - (parseFloat(this.props.answer.user_time))

		const convertedTime = time.toFixed(2)

		return(
			<div className="dashboard_answer_card">
				<ul>
					<li>{ this.props.question.question_desc }</li>
					<li>{ this.props.question.correct_answer }</li>
					<br />
					<li>{ this.props.question.category }</li>
					<li>{ this.props.question.difficulty }</li>
				</ul>
				<ul>
					<li>Your Answer</li>
					<li>{ this.props.answer.user_answer }</li>
					<br />
					<li>Your Time</li>
					<li>{ convertedTime === 10.00.toFixed(2) ? "No Time" : `${convertedTime} seconds` }</li>
				</ul>
			</div>
		)
	}
}