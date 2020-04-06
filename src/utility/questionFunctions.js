;(function(env) {

	var questionFunctions = function(method, url, obj){
		var init = new questionFunctions.init(method, url, obj)
		return init[method]
	}

	questionFunctions.init = function(method, url, obj){
		this[method] = this[method](url, obj)
	}

	questionFunctions.prototype = {

		get: function(url) {
			return fetch(url)
			.then(res => res.json())
		},

		post: function(url, obj) {
			return fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(obj)
			})
			.then(res => res.json())
		}

	}

	questionFunctions.init.prototype = questionFunctions.prototype

	env.questionFunctions = questionFunctions

	module.exports = questionFunctions

})(typeof window === "undefined" ? global : window)