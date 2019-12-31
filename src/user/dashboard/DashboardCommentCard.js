import React from 'react'

import {
        //  Link
        } from 'react-router-dom'

export default class DashboardCommentCard extends React.Component{

	render(){
		return(
			<div className="comment_card">
				<div className="comment_card_header">
					<h3>{ this.props.question.question_desc }</h3>
				</div>
				<h4>Your Comment</h4>
				<p>
					{ this.props.comment.comment_text }
				</p>
			</div>
		)
	}
}