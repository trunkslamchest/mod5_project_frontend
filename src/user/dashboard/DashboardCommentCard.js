import React from 'react'

import {
        //  Link
        } from 'react-router-dom'

export default class DashboardCommentCard extends React.Component{

	render(){

		console.log(this.props)

		return(
			<>
				<br />
				<li>Question: { this.props.question.question_desc }</li>
				<li>Your Comment: { this.props.comment.comment_text }</li>
				<br />
				<hr />
			</>
		)
	}
}