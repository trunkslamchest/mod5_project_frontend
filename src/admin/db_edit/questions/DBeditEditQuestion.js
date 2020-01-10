import React from 'react'

export default class DBeditEditUser extends React.Component {

	state = {
		edit_question_desc: "",
		edit_difficulty: "",
		edit_category: "",
		edit_correct_answer: "",
		edit_incorrect_answer1: "",
		edit_incorrect_answer2: "",
		edit_incorrect_answer3: "",
		errors: []
	}

	componentDidMount(){
		if (this.props.question.id) {
			let question = this.props.question
			this.setState({
				edit_question_desc: question.question_desc,
				edit_difficulty: question.difficulty,
				edit_category: question.category,
				edit_correct_answer: question.correct_answer,
				edit_incorrect_answer1: question.incorrect_answers[0],
				edit_incorrect_answer2: question.incorrect_answers[1],
				edit_incorrect_answer3: question.incorrect_answers[2],
			})
		}
	}

	onChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	onSubmitEditQuestionFunctions = (event) => {
		this.EditQuestionSubmitted(event)
	}

	EditQuestionSubmitted = (event) => {
		event.persist()
		event.preventDefault()

		let question = this.props.question
		let incorrect_answers = [ this.state.edit_incorrect_answer1, this.state.edit_incorrect_answer2, this.state.edit_incorrect_answer3 ]

		fetch(`http://localhost:3001/questions/${question.id}`, {
			method: "PATCH",
			headers: {
				"content-type":"application/json"
			},
			body: JSON.stringify({
				question_desc: this.state.edit_question_desc,
				difficulty: this.state.edit_difficulty,
				category: this.state.edit_category,
				correct_answer: this.state.edit_correct_answer,
				incorrect_answers: incorrect_answers,
			})
		})
	    .then(response => response.json())
	    .then(res_obj => {
			if (res_obj.errors) {
				this.setState({
					errors: res_obj.errors
				})
			} else {
				this.props.displaySwitchToQuestionInfo(res_obj)
				this.props.updateIndex(res_obj)
			}
		})
	}

	onResetFunctions = (event) => {
		event.persist()
		event.preventDefault()

		let question = this.props.question

		this.setState({
			edit_question_desc: question.question_desc,
			edit_difficulty: question.difficulty,
			edit_category: question.category,
			edit_correct_answer: question.correct_answer,
			edit_incorrect_answer1: question.incorrect_answer1,
			edit_incorrect_answer2: question.incorrect_answer2,
			edit_incorrect_answer3: question.incorrect_answer3,
		})
	}

	render(){

		const edit_question_form =
			<form
				name="edit_question_form"
				interaction="submit"
				className="DBedit_edit_form"
				onSubmit={ this.onSubmitEditQuestionFunctions }
			>
				<div className="DBedit_basic_div">
					<label htmlFor="edit_quesion_desc">Question</label>
					<br />
					<textarea
						rows="2"
						id="edit_quesion_desc"
						name="edit_question_desc"
						placeholder="Question..."
						onChange={ this.onChange }
						value={ this.state.edit_question_desc }
					/>
				</div>
				<br />
				<div className="DBedit_basic_div">
					<label htmlFor="edit_difficulty">Difficulty</label>
					<br />
					<select
						id="edit_difficulty"
						name="edit_difficulty"
						onChange={ this.onChange }
						value={ this.state.edit_difficulty }
					>
						<option className="test option" value="">Select...</option>
						<option value="Easy">Easy</option>
						<option value="Medium">Medium</option>
						<option value="Hard">Hard</option>
					</select>
				</div>
				<br />
				<div className="DBedit_basic_div">
						<label htmlFor="edit_category">Category</label>
						<br />
						<select
							id="edit_category"
							name="edit_category"
							onChange={ this.onChange }
							value={ this.state.edit_category }
						>
							<option value="">Select...</option>
							<option value="Anime">Anime</option>
							<option value="Books">Books</option>
							<option value="Computers">Computers</option>
							<option value="Film">Film</option>
							<option value="General Knowledge">General Knowledge</option>
							<option value="Geography">Geography</option>
							<option value="History">History</option>
							<option value="Music">Music</option>
							<option value="Mythology">Mythology</option>
							<option value="Nature">Nature</option>
							<option value="Politics">Politics</option>
							<option value="Science">Science</option>
							<option value="Sports">Sports</option>
							<option value="Technology">Technology</option>
							<option value="Television">Television</option>
							<option value="Theatre">Theatre</option>
							<option value="Vehicles">Vehicles</option>
							<option value="Video Games">Video Games</option>
						</select>
						<br />
					</div>
				<br />
				<div className="DBedit_basic_div">
					<label htmlFor="edit_correct_answer">Correct Answer</label>
					<br />
					<input
						id="edit_correct_answer"
						type="text"
						name="edit_correct_answer"
						placeholder="Correct Answer..."
						onChange={ this.onChange }
						value={ this.state.edit_correct_answer }
					/>
				</div>
				<br />
				<div className="DBedit_basic_div">
					<label htmlFor="edit_incorrect_answers">Incorrect Answers</label>
					<br />
					<input
						id="edit_incorrect_answer1"
						type="text"
						name="edit_incorrect_answer1"
						placeholder="First Incorrect Answer..."
						onChange={ this.onChange }
						value={ this.state.edit_incorrect_answer1 }
					/>
					<br />
					<input
						id="edit_incorrect_answer2"
						type="text"
						name="edit_incorrect_answer2"
						placeholder="Second Incorrect Answer..."
						onChange={ this.onChange }
						value={ this.state.edit_incorrect_answer2 }
					/>
					<br />
					<input
						id="edit_incorrect_answer3"
						type="text"
						name="edit_incorrect_answer3"
						placeholder="Third Incorrect Answer..."
						onChange={ this.onChange }
						value={ this.state.edit_incorrect_answer3 }
					/>
				</div>
				<hr />
				<div className="DBedit_default_buttons_container">
					<input
						className="alt_button"
						type="submit"
						value="Submit Changes"
					/>
					<button
						name="edit_question_form"
						interaction="reset"
						className="alt_button"
						onClick={ this.onResetFunctions }
					>
						Reset
					</button>
				</div>
			</form>

		return (
			<div className="DBedit_default_wrapper">
				<h3>Edit Question</h3>
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
				{ edit_question_form }
			</div>
		)
	}
}