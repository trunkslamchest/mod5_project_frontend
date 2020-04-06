import React from 'react'
import { Redirect } from 'react-router'

import trafficFunctions from '../../utility/trafficFunctions'
import userFunctions from '../../utility/userFunctions'

import './EditProfile.css'

export default class EditProfile extends React.Component {

	state = {
		updateSuccess: false,
		cancel: false,
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
		if (this.props.user_id) {
			this.setState({
				edit_user_name: this.props.user_name,
				edit_email: this.props.email,
				edit_first_name: this.props.first_name,
				edit_last_name: this.props.last_name,
				edit_gender: this.props.gender,
				edit_birth_day: this.props.birth_day,
				edit_birth_month: this.props.birth_month,
				edit_birth_year: this.props.birth_year,
				edit_house_number: this.props.house_number,
				edit_street_name: this.props.street_name,
				edit_city_town: this.props.city_town,
				edit_state: this.props.state,
				edit_zip_code: this.props.zip_code
			})
		}

		this.onPageLoadFunctions()
	}

	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}

	onSubmitEditProfileFunctions = async (event) => {
		try {
			this.EditProfileSubmitted(event)
		} catch(error) {
    		console.error("Error", error)
  		}
	}

	EditProfileSubmitted = (event) => {
		event.persist()
		event.preventDefault()

		let userObj = {
			user_name: event.target["edit_user_name"].value,
			email: event.target["edit_email"].value,
			first_name: event.target["edit_first_name"].value,
			last_name: event.target["edit_last_name"].value,
			gender: event.target["edit_gender"].value,
			birth_day: event.target["edit_birth_day"].value,
			birth_month: event.target["edit_birth_month"].value,
			birth_year: event.target["edit_birth_year"].value,
			house_number: event.target["edit_house_number"].value,
			street_name: event.target["edit_street_name"].value,
			city_town: event.target["edit_city_town"].value,
			state: event.target["edit_state"].value,
			zip_code: event.target["edit_zip_code"].value
		}

		userFunctions('patch', `http://localhost:3001/users/${this.props.user_id}`, userObj)
		.then(res_obj => {
			if (res_obj.errors) {
				this.setState({
					errors: res_obj.errors
				})
			} else {
				this.onSubmitTrafficFunctions(event, res_obj)
				this.props.setToken(res_obj)
				this.setState({ updateSuccess: true })
			}
		})
	}

	onResetFunctions = (event) => {
		event.persist()
		event.preventDefault()
		this.onClickTrafficFunctions(event)
		this.setState({
			edit_user_name: this.props.user_name,
			edit_email: this.props.email,
			edit_first_name: this.props.first_name,
			edit_last_name: this.props.last_name,
			edit_gender: this.props.gender,
			edit_birth_day: this.props.birth_day,
			edit_birth_month: this.props.birth_month,
			edit_birth_year: this.props.birth_year,
			edit_house_number: this.props.house_number,
			edit_street_name: this.props.street_name,
			edit_city_town: this.props.city_town,
			edit_state: this.props.state,
			edit_zip_code: this.props.zip_code
		})
	}

	onCancelFunctions = (event) => {
		this.onClickTrafficFunctions(event)
		this.setState({ cancel: true })
	}

	onClickTrafficFunctions = (event) => {
		let elementInfo = {
			user_id: this.props.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.attributes.name.value
		}

		trafficFunctions('element', 'http://localhost:3001/traffics', elementInfo)
	}

	onSubmitTrafficFunctions = (event, res_obj) => {
		let elementInfo = {
			user_id: res_obj.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		}

		trafficFunctions('element', 'http://localhost:3001/traffics', elementInfo)
	}

	onPageLoadFunctions = () => {
		let pageInfo = {
			user_id: localStorage.user_id,
			page_name: 'edit_profile',
		}

		trafficFunctions('page', 'http://localhost:3001/pages', pageInfo)
	}

	render(){

		const errors = (!!this.state.errors) ?
			( <div className="default_error_report" key={"edit_profile_error_report"}>
					{ this.state.errors.map( error =>
						<div className="default_error_item">
							{ error }
						</div>
					)}
			  </div> )
		:
			( "" )

		const edit_form = !(this.state.updateSuccess) ?
		<div className="default_wrapper" key={"edit_profile_form"}>
			<div className="alt_header">
				<h3>Edit Profile</h3>
			</div>
			{ errors }
				<form
					name="edit_profile_form"
					interaction="submit"
					className="edit_form"
					onSubmit={ this.onSubmitEditProfileFunctions }
				>
					<div className="edit_div">
						<label htmlFor="edit_user_name">Username</label>
						<br />
						<input id="edit_user_name"
							type="text"
							onChange={ this.onChange }
							name="edit_user_name"
							placeholder={ this.props.user_name }
							value={ (this.state.edit_user_name === "") ? (this.props.user_name) : (this.state.edit_user_name) }
						/>
					</div>
					<div className="edit_div">
						<label htmlFor="edit_email">Email</label>
						<br />
						<input id="edit_email"
							type="text"
							onChange={ this.onChange }
							name="edit_email"
							placeholder={ this.props.email }
							value={ (this.state.edit_email === "") ? (this.props.email) : (this.state.edit_email) }
						/>
					</div>
					<div className="edit_div">
						<label htmlFor="edit_name">Name</label>
						<br />
						<input id="edit_first_name"
							type="text"
							onChange={ this.onChange }
							name="edit_first_name"
							placeholder={ this.props.first_name }
							value={ (this.state.edit_first_name === "") ? (this.props.first_name) : (this.state.edit_first_name) }
						/>
						<br />
						<input id="edit_last_name"
							type="text"
							onChange={ this.onChange }
							name="edit_last_name"
							placeholder={ this.props.last_name }
							value={ (this.state.edit_last_name === "") ? (this.props.last_name) : (this.state.edit_last_name) }
						/>
					</div>
					<div className="edit_div">
						<label htmlFor="edit_gender">Gender</label>
						<br />
						<select id="edit_gender"
							name="edit_gender"
							onChange={ this.onChange }
							value={ (this.state.edit_gender === "") ? (this.props.gender) : (this.state.edit_gender) }
							>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
							<option value="Non-Binary">Non-Binary</option>
						</select>
					</div>
					<div className="edit_div">
						<label htmlFor="edit_birth">Birth Day</label>
						<br />
						<select id="edit_birth_month"
							name="edit_birth_month"
							onChange={ this.onChange }
							value={ (this.state.edit_birth_month === "") ? (this.props.birth_month) : (this.state.edit_birth_month) }
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
						<input id="edit_birth_day"
							type="number"
							min="1"
							max="31"
							onChange={ this.onChange }
							name="edit_birth_day"
							placeholder={ this.props.birth_day }
							value={ (this.state.edit_birth_day === "") ? (this.props.birth_day) : (this.state.edit_birth_day) }
						/>
						<br />
						<input id="edit_birth_year"
							type="number"
							min="1900"
							max="2001"
							onChange={ this.onChange }
							name="edit_birth_year"
							placeholder={ this.props.birth_year }
							value={ (this.state.edit_birth_year === "") ? (this.props.birth_year) : (this.state.edit_birth_year) }
					/>
					</div>
					<div className="edit_div">
						<label htmlFor="edit_address">Address</label>
						<br />
						<input id="edit_house_number"
							type="number"
							min="1"
							max="9999"
							onChange={ this.onChange }
							name="edit_house_number"
							placeholder={ this.props.house_number }
							value={ (this.state.edit_house_number === "") ? (this.props.house_number) : (this.state.edit_house_number) }
						/>
						<br />
						<input id="edit_street_name"
							type="text"
							onChange={ this.onChange }
							name="edit_street_name"
							placeholder={ this.props.street_name }
							value={ (this.state.edit_street_name === "") ? (this.props.street_name) : (this.state.edit_street_name) }
						/>
						<br />
						<input id="edit_city_town"
							type="text"
							onChange={ this.onChange }
							name="edit_city_town"
							placeholder={ this.props.city_town }
							value={ (this.state.edit_city_town === "") ? (this.props.city_town) : (this.state.edit_city_town) }
						/>
						<br />
						<select id="edit_state"
							name="edit_state"
							onChange={ this.onChange }
							value={ (this.state.edit_state === "") ? (this.props.state) : (this.state.edit_state) }
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
							min="1"
							max="99999"
							onChange={ this.onChange }
							name="edit_zip_code"
							placeholder={ this.props.zip_code }
							value={ (this.state.edit_zip_code === "") ? (this.props.zip_code) : (this.state.edit_zip_code) }
						/>
					</div>
					<div className="edit_buttons_container">
							<input
								className="alt_button"
								type="submit"
								value="Update Profile"
							/>
							<button
								name="edit_profile_form"
								  interaction="reset"
								className="alt_button"
								onClick={ this.onResetFunctions }
							>
								Reset
							</button>
							{
								!(this.state.cancel) ? (
									<input
										name="edit_profile_form"
										  interaction="cancel"
										className="alt_button"
										type="reset"
										onClick={ this.onCancelFunctions }
										value="Cancel"
									/>
								)
								:
								(
									<Redirect to="/dashboard" />
								)
							}
						</div>
				</form>
		</div>
	:
		<Redirect to='./dashboard' />

		return(
			<>
				{
					(() => {
						switch(localStorage.length === 0) {
							case true: return <Redirect to='/' />;
							case false: return edit_form;
							default: return <>blank</>;
						}
					})()
				}
			</>
		)
	}
}