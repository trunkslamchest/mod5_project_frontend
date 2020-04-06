import React from 'react'

import DashboardCommentCard from './DashboardCommentCard'

import trafficFunctions from '../../utility/trafficFunctions'

import './DashboardComments.css'

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
		this.setState({ mounted: true })
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
		var pageInfo = {
			user_id: localStorage.user_id,
			page_name: 'dashboard_user_comments',
		}

		trafficFunctions('page', 'http://localhost:3001/pages', pageInfo)
	}

	render(){

		const no_comments_header =
			<div className="dashboard_alt_header">
				<h4> You have not commented on any questions yet!</h4>
			</div>

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
				{ this.state.userComments.length === 0 ? no_comments_header: distributeCombineQuestionsComments }
			</div>
		)
	}
}