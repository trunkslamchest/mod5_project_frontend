import React from 'react'

import DashboardAnswersCard from './DashboardAnswersCard'

import {
        //  Link
        } from 'react-router-dom'

export default class DashboardAnswers extends React.Component{

	state = {
		questions: null,
		answers: null
	}

	componentDidMount(){
		this.onMountAsync()
	}

	UNSAFE_componentWillReceiveProps(nextProps){
	}

	onMountAsync = async () => {
		try {
			let props = await this.props
			await this.props.user_id;
			// await this.onPageLoadFunctions(props)
			this.getAnswers(props)
		} catch(errors) {
			console.log(errors);
		}
	}

	getAnswers = (props) => {
		// console.log(props)
		fetch(`http://localhost:3001/users/${props.user_id}`)
		.then(res => res.json())
		.then(res_obj =>
			this.setState({
				answers: res_obj.data.attributes.answers,
				questions: res_obj.data.attributes.questions
			})
		)
	}

	// distributeCombineQuestionsAnswers = () => {
	// 	this.state.questions.map(question =>
	// 		this.state.answers.map(answer =>
	// 			// console.log(question.id === answer.question_id)
	// 			(question.id === answer.question_id) ?
	// 				<DashboardAnswersCard
	// 					key={answer.id}
	// 					question={question}
	// 					answer={answer}
	// 				/>
	// 			:
	// 				""
	// 		)
	// 	)
	// }

	onPageLoadFunctions = (props) => {
		this.props.update_page_data({
			user_id: props.user_id,
			page_name: "user_dashboard_answers"
		})
	}

	render(){

		const distributeCombineQuestionsAnswers =
		(this.state.questions) ? this.state.questions.map(question =>
				this.state.answers.map(answer =>
					// console.log(question.id === answer.question_id)
					(question.id === answer.question_id) ?
						<DashboardAnswersCard
							key={answer.id}
							question={question}
							answer={answer}
						/>
					: ""
				)
			)
			: ""

		return(
			<>
				{ distributeCombineQuestionsAnswers }
			</>
		)
	}
}