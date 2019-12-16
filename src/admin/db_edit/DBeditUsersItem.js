import React from 'react'
import {
		//  Link
		} from 'react-router-dom'

import './DBedit.css'

export default class DBeditUsersItem extends React.Component{
	render(){
		const user = this.props.user.attributes.user
		return(
			// <div className="DBedit_item">
			<tr>
				<input type='checkbox' />
				<td className="DBedit_sub_item">
					{user.id}
				</td>
				<td className="DBedit_sub_item">
					{user.user_name}
				</td>
				<td className="DBedit_sub_item">
					{user.email}
				</td>
			
				<td className="DBedit_sub_item">
					{user.first_name}
				</td>
				<td className="DBedit_sub_item">
					{user.last_name}
				</td>
				<td className="DBedit_sub_item">
					{user.gender}
				</td>
				<td className="DBedit_sub_item">
					{user.birth_day}
				</td>
				<td className="DBedit_sub_item">
					{user.birth_month}
				</td>
				<td className="DBedit_sub_item">
					{user.birth_year}
				</td>
				<td className="DBedit_sub_item">
					{user.house_number}
				</td>
				<td className="DBedit_sub_item">
					{user.street_name}
				</td>
				<td className="DBedit_sub_item">
					{user.city_town}
				</td>
				<td className="DBedit_sub_item">
					{user.state}
				</td>
				<td className="DBedit_sub_item">
					{user.zip_code}
				</td>
			</tr>
		// </div>
		)
	}
}