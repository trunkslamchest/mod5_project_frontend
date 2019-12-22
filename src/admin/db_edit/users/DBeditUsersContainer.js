import React from 'react'
import DBeditUsersTable from './DBeditUsersTable'
import DBeditUsersInfo from './DBeditUsersInfo'
import DBeditAddUser from './DBeditAddUser'
import DBeditEditUser from './DBeditEditUser'
import DBeditDeleteUser from './DBeditDeleteUser'

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

	displaySwitchToUserInfo = (user) => {
		this.setState({
			display: "user_info",
			user: user
		})
	}

	displaySwitchtoAdd = () => {
		this.setState({
			display: "add_user"
		})
	}

	displaySwitchtoEdit = (user_id) => {
		this.setState({
			display: "edit_user",
			user_id: user_id
		})
	}

	displaySwitchToDelete = (user_id) => {
		this.setState({
			display: "delete_user",
			user_id: user_id
		})
	}

	render(){

		const distribute_users_data = this.state.users.map( user_obj =>
			<DBeditUsersTable
				key={user_obj.id}
				user={user_obj}
				displaySwitchToUserInfo={ this.displaySwitchToUserInfo }
			/>
		)

		const DBedit_table_frame =
	 		<table
			 	key={"DBe_users_table"}
			 	className="DBedit_table"
			>
				<tbody>
	 			<tr>
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
				<button
					key={"DBe_add_user"}
					className="alt_button2"
					value="Add User"
					onClick={ this.displaySwitchtoAdd }
				>
					Add User
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
							case 'user_info': return <DBeditUsersInfo
														displaySwitchToIndex={ this.displaySwitchToIndex }
														displaySwitchtoEdit={ this.displaySwitchtoEdit }
														displaySwitchToDelete={ this.displaySwitchToDelete }
														user={ this.state.user }
													/>;
							case 'add_user': return <DBeditAddUser
														displaySwitchToIndex={ this.displaySwitchToIndex }
													/>;
							case 'edit_user': return <DBeditEditUser
														displaySwitchToIndex={ this.displaySwitchToIndex }
														user={ this.state.user }
													/>;
							case 'delete_user': return <DBeditDeleteUser
														displaySwitchToIndex={ this.displaySwitchToIndex }
														displaySwitchToUserInfo={ this.displaySwitchToUserInfo }
														user={ this.state.user }
													/>;
							case 'index': return DBedit_index;
						default: return null;
						}
					})()
				}
			</>
		)
	}
}