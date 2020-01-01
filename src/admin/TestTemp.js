import React from 'react'

import { Redirect } from 'react-router-dom'

export default class TestTemp extends React.Component{

	render(){

	const temp_default =
		<div className="default_wrapper">
			<div className="loading_container">
				{/* <div className="loading_header">
					<h3>Loading</h3>
				</div> */}
				<div className="loading_animation_container">
					<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
				</div>
			</div>
		</div>

		return (
			<>
				{
					(() => {
						switch(localStorage.length === 0 || localStorage.access !== 'admin') {
							case true: return <Redirect to='/' />
							case false: return temp_default
							default: return null;
						}
					})()
				}
			</>
		)
	}
}