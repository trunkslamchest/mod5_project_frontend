import React from 'react'
import DBeditUsersRow from './DBeditUsersRow'
import DBeditUsersInfo from './DBeditUsersInfo'

import {
		//  Link
		} from 'react-router-dom'

import './DBedit.css'

export default class DBeditUsersList extends React.Component{

	state = {
		display: "index"
	}

	UNSAFE_componentWillReceiveProps(nextProps){
		this.setState({
			display: "index"
		})
	}

	displaySwitch = (info) => {
		this.setState({
			display: info
		})
	}

	render(){
		// console.log("user list state", this.state)
		// console.log("user list props", this.props)

		const distribute_users_data = this.props.users.map( user_obj =>
			<DBeditUsersRow
				key={user_obj.id}
				user={user_obj}
				display_switch={ this.displaySwitch }
			/>
		)

		const DBedit_table = <table className="DBedit_table">
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

		const DBedit_users_info =
			<DBeditUsersInfo
				display_switch={ this.displaySwitch }
				showDBusers={ this.props.showDBusers }
			/>

		return(
			<>
			{ this.state.display === "user_info" ? DBedit_users_info : DBedit_table }
			</>
		)
	}
}