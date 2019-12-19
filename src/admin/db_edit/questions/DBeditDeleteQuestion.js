import React from 'react'

import '../DBedit.css'

export default class DBeditDeleteQuestion extends React.Component {

	state = {
	}

	onClickYes = () => {
		let question = this.props.question
		fetch(`http://localhost:3001/questions/${question.id}`, {
			method: "DELETE"
		})
		.then(res_obj => {
			if (res_obj.errors) {
				this.setState({
					errors: res_obj.errors
				})
			} else {
				this.props.displaySwitchToIndex()
			}
		})
	}

	onClickNo = () => {
		let question = this.props.question
		this.props.displaySwitchToQuestionInfo(question)
	}

	render(){

		console.log(this.props.question.id)

		const confirm_buttons = [
			<button
				key={"b1"}
				name="delete_question_form"
				interaction="submit"
				className="alt_button"
				onClick={ this.onClickYes }
			>
				Yes
			</button>,
			<button
				key={"b2"}
				name="delete_question_form"
				interaction="cancel"
				className="alt_button"
				onClick={ this.onClickNo }
			>
				No
			</button>
		]

		const confirm = [
			<div className="DBedit_default_wrapper">
				<h3>Are you sure you want to delete this question?</h3>
				<div className="delete_profile_buttons_container">
					{ confirm_buttons }
				</div>
			</div>
		]

		return(
			<>
				{
					(!!this.state.errors) ? (
						<div className="default_error_report">
							{
								this.state.errors.map( error =>
									<div className="default_error_item">
										{ error }
									</div>
								)
							}
						</div>
					)
					:
					(
						confirm
					)
				}
			</>
		)
	}
}