;(function(env) {

	var userFunctions = function(method, url, obj){
		var init = new userFunctions.init(method, url, obj)
		return init[method]
	}

	userFunctions.init = function(method, url, obj){
		this[method] = this[method](url, obj)
	}

	userFunctions.prototype = {

		get: function(url) {
			return fetch(url)
			.then(res => res.json())
		},

		patch: function(url, userObj){
			return fetch(url, {
				method: "PATCH",
				headers: {
					"content-type":"application/json"
				},
				body: JSON.stringify(userObj)
			})
			.then(res => res.json())
		},

		delete: function(url) {
			return fetch(url, {
				method: "DELETE"
			})
		},

		signUp: function(url, signUpObj) {
			return fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(signUpObj)
			})
			.then(res => res.json())
		}

	}

	userFunctions.init.prototype = userFunctions.prototype

	env.userFunctions = userFunctions

	module.exports = userFunctions

})(typeof window === "undefined" ? global : window)