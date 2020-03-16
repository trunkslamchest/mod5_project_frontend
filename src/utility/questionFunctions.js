export function QuestionUpdate() {

	this.getAllQuestions = function() {
		return fetch(`http://localhost:3001/questions/`)
		.then(res => res.json())
	}

}