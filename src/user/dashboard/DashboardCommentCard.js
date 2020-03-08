import React from 'react'

const DashboardCommentCard = (props) => {

		return(
			<div className="comment_card">
				<div className="comment_card_header">
					<h3>{ props.question.question_desc }</h3>
				</div>
				<h4>Your Comment</h4>
				<p>
					{ props.comment.comment_text }
				</p>
			</div>
		)

}

export default DashboardCommentCard