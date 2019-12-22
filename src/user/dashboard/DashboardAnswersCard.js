import React from 'react'

import {
	//  Link
	} from 'react-router-dom'

export default class DashboardAnswersCard extends React.Component{

	render(){
		return(
			<>
				<br />
					Category: { this.props.question.category }
				<br />
					Difficulty: { this.props.question.difficulty }
				<br />
					Question: { this.props.question.question_desc }
				<br />
					Correct Answer: { this.props.question.correct_answer }
				<br />
					Your Answer: { this.props.answer.user_answer }
				<br />
				<br />
					<hr />
			</>
		)
	}
}