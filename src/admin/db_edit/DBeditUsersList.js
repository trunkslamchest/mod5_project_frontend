import React from 'react'
import DBeditUsersItem from './DBeditUsersItem'
import {
		//  Link
		} from 'react-router-dom'

import './DBedit.css'

export default class DBeditUsersList extends React.Component{
	render(){
		console.log(this.props.users)
		
		const distribute_users_data = this.props.users.map( user_obj =>
			<DBeditUsersItem
				key={user_obj.id}
				user={user_obj}
			/>
		)
		return(
			<>
				<table className="DBedit_table">
					<tr>
						<th><input type='checkbox' /></th>
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
				</table>
			</>
		)
	}
}