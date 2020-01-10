import React from 'react'
import DBeditUsersContainer from './DBeditUsersContainer'
import './DBedit.css'

export default class DBeditEditUser extends React.Component {

	state = {
		EditUserSuccess: false,
		cancel: false,
		add_user_name: "",
		add_password: "",
		add_email: "",
		add_first_name: "",
		add_last_name: "",
		add_gender: "",
		add_birth_day: "",
		add_birth_month: "",
		add_birth_year: "",
		add_house_number: "",
		add_street_name: "",
		add_city_town: "",
		add_state: "",
		add_zip_code: "",
		errors: []
	}

	componentDidMount(){
		// this.onMountAsync()
	}

	onMountAsync = async () => {
		// try {
		// 	await !!this.props
		// 	let user_id = await this.props.user_id;
		// 	await this.onPageLoadFunctions(user_id)
		// } catch(errors) {
		// 	console.log(errors);
		// }
	}

	onChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	onSubmitaddUserFunctions = (event) => {
		this.addUserSubmitted(event)
	}

	addUserSubmitted = (event) => {
		event.persist()
		event.preventDefault()
		fetch("http://localhost:3001/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				user_name: this.state.add_user_name,
				password: this.state.add_password,
				email: this.state.add_email,
				first_name: this.state.add_first_name,
				last_name: this.state.add_last_name,
				gender: this.state.add_gender,
				birth_month: this.state.add_birth_month,
				birth_day: this.state.add_birth_day,
				birth_year: this.state.add_birth_year,
				house_number: this.state.add_house_number,
				street_name: this.state.add_street_name,
				city_town: this.state.add_city_town,
				state: this.state.add_state,
				zip_code: this.state.add_zip_code,
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
		this.setState({
			add_user_name: "",
			add_password: "",
			add_email: "",
			add_first_name: "",
			add_last_name: "",
			add_gender: "",
			add_birth_day: "",
			add_birth_month: "",
			add_birth_year: "",
			add_house_number: "",
			add_street_name: "",
			add_city_town: "",
			add_state: "",
			add_zip_code: "",
		})
	}

	render(){
		return (
				<div className="DBedit_default_wrapper">
					<h3>Edit User</h3>
					{
				        (!!this.state.errors) ? (
			  				<div className="default_error_report">
			  					{
					              this.state.errors.map( error =>
					                <div className="default_error_item">
					                  { error }
					                </div>
					              )
			            		}
			  				</div>
				        )
				        :
				        (
				          ""
				        )
					}
					<form
						name="add_form"
						interaction="submit"
						className="add_form"
						onSubmit={ this.onSubmitaddUserFunctions }
					>
						<div className="add_basics">
							<label htmlFor="add_user_name">User Name</label>
							<input
								id="add_user_name"
								type="text"
								name="add_user_name"
								placeholder="User Name..."
								onChange={ this.onChange }
								value={ this.state.add_user_name }
							/>
							<br />
							<label htmlFor="add_password">Password</label>
							<input
								id="add_password"
								type="password"
								name="add_password"
								placeholder="Password..."
								onChange={ this.onChange }
								value={ this.state.add_password }
							/>
							<br />
							<label htmlFor="add_email">Email</label>
							<input
								id="add_email"
								type="text"
								name="add_email"
								placeholder="Email Address..."
								onChange={ this.onChange }
								value={ this.state.add_email }
							/>
						</div>
						<div className="add_profile_name">
							<label htmlFor="add_name">Name</label>
							<input
								id="add_first_name"
								type="text"
								name="add_first_name"
								placeholder="First Name..."
								onChange={ this.onChange }
								value={ this.state.add_first_name }
							/>
							<input
								id="add_last_name"
								type="text"
								name="add_last_name"
								placeholder="Last Name..."
								onChange={ this.onChange }
								value={ this.state.add_last_name }
							/>
							<hr />
						</div>
						<div className="add_gender">
							<label htmlFor="add_gender">Gender</label>
							<select
								id="add_gender"
								name="add_gender"
								onChange={ this.onChange }
								value={ this.state.add_gender }
							>
								<option value="Non-Binary">Non-Binary</option>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
							</select>
							<hr />
						</div>
						<div className="add_birth">
							<label htmlFor="add_birth">Birth Day</label>
							<select
								id="add_birth_month"
								name="add_birth_month"
								onChange={ this.onChange }
								value={ this.state.add_month }
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
							<input
								id="add_birth_day"
								type="number"
								min="1"
								max="31"
								name="add_birth_day"
								placeholder="1"
								onChange={ this.onChange }
								value={ this.state.add_birth_day }
							/>
							<input
								id="add_birth_year"
								type="number"
								min="1900"
								max="2019"
								name="add_birth_year"
								onChange={ this.onChange }
								placeholder="1900"
								value={ this.state.add_birth_year }
						/>
						<hr />
						</div>
						<div className="add_address">
							<label htmlFor="sadd_address">Address</label>
							<input
								id="add_house_number"
								type="number"
								min="1"
								max="9999"
								name="add_house_number"
								placeholder="Apt./House Number..."
								onChange={ this.onChange }
								value={ this.state.add_house_number }
							/>
							<input
								id="add_street_name"
								type="text"
								name="add_street_name"
								placeholder="Steet..."
								onChange={ this.onChange }
								value={ this.state.add_street_name }
							/>
							<input
								id="add_city_town"
								type="text"
								name="add_city_town"
								placeholder="City/Town..."
								onChange={ this.onChange }
								value={ this.state.add_city_town }
							/>
							<select
								id="add_state"
								name="add_state"
								placeholder="State..."
								onChange={ this.onChange }
								value={ this.state.add_state }
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
							<input id="add_zip_code"
								type="number"
								min="10000"
								max="99999"
								onChange={ this.onChange }
								name="add_zip_code"
								placeholder="Zip Code..."
								value={ this.state.add_zip_code }
							/>
						</div>
						<div className="add_form_buttons">
							<input
								className="default_button"
								type="submit"
								value="Edit New User"
							/>
							<button
								name="add_form"
  								interaction="reset"
								className="default_button"
								onClick={ this.onResetFunctions }
							>
								Reset
							</button>
							{
								(() => {
									switch(this.state.EditUserSuccess) {
									case true: return <DBeditUsersContainer />;
									// case 'edit': return <DBeditUsersContainer
									// 						showDBusers={ this.showDBusers }
									// 					/>;
									// case 'delete': return <DBeditThings />;
									default: return null;
									}
								})()
							}
						</div>
					</form>
				</div>
		)
	}
}