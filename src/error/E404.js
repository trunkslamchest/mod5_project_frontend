import React, { useEffect, useCallback } from 'react'

import trafficFunctions from '../utility/trafficFunctions'

import './E404.css'

const E404 = (props) => {

	const onPageLoadFunctions = useCallback(() => {
		var pageInfo = {
			user_id: localStorage.user_id,
			page_name: '404_error',
		}

		trafficFunctions('page', 'http://localhost:3001/pages', pageInfo)
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