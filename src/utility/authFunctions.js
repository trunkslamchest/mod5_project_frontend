;(function(env) {

	var authFunctions = function(method, url, obj){
		var init = new authFunctions.init(method, url, obj)
		return init[method]
	}

	authFunctions.init = function(method, url, obj){
		this[method] = this[method](url, obj)
	}

	authFunctions.prototype = {

		logIn: function(url, logInObj) {
			return fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(logInObj)
			})
			.then(res => res.json())
		}

	}

	authFunctions.init.prototype = authFunctions.prototype

	env.authFunctions = authFunctions

	module.exports = authFunctions

})(typeof window === "undefined" ? global : window)