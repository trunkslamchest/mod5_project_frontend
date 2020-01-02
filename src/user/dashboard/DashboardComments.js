import React from 'react'

import DashboardCommentCard from './DashboardCommentCard'

import '../../css/DashboardComments.css'

export default class DashboardComments extends React.Component{

	state={
		userComments: [],
		allComments: [],
		userQuestions: [],
		questions: null,
		mounted: false,
		updatedComments: false,
		updatedAllQuestions: false,
		updatedUserQuestions: false,
	}

	componentDidMount(){
		this.setState({
			mounted: true
		})
		this.onPageLoadFunctions()
	}

	componentDidUpdate(){
		if (this.state.mounted && !this.state.updatedComments ){
			this.setComments()
		}
		if (this.state.mounted && !this.state.updatedAllQuestions) {
			this.setAllQuestions()
		}
		if (this.state.updatedAllQuestions && !this.state.updatedUserQuestions) {
			this.setUserQuestions()
		}
	}

	setComments = () => {
		this.setState({
			userComments: this.props.user_comments,
			updatedComments: true
		})
	}

	setAllQuestions = () => {
		this.setState({
			allQuestions: this.props.all_questions,
			updatedAllQuestions: true
		})
	}

	setUserQuestions = () => {
		let userCommentIDs = this.state.userComments.map(comment => comment.question_id)
		let userQuestions = this.state.allQuestions.filter(question => userCommentIDs.includes(question.id))
		this.setState({
			userQuestions: userQuestions,
			updatedUserQuestions: true
		})
	}

	onPageLoadFunctions = () => {
		this.props.update_page_data({
			user_id: localStorage.user_id,
			page_name: "dashboard_comments"
		})
	}

	render(){

		const distributeCombineQuestionsComments =
		(this.state.updatedUserQuestions) ? this.state.userQuestions.map(question =>
				this.state.userComments.map(comment =>
					(question.id === comment.question_id) ?
						<DashboardCommentCard
							key={comment.id}
							question={question}
							comment={comment}
						/>
					: ""
				)
			)
			: ""

		return(
			<div className="comment_wrapper">
				{ distributeCombineQuestionsComments }
			</div>
		)
	}
}