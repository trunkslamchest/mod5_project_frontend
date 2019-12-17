import React from 'react'
import {
		//  Link
	} from 'react-router-dom'

import './DBedit.css'

export default class DBeditUsersInfo extends React.Component{
	
// componentDidMount(){
// 		this.props.showDBusers("test")
// }

	UNSAFE_componentWillReceiveProps(nextProps){
		console.log(nextProps)
		this.props.showDBusers("signal")
		// this.props.signal_test("test")
		// this.setState({
		// 	display: nextProps.update_db_display,
		// })
	}

	render(){

		return(
			<>
				DB edit user info test
			</>
		)
	}
}