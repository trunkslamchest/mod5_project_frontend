export function LogInUpdate() {

	this.submit = function(username, password) {
		return fetch("http://localhost:3001/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				user_name: username,
				password: password
			})
		})
		.then(res => res.json())
	}

}