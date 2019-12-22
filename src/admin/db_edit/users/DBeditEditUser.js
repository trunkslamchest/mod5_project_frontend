import React from 'react'
import DBeditUsersContainer from './DBeditUsersContainer'

export default class DBeditEditUser extends React.Component {

	state = {
		edit_user_name: "",
		edit_email: "",
		edit_first_name: "",
		edit_last_name: "",
		edit_gender: "",
		edit_birth_day: "",
		edit_birth_month: "",
		edit_birth_year: "",
		edit_house_number: "",
		edit_street_name: "",
		edit_city_town: "",
		edit_state: "",
		edit_zip_code: "",
		errors: []
	}

	componentDidMount(){
		if (this.props.user.id) {
			let user = this.props.user
			this.setState({
				edit_user_name: user.user_name,
				edit_email: user.email,
				edit_first_name: user.first_name,
				edit_last_name: user.last_name,
				edit_gender: user.gender,
				edit_birth_day: user.birth_day,
				edit_birth_month: user.birth_month,
				edit_birth_year: user.birth_year,
				edit_house_number: user.house_number,
				edit_street_name: user.street_name,
				edit_city_town: user.city_town,
				edit_state: user.state,
				edit_zip_code: user.zip_code
			})
		}
	}

	onMountAsync = async () => {
	}

	onChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	onSubmitEditUserFunctions = (event) => {
		this.EditUserSubmitted(event)
	}

	EditUserSubmitted = (event) => {
		event.persist()
		event.preventDefault()

		let user = this.props.user

		fetch(`http://localhost:3001/users/${user.id}`, {
			method: "PATCH",
			headers: {
				"content-type":"application/json"
			},
			body: JSON.stringify({
				user_name: this.state.edit_user_name,
				email: this.state.edit_email,
				first_name: this.state.edit_first_name,
				last_name: this.state.edit_last_name,
				gender: this.state.edit_gender,
				birth_month: this.state.edit_birth_month,
				birth_day: this.state.edit_birth_day,
				birth_year: this.state.edit_birth_year,
				house_number: this.state.edit_house_number,
				street_name: this.state.add_street_name,
				city_town: this.state.add_city_town,
				state: this.state.edit_state,
				zip_code: this.state.edit_zip_code,
			})
		})
	    .then(response => response.json())
	    .then(res_obj => {
			if (res_obj.errors) {
				this.setState({
					errors: res_obj.errors
				})
			} else {
				this.props.displaySwitchToIndex('index')
			}
		})
	}

	onResetFunctions = (event) => {
		event.persist()
		event.preventDefault()

		let user = this.props.user

		this.setState({
			edit_user_name: user.user_name,
			edit_email: user.email,
			edit_first_name: user.first_name,
			edit_last_name: user.last_name,
			edit_gender: user.gender,
			edit_birth_day: user.birth_day,
			edit_birth_month: user.birth_month,
			edit_birth_year: user.birth_year,
			edit_house_number: user.house_number,
			edit_street_name: user.street_name,
			edit_city_town: user.city_town,
			edit_state: user.state,
			edit_zip_code: user.zip_code
		})
	}

