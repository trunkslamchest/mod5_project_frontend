import React from 'react'

export default class DBeditAddUser extends React.Component {

	state = {
		add_question_desc: "",
		add_difficulty: "",
		add_category: "",
		add_correct_answer: "",
		add_incorrect_answer1: "",
		add_incorrect_answer2: "",
		add_incorrect_answer3: "",
		errors: []
	}

	componentDidMount(){
	}

	onChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	onSubmitaddQuestionFunctions = (event) => {
		this.addQuestionSubmitted(event)
	}

	addQuestionSubmitted = (event) => {
		event.persist()
		event.preventDefault()

		let incorrect_answers = [ this.state.add_incorrect_answer1, this.state.add_incorrect_answer2, this.state.add_incorrect_answer3 ]

		fetch("http://localhost:3001/questions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				question_desc: this.state.add_question_desc,
				difficulty: this.state.add_difficulty,
				category: this.state.add_category,
				correct_answer: this.state.add_correct_answer,
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
				this.props.displaySwitchToIndex(res_obj)
			}
		})
	}

	onResetFunctions = (event) => {
		event.persist()
		event.preventDefault()
		this.setState({
			add_question_desc: "",
			add_difficulty: "",
			add_category: "",
			add_correct_answer: "",
			add_incorrect_answer1: "",
			add_incorrect_answer2: "",
			add_incorrect_answer3: "",
		})
	}

	render(){

		const add_question_form =
			<form
				name="add_question_form"
				interaction="submit"
				className="DBedit_edit_form"
				onSubmit={ this.onSubmitaddQuestionFunctions }
			>
				<div className="DBedit_basic_div">
					<label htmlFor="add_question_desc">Question</label>
					<br />
					<textarea
						rows="2"
						id="add_question_desc"
						name="add_question_desc"
						placeholder="Question..."
						onChange={ this.onChange }
						value={ this.state.add_question_desc }
					/>
				</div>
				<br />
				<div className="DBedit_basic_div">
					<label htmlFor="add_difficulty">Difficulty</label>
					<br />
					<select
						id="add_difficulty"
						name="add_difficulty"
						onChange={ this.onChange }
						value={ this.state.add_difficulty }
					>
						<option value="">Select...</option>
						<option value="Easy">Easy</option>
						<option value="Medium">Medium</option>
						<option value="Hard">Hard</option>
					</select>
				</div>
				<br />
				<div className="DBedit_basic_div">
					<label htmlFor="add_category">Category</label>
					<br />
					<select
						id="add_category"
						name="add_category"
						onChange={ this.onChange }
						value={ this.state.add_category }
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
					<label htmlFor="add_name">Correct Answer</label>
					<br />
					<input
						id="add_correct_answer"
						type="text"
						name="add_correct_answer"
						placeholder="Correct Answer..."
						onChange={ this.onChange }
						value={ this.state.add_correct_answer }
					/>
				</div>
				<br />
				<div className="DBedit_basic_div">
					<label htmlFor="add_name">Incorrect Answers</label>
					<br />
					<input
						id="add_incorrect_answer1"
						type="text"
						name="add_incorrect_answer1"
						placeholder="First Incorrect Answer..."
						onChange={ this.onChange }
						value={ this.state.add_incorrect_answer1 }
					/>
					<br />
					<input
						id="add_incorrect_answer2"
						type="text"
						name="add_incorrect_answer2"
						placeholder="Second Incorrect Answer..."
						onChange={ this.onChange }
						value={ this.state.add_incorrect_answer2 }
					/>
					<br />
					<input
						id="add_incorrect_answer3"
						type="text"
						name="add_incorrect_answer3"
						placeholder="Third Incorrect Answer..."
						onChange={ this.onChange }
						value={ this.state.add_incorrect_answer3 }
					/>
				</div>
				<hr />
				<div className="default_centered_buttons_container">
					<input
						className="alt_button"
						type="submit"
						value="Add New Question"
					/>
					<button
						name="add_form"
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
				<h3>Add New User</h3>
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
				{ add_question_form }
			</div>
		)
	}
}