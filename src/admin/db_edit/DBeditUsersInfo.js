import React from 'react'
import {
		//  Link
	} from 'react-router-dom'

import './DBedit.css'

export default class DBeditUsersInfo extends React.Component{

	render(){

		const user = this.props.user
		console.log(user)
		return(
			<div className="DBedit_user_wrapper">
				
				<hr />
				<div className="DBedit_default_box">
					User ID: {user.id}
					User Name: {user.user_name}
					Email Address: {user.email}
					Access Level: {user.access}
				</div>
				<br />
				<div className="DBedit_default_box">
					First Name: {user.first_name}
					Last Name: {user.last_name}
					Gender: {user.gender}
				</div>
				<br />
				<div className="DBedit_default_box">
					Birth Day: {user.birth_day}
					Birth Month: {user.birth_month}
					Birth Year: {user.birth_year}
				</div>
				<br />
				<div className="DBedit_default_box">
					Apartment/House Number: {user.house_number}
					Street Name: {user.street_name}
					City/Town: {user.city_town}
					State: {user.state}
					Zip Code: {user.zip_code}
				</div>
				<br />
				<div className="DBedit_default_box">
					Join Day: {user.join_day}
					Join Month: {user.join_month}
					Join Year: {user.join_year}
				</div>
			</div>
		)
	}
}