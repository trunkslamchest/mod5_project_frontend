;(function(env) {

	var trafficFunctions = function(method, url, obj){
		var init = new trafficFunctions.init(method, url, obj)
		return init[method]
	}

	trafficFunctions.init = function(method, url, obj){
		this[method] = this[method](url, obj)
	}

	trafficFunctions.prototype = {

		get: function(url) {
			return fetch(url)
			.then(res => res.json())
		},

		page: function(url, pageInfo) {
			fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
					body: JSON.stringify({
						user_id: pageInfo.user_id,
						page_name: pageInfo.page_name,
				})
			})
		},

		element: function(url, elementInfo) {
			fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
					body: JSON.stringify({
					user_id: elementInfo.user_id,
					interaction: elementInfo.interaction,
					element: elementInfo.element
				})
			})
		}

	}

	trafficFunctions.init.prototype = trafficFunctions.prototype

	env.trafficFunctions = trafficFunctions

	module.exports = trafficFunctions

})(typeof window === "undefined" ? global : window)