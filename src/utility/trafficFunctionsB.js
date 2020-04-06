export function TrafficUpdate() {

	this.elementUpdate = function(res_obj) {
		fetch("http://localhost:3001/traffics", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
				body: JSON.stringify({
				user_id: res_obj.user_id,
				interaction: res_obj.interaction,
				element: res_obj.element
			})
		})
	}

	this.pageUpdate = function(res_obj) {
		fetch("http://localhost:3001/pages", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
				body: JSON.stringify({
					user_id: res_obj.user_id,
					page_name: res_obj.page_name,
			})
		})
	}

}