import React from 'react'
import DBeditUsersList from './DBeditUsersList'
import {
        //  Link
        } from 'react-router-dom'

import './DBedit.css'

export default class DBeditUsersContainer extends React.Component{

	state = {
		users: []
	}

	componentDidMount(){
		this.getUserDB()
	}

	getUserDB = () => {
		fetch("http://localhost:3001/users")
	    .then(res => res.json())
	    .then(res_obj =>
			this.setState({
				users: res_obj.data
			})
		)
	}

	render(){
		// console.log("user container state", this.state)
		// console.log("user container props", this.props)
		return(
			<>
				<DBeditUsersList
					users={ this.state.users }
					showDBusers={ this.props.showDBusers }
				/>
			</>
		)
	}
}