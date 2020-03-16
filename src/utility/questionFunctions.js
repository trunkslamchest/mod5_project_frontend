export function QuestionUpdate() {

	this.getAllQuestions = function() {
		return fetch(`http://localhost:3001/questions/`)
		.then(res => res.json())
	}

	this.getSingleQuestion = function(questionID) {
		return fetch(`http://localhost:3001/questions/${questionID}`)
		.then(res => res.json())
	}

	this.answerUpdate = function(answerObj, resultString) {
		return fetch("http://localhost:3001/answers", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				user_id: answerObj.user_id,
				question_id: answerObj.question_id,
				user_answer: answerObj.answer,
				user_result: resultString,
				user_time: answerObj.time
			})
		})
		.then(res => res.json())
	}

	this.voteUpdate = function(voteObj) {
		return fetch("http://localhost:3001/votes", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				user_id: voteObj.user_id,
				question_id: voteObj.question_id,
				vote_num: voteObj.vote_num
			})
		})
		.then(response => response.json())
	}

	this.commentUpdate = function(commentObj) {
			return fetch("http://localhost:3001/comments", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				user_id: commentObj.user_id,
				user_name: commentObj.user_name,
				question_id: commentObj.question_id,
				comment_text: commentObj.comment_text
			})
		})
		.then(response => response.json())
	}

}