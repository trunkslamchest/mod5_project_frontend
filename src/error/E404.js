import React, { useEffect, useCallback } from 'react'

import { TrafficUpdate } from '../utility/trafficFunctions'

import './Error.css'

var sendTraffic = new TrafficUpdate()

const E404 = (props) => {

	const onPageLoadFunctions = useCallback(() => {
		sendTraffic.pageUpdate({
			user_id: localStorage.user_id,
			page_name: "404 Error",
		})
	}, [])

	useEffect(() => {onPageLoadFunctions()}, [onPageLoadFunctions])

	return(
		<div className="alt_container">
			<div className="alt_wrapper">
				<h3>404 Error</h3>
			</div>
		</div>
	)
}

export default E404