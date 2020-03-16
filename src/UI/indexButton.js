import React from 'react'
import { NavLink } from 'react-router-dom'

import './indexButtons.css'

const indexButton = (props) => {
	return(
		<NavLink
			exact to={props.link}
			name={props.buttonName}
			interaction={props.interaction}
			className={props.classType}
			onClick={props.onClick}
		>
			{props.children}
		</NavLink>
	)
}

export default indexButton