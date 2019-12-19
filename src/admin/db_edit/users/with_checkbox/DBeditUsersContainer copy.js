import React from 'react'
import DBeditUsersTable from './DBeditUsersTable'
import DBeditAddUser from './DBeditAddUser'
import DBeditEditUser from './DBeditEditUser'
import DBeditDeleteUser from './DBeditDeleteUser'


import {
        //  Link
        } from 'react-router-dom'

import './DBedit.css'

export default class DBeditUsersContainer extends React.Component{

	state = {
		users: [],
		user: {},
		user_id: '',
		display: "index"
	}

	componentDidMount(){
		this.getUserDB()
	}

	UNSAFE_componentWillReceiveProps(nextProps){
		this.setState({
			display: "index"
		})
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

	displaySwitch = (user) => {
		this.setState({
			display: "user_info",
			user: user
		})
	}

	displaySwitchToIndex = (index) => {
		this.setState({
			display: 'index',
		}, this.getUserDB())
	}

	addUserFunctions = () => {
		this.setState({
			display: "add_user"
		})
	}

	editUserFunctions = (user_id) => {
		this.setState({
			display: "edit_user",
			user_id: user_id
		})
	}
	
	displaySwitchDelete = (user_id) => {
		this.setState({
			// display: "delete_user",
			user_id: user_id
		})
	}


	deleteUserFunctions = (user_id) => {
		this.setState({
			// display: "delete_user",
			user_id: user_id
		})
	}

	render(){
		console.log("user container state", this.state.user_id)

		const distribute_users_data = this.state.users.map( user_obj =>
			<DBeditUsersTable
				key={user_obj.id}
				user={user_obj}
				displaySwitch={ this.displaySwitch }
				showDBusers={ this.props.showDBusers }
				editUser={ this.editUserFunctions }
				deleteUser={ this.deleteUserFunctions }
			/>
		)

		const DBedit_table_frame =
	 		<table className="DBedit_table">
				<tbody>
	 			<tr>
					<th></th>
	 				<th>User ID</th>
	 				<th>User Name</th>
	 				<th>Email</th>
	 				<th>First Name</th>
	 				<th>Last Name</th>
	 				<th>Gender</th>
	 				<th>Birth Day</th>
	 				<th>Birth Month</th>
	 				<th>Birth Year</th>
	 				<th>House Number</th>
	 				<th>Street Name</th>
	 				<th>City/Town</th>
	 				<th>State</th>
	 				<th>Zip Code</th>
	 				<th>Join Date</th>
	 			</tr>
	 				{ distribute_users_data }
	 			</tbody>
	 		</table>

		const index_buttons = [
				<button className="default_button" value="Add User" onClick={ this.addUserFunctions }>
					Add User
				</button>,
				<button className="default_button" value="Edit User" onClick={ this.editUserFunctions }>
					Edit User
				</button>,
				<button className="default_button" value="Delete User" onClick={ this.deleteUserFunctions }>
					Delete User
				</button>
		]

		const DBedit_index = [
			index_buttons,
			DBedit_table_frame
		]

		return(
			<>
					{
						(() => {
							switch(this.state.display) {
							case 'add_user': return <DBeditAddUser displaySwitchToIndex={this.displaySwitchToIndex} />;
							case 'edit_user': return <DBeditEditUser displaySwitchToIndex={this.displaySwitchToIndex} user_id={this.state.user_id} />;
							case 'delete_user': return <DBeditDeleteUser displaySwitchToIndex={this.displaySwitchToIndex} user_id={this.state.user_id} />;
							case 'index': return DBedit_index;
							default: return null;
							}
						})()
					}
			</>
		)
	}
}