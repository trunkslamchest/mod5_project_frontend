import React from 'react'

const QuestionDisplayComments = (props) => {

		const blank = <></>

		const comment = props.comment ? props.comment : blank

		const comment_card =
			<ul>
				<li>
					<h5>{comment.user_name}</h5>
					<p>{comment.comment_text}</p>
				</li>
			</ul>

		return(
			<>
				{ comment_card }
			</>
		)

}

export default QuestionDisplayComments