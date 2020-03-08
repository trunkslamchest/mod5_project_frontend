import React from 'react'

export default class DBeditDeleteQuestion extends React.Component {

	state = {
		errors: false
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

		const confirm_buttons = [
			<button
				key={"DBe_edit_question_yes"}
				name="delete_question_form"
				interaction="submit"
				className="alt_button"
				onClick={ this.onClickYes }
			>
				Yes
			</button>,
			<button
				key={"DBe_edit_question_no"}
				name="delete_question_form"
				interaction="cancel"
				className="alt_button"
				onClick={ this.onClickNo }
			>
				No
			</button>
		]

		return(
			<div className="DBedit_default_wrapper">
				<h3>Are you sure you want to delete this question?</h3>
				{
					(!!this.state.errors) ?
						( <div className="default_error_report">
								{ this.state.errors.map( error =>
									<div className="default_error_item">
										{ error }
									</div>
								)}
						  </div> )
					:
						( "" )
				}
				<div className="default_centered_buttons_container">
					{ confirm_buttons }
				</div>
			</div>
		)
	}
}