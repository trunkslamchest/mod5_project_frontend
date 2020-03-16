export function UserUpdate() {

	this.getUser = function(userID) {
		return fetch(`http://localhost:3001/users/${userID}`)
		.then(res => res.json())
	}

	this.logInSubmit = function(username, password) {
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

	this.signUpSubmit = function(signUpObj) {
		return fetch("http://localhost:3001/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				user_name: signUpObj.user_name,
				password: signUpObj.password,
				email: signUpObj.email,
				first_name: signUpObj.first_name,
				last_name: signUpObj.last_name,
				gender: signUpObj.gender,
				birth_month: signUpObj.birth_month,
				birth_day: signUpObj.birth_day,
				birth_year: signUpObj.birth_year,
				house_number: signUpObj.house_number,
				street_name: signUpObj.street_name,
				city_town: signUpObj.city_town,
				state: signUpObj.state,
				zip_code: signUpObj.zip_code,
			})
		})
		.then(res => res.json())
	}

	this.editProfileSubmit = function(userID, editProfileObj) {
		return fetch(`http://localhost:3001/users/${userID}`, {
			method: "PATCH",
			headers: {
				"content-type":"application/json"
			},
			body: JSON.stringify({
				user_name: editProfileObj.user_name,
				email: editProfileObj.email,
				first_name: editProfileObj.first_name,
				last_name: editProfileObj.last_name,
				gender: editProfileObj.gender,
				birth_day: editProfileObj.birth_day,
				birth_month: editProfileObj.birth_month,
				birth_year: editProfileObj.birth_year,
				house_number: editProfileObj.house_number,
				street_name: editProfileObj.street_name,
				city_town: editProfileObj.city_town,
				state: editProfileObj.state,
				zip_code: editProfileObj.zip_code
			})
		})
		.then(res => res.json())
	}

	this.deleteUser = function(userID) {
		return fetch(`http://localhost:3001/users/${userID}`, {
			method: "DELETE"
		})
	}

}