	render(){

		const edit_user_form =
			<form
				name="edit_form"
				interaction="submit"
				className="DBedit_edit_form"
				onSubmit={ this.onSubmitEditUserFunctions }
			>
				<div className="DBedit_basic_div">
					<label htmlFor="edit_user_name">User Name</label>
					<br />
					<input
						id="edit_user_name"
						type="text"
						name="edit_user_name"
						placeholder="User Name..."
						onChange={ this.onChange }
						value={ this.state.edit_user_name }
					/>
				</div>
				<br />
				<div className="DBedit_basic_div">
					<label htmlFor="edit_email">Email</label>
					<br />
					<input
						id="edit_email"
						type="text"
						name="edit_email"
						placeholder="Email Address..."
						onChange={ this.onChange }
						value={ this.state.edit_email }
					/>
				</div>
				<br />
				<div className="DBedit_basic_div">
					<label htmlFor="edit_name">Name</label>
					<br />
					<input
						id="edit_first_name"
						type="text"
						name="edit_first_name"
						placeholder="First Name..."
						onChange={ this.onChange }
						value={ this.state.edit_first_name }
					/>
					<br />
					<input
						id="edit_last_name"
						type="text"
						name="edit_last_name"
						placeholder="Last Name..."
						onChange={ this.onChange }
						value={ this.state.edit_last_name }
					/>
				</div>
				<br />
				<div className="DBedit_basic_div">
					<label htmlFor="edit_gender">Gender</label>
					<br />
					<select
						id="edit_gender"
						name="edit_gender"
						onChange={ this.onChange }
						value={ this.state.edit_gender }
					>
						<option value="Non-Binary">Non-Binary</option>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
					</select>
				</div>
				<br />
				<div className="DBedit_basic_div">
					<label htmlFor="edit_birth">Birth Day</label>
					<br />
					<select
						id="edit_birth_month"
						name="edit_birth_month"
						onChange={ this.onChange }
						value={ this.state.edit_birth_month }
					>
						<option value="January">January</option>
						<option value="Februrary">Februrary</option>
						<option value="March">March</option>
						<option value="April">April</option>
						<option value="May">May</option>
						<option value="June">June</option>
						<option value="July">July</option>
						<option value="August">August</option>
						<option value="September">September</option>
						<option value="October">October</option>
						<option value="November">November</option>
						<option value="December">December</option>
					</select>
					<br />
					<input
						id="edit_birth_day"
						type="number"
						min="1"
						max="31"
						name="edit_birth_day"
						placeholder="1"
						onChange={ this.onChange }
						value={ this.state.edit_birth_day }
					/>
					<br />
					<input
						id="edit_birth_year"
						type="number"
						min="1900"
						max="2019"
						name="edit_birth_year"
						onChange={ this.onChange }
						placeholder="1900"
						value={ this.state.edit_birth_year }
					/>
				</div>
				<br />
				<div className="DBedit_basic_div">
					<label htmlFor="edit_address">Address</label>
					<br />
					<input
						id="edit_house_number"
						type="number"
						min="1"
						max="9999"
						name="edit_house_number"
						placeholder="Apt./House Number..."
						onChange={ this.onChange }
						value={ this.state.edit_house_number }
					/>
					<br />
					<input
						id="edit_street_name"
						type="text"
						name="edit_street_name"
						placeholder="Steet..."
						onChange={ this.onChange }
						value={ this.state.edit_street_name }
					/>
					<br />
					<input
						id="edit_city_town"
						type="text"
						name="edit_city_town"
						placeholder="City/Town..."
						onChange={ this.onChange }
						value={ this.state.edit_city_town }
					/>
					<br />
					<select
						id="edit_state"
						name="edit_state"
						placeholder="State..."
						onChange={ this.onChange }
						value={ this.state.edit_state }
					>
						<option value="Alabama">Alabama</option>
						<option value="Alaska">Alaska</option>
						<option value="Arizona">Arizona</option>
						<option value="Arkansa">Arkansas</option>
						<option value="California">California</option>
						<option value="Colorado">Colorado</option>
						<option value="Connecticut">Connecticut</option>
						<option value="Delaware">Delaware</option>
						<option value="Florida">Florida</option>
						<option value="Georgia">Georgia</option>
						<option value="Hawaii">Hawaii</option>
						<option value="Idaho">Idaho</option>
						<option value="Illinois">Illinois</option>
						<option value="Indiana">Indiana</option>
						<option value="Iowa">Iowa</option>
						<option value="Kansas">Kansas</option>
						<option value="Kentucky">Kentucky</option>
						<option value="Louisiana">Louisiana</option>
						<option value="Maine">Maine</option>
						<option value="Maryland">Maryland</option>
						<option value="Massachusetts">Massachusetts</option>
						<option value="Michigan">Michigan</option>
						<option value="Minnesota">Minnesota</option>
						<option value="Mississippi">Mississippi</option>
						<option value="Missouri">Missouri</option>
						<option value="Montana">Montana</option>
						<option value="Nebraska">Nebraska</option>
						<option value="Nevada">Nevada</option>
						<option value="New Hampshire">New Hampshire</option>
						<option value="New Jersey">New Jersey</option>
						<option value="New Mexico">New Mexico</option>
						<option value="New York">New York</option>
						<option value="North Carolina">North Carolina</option>
						<option value="North Dakota">North Dakota</option>
						<option value="Ohio">Ohio</option>
						<option value="Oklahoma">Oklahoma</option>
						<option value="Oregon">Oregon</option>
						<option value="Pennsylvania">Pennsylvania</option>
						<option value="Rhode Island">Rhode Island</option>
						<option value="South Carolina">South Carolina</option>
						<option value="South Dakota">South Dakota</option>
						<option value="Tennessee">Tennessee</option>
						<option value="Texas">Texas</option>
						<option value="Utah">Utah</option>
						<option value="Vermont">Vermont</option>
						<option value="Virginia">Virginia</option>
						<option value="Washington">Washington</option>
						<option value="West Virginia">West Virginia</option>
						<option value="Wisconsin">Wisconsin</option>
						<option value="Wyoming">Wyoming</option>
					</select>
					<br />
					<input id="edit_zip_code"
						type="number"
						min="10000"
						max="99999"
						onChange={ this.onChange }
						name="edit_zip_code"
						placeholder="Zip Code..."
						value={ this.state.edit_zip_code }
					/>
				</div>
				<hr />
				<div className="DBedit_default_buttons_container">
					<input
						className="alt_button"
						type="submit"
						value="Submit Changes"
					/>
					<button
						name="edit_form"
						interaction="reset"
						className="alt_button"
						onClick={ this.onResetFunctions }
					>
						Reset
					</button>
					{
						(() => {
							switch(this.state.EditUserSuccess) {
							case true: return <DBeditUsersContainer />;
							default: return null;
							}
						})()
					}
				</div>
			</form>

		return (
			<div className="DBedit_default_wrapper">
				<h3>Edit User</h3>
				{
					(!!this.state.errors) ?
						( <div className="default_error_report">
								{ this.state.errors.map( error =>
									<div className="default_error_item">
										{ error }
									</div>
								)}
						  </div> )
					:
						( "" )
				}
				{ edit_user_form }
			</div>
		)
	}
}