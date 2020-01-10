import React from 'react'

import {
		//  Link
		} from 'react-router-dom'

import './DBedit.css'

export default class DBeditUsersList extends React.Component{

	state = {
		selected: false,
		temp: '',
		select_arr: [],
	}

	// onClickTableRowFunctions = () => {
	// 	this.props.displaySwitch(this.props.user.attributes.user)
	// }

	onChangeCheckboxFunctions = (event) => {
		// console.log("users table on check value", event.target.value)
		// console.log("users table on checked", event.target.checked)
		// console.log("flipped check", flip_checked)
		
		let flip_checked = !event.target.checked
		let user_id = event.target.value
		
		this.setState({
			selected: !flip_checked
		}, this.modifySelectArray(user_id))
	}

	modifySelectArray = (user_id) => {
		console.log(user_id)
		console.log(!this.state.selected)
		// console.log(this.state.select_arr)

		if (!this.state.selected) {
			this.setState({
				select_arr: [...this.state.select_arr, user_id]
				// selected: !this.state.selected
			})
		}
		// } else {
		// 	if (this.state.select_arr.length >= 1) {
		// 		const filter_arr = this.state.select_arr.filter( userID => userID !== user_id)
		// 		this.setState({
		// 			select_arr: filter_arr
		// 		})
		// 	} else {
		// 		this.setState({
		// 			select_arr: []
		// 		})
		// 	}
		// }
	}

	render(){
		// console.log(this.state.selected)
		console.log(this.state.select_arr)

		// console.log("user tables props", this.props)
		const user = this.props.user.attributes.user

		const DBedit_table =
			<tr className="DBedit_sub_row">
				<td><form>
					<input
						name="selected"
						type="checkbox"
						checked={this.state.selected}
						value={user.id}
						onChange={ this.onChangeCheckboxFunctions }
					/>
					</form>
				</td>
				<td>{user.id}</td>
				<td>{user.user_name}</td>
				<td>{user.email}</td>
				<td>{user.first_name}</td>
				<td>{user.last_name}</td>
				<td>{user.gender}</td>
				<td>{user.birth_day}</td>
				<td>{user.birth_month}</td>
				<td>{user.birth_year}</td>
				<td>{user.house_number}</td>
				<td>{user.street_name}</td>
				<td>{user.city_town}</td>
				<td>{user.state}</td>
				<td>{user.zip_code}</td>
			</tr>
		return(
			<>
				{ DBedit_table }
			</>
		)
	}
}