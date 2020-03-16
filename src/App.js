import React from 'react'

import Header from './Header'
import Home from './index/Home'
import Footer from './Footer'

import LogIn from './user/LogIn'
import SignUp from './user/SignUp'
import LogOut from './user/LogOut'

import Dashboard from './user/dashboard/Dashboard'
import EditProfile from './user/dashboard/EditProfile'
import DeleteProfile from './user/dashboard/DeleteProfile'

import QuickPlayContainer from './question/QuickPlayContainer'
import PlayByDifficultyContainer from './question/PlayByDifficultyContainer'
import PlayByCategoryContainer from './question/PlayByCategoryContainer'

import TermsOfService from './docs/TermsOfService'
import Privacy from './docs/Privacy'
import Disclaimer from './docs/Disclaimer'

import Backroom from './admin/Backroom'
import TestTemp from './admin/TestTemp'


import Error from './Error'

import {
		//  NavLink,
		//  Link,
		//  Redirect,
		Route,
		Switch,
		//  useRouteMatch,
		//  useParams
	} from 'react-router-dom'

import './App.css'
import './css/Response.css'
import './css/Loading.css'

export default class App extends React.Component {

	state = {
		// ~~~~~~~~~~~~~~~~~~~~
		token: null,
		loggedIn: null,
		// ~~~~~~~~~~~~~~~~~~~~
		user_id: null,
		user_name: null,
		email: null,
		// access: "guest",
		// ~~~~~~~~~~~~~~~~~~~~
		first_name: null,
		last_name: null,
		gender: null,
		// ~~~~~~~~~~~~~~~~~~~~
		birth_day: null,
		birth_month: null,
		birth_year: null,
		// ~~~~~~~~~~~~~~~~~~~~
		house_number: null,
		street_name: null,
		city_town: null,
		state: null,
		zip_code: null,
		// ~~~~~~~~~~~~~~~~~~~~
		join_day: null,
		join_month: null,
		join_year: null,
		// ~~~~~~~~~~~~~~~~~~~~
		backroom_display: null
	}

	componentDidMount(){
		if (!localStorage.token)  {
			localStorage.clear()
		} else {
			this.setState({
				// ~~~~~~~~~~~~~~~~~~~~
				token: localStorage.token,
				loggedIn: true,
				// ~~~~~~~~~~~~~~~~~~~~
				user_id: parseInt(localStorage.user_id, 10),
				user_name: localStorage.user_name,
				email: localStorage.email,
				access: localStorage.access,
				// ~~~~~~~~~~~~~~~~~~~~
				first_name: localStorage.first_name,
				last_name: localStorage.last_name,
				gender: localStorage.gender,
				// ~~~~~~~~~~~~~~~~~~~~
				birth_day: localStorage.birth_day,
				birth_month: localStorage.birth_month,
				birth_year: localStorage.birth_year,
				// ~~~~~~~~~~~~~~~~~~~~
				house_number: localStorage.house_number,
				street_name: localStorage.street_name,
				city_town: localStorage.city_town,
				state: localStorage.state,
				zip_code: localStorage.zip_code,
				// ~~~~~~~~~~~~~~~~~~~~
				join_day: localStorage.join_day,
				join_month: localStorage.join_month,
				join_year: localStorage.join_year,
			})
		}
	}

	setToken = ({ token, user_id, user_name })  =>{

		localStorage.user_id = user_id
		localStorage.token = token

		this.setState({
			token: token,
			loggedIn: true,
		})

		fetch(`http://localhost:3001/users/${user_id}`)
		.then(res => res.json())
		.then(res_obj => {
			let current_user = res_obj.data.attributes.user

			localStorage.user_name = current_user.user_name
			localStorage.email = current_user.email
			localStorage.access = current_user.access
			// ~~~~~~~~~~~~~~~~~~~~
			localStorage.first_name = current_user.first_name
			localStorage.last_name = current_user.last_name
			localStorage.gender = current_user.gender
			// ~~~~~~~~~~~~~~~~~~~~
			localStorage.birth_day = current_user.birth_day
			localStorage.birth_month = current_user.birth_month
			localStorage.birth_year = current_user.birth_year
			// ~~~~~~~~~~~~~~~~~~~~
			localStorage.house_number = current_user.house_number
			localStorage.street_name = current_user.street_name
			localStorage.city_town = current_user.city_town
			localStorage.state = current_user.state
			localStorage.zip_code = current_user.zip_code
			// ~~~~~~~~~~~~~~~~~~~~
			localStorage.join_day = current_user.join_day
			localStorage.join_month = current_user.join_month
			localStorage.join_year = current_user.join_year

			this.setState({
				user_id: user_id,
				user_name: current_user.user_name,
				email: current_user.email,
				access: current_user.access,
				// ~~~~~~~~~~~~~~~~~~~~
				first_name: current_user.first_name,
				last_name: current_user.last_name,
				gender: current_user.gender,
				// ~~~~~~~~~~~~~~~~~~~~
				birth_day: current_user.birth_day,
				birth_month: current_user.birth_month,
				birth_year: current_user.birth_year,
				// ~~~~~~~~~~~~~~~~~~~~
				house_number: current_user.house_number,
				street_name: current_user.street_name,
				city_town: current_user.city_town,
				state: current_user.state,
				zip_code: current_user.zip_code,
				// ~~~~~~~~~~~~~~~~~~~~
				join_day: current_user.join_day,
				join_month: current_user.join_month,
				join_year: current_user.join_year,
			})
		})
	}

	updateLogin = () => {
		this.setState({
			loggedIn: !this.state.loggedIn
		})
	}

	logOut = () => {
		localStorage.clear()

		this.setState({
			// ~~~~~~~~~~~~~~~~~~~~
			token: null,
			loggedIn: null,
			// ~~~~~~~~~~~~~~~~~~~~
			user_id: null,
			user_name: null,
			email: null,
			// access: "guest",
			// ~~~~~~~~~~~~~~~~~~~~
			first_name: null,
			last_name: null,
			gender: null,
			// ~~~~~~~~~~~~~~~~~~~~
			birth_day: null,
			birth_month: null,
			birth_year: null,
			// ~~~~~~~~~~~~~~~~~~~~
			house_number: null,
			street_name: null,
			city_town: null,
			state: null,
			zip_code: null,
			// ~~~~~~~~~~~~~~~~~~~~
			join_day: null,
			join_month: null,
			join_year: null,
		})
	}

	update_backroom_from_header = (index_msg) => {
		this.setState({
			backroom_display: index_msg
		})
	}

	update_traffic_data = (res_obj) => {
		fetch("http://localhost:3001/traffics", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				user_id: res_obj.user_id,
				interaction: res_obj.interaction,
				element: res_obj.element
			})
		})
	}

	update_page_data = (res_obj) => {
		fetch("http://localhost:3001/pages", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
				body: JSON.stringify({
				user_id: res_obj.user_id,
				page_name: res_obj.page_name,
			})
		})
	}

	render(){

		const showHeader =
			<Header
				update_traffic_data={ this.update_traffic_data }
				// ~~~~~~~~~~~~~~~~~~~~
				token={ this.state.token }
				user_id={ this.state.user_id }
				user_name={ this.state.user_name }
				access={ this.state.access }
				logOut={ this.logOut }
				update_backroom_from_header={ this.update_backroom_from_header }
				// ~~~~~~~~~~~~~~~~~~~~
			/>

		const showFooter =
			<Footer
				update_traffic_data={ this.update_traffic_data }
				// ~~~~~~~~~~~~~~~~~~~~
			/>

		return (
			<>
				<div className="header">
					{ showHeader }
				</div>
				<div className="main_container">
					<Switch>
						<Route exact path='/'>
							<Home
								update_traffic_data={ this.update_traffic_data }
								update_page_data={ this.update_page_data }
								// ~~~~~~~~~~~~~~~~~~~~
								user_id={ this.state.user_id }
							/>
						</Route>
						<Route exact path='/log_in'>
							<LogIn
								setToken={ this.setToken }
								update_traffic_data={ this.update_traffic_data }
								update_page_data={ this.update_page_data }
								// ~~~~~~~~~~~~~~~~~~~~
								updateLogin={ this.updateLogin }
							/>
						</Route>
						<Route exact path='/sign_up'>
							<SignUp
								setToken={ this.setToken }
								update_traffic_data={ this.update_traffic_data }
								update_page_data={ this.update_page_data }
								// ~~~~~~~~~~~~~~~~~~~~
								updateLogin={ this.updateLogin }
							/>
						</Route>
						<Route exact path='/dashboard'>
							<Dashboard
								update_traffic_data={ this.update_traffic_data }
								update_page_data={ this.update_page_data }
								// ~~~~~~~~~~~~~~~~~~~~
								user_id={ this.state.user_id }
							/>
						</Route>
						<Route exact path='/edit_profile'>
							<EditProfile
								setToken={ this.setToken }
								update_traffic_data={ this.update_traffic_data }
								update_page_data={ this.update_page_data }
								// ~~~~~~~~~~~~~~~~~~~~
								user_id= {this.state.user_id }
								user_name={ this.state.user_name }
								email={ this.state.email }
								access={ this.state.access }
								// ~~~~~~~~~~~~~~~~~~~~
								first_name={ this.state.first_name }
								last_name={ this.state.last_name }
								gender={ this.state.gender }
								// ~~~~~~~~~~~~~~~~~~~~
								birth_day={ this.state.birth_day }
								birth_month={ this.state.birth_month }
								birth_year={ this.state.birth_year }
								// ~~~~~~~~~~~~~~~~~~~~
								house_number={ this.state.house_number }
								street_name={ this.state.street_name }
								city_town={ this.state.city_town }
								state={ this.state.state }
								zip_code={ this.state.zip_code }
							/>
						</Route>
						<Route exact path='/delete_profile'>
							<DeleteProfile
								setToken={ this.setToken }
								update_traffic_data={ this.update_traffic_data }
								update_page_data={ this.update_page_data }
								// ~~~~~~~~~~~~~~~~~~~~
								user_id={this.state.user_id }
								access={ this.state.access }
								log_out={ this.logOut }
							/>
						</Route>
						<Route exact path='/quick_play'>
							<QuickPlayContainer
								update_traffic_data={ this.update_traffic_data }
								update_page_data={ this.update_page_data }
								// ~~~~~~~~~~~~~~~~~~~~
								user_id={ this.state.user_id }
								user_name={ this.state.user_name }
								first_name={ this.state.first_name }
							/>
						</Route>
						<Route exact path='/play_by_difficulty'>
							<PlayByDifficultyContainer
								update_traffic_data={ this.update_traffic_data }
								update_page_data={ this.update_page_data }
								// ~~~~~~~~~~~~~~~~~~~~
								user_id={ this.state.user_id }
								user_name={ this.state.user_name }
								first_name={ this.state.first_name }
							/>
						</Route>
						<Route exact path='/play_by_category'>
							<PlayByCategoryContainer
								update_traffic_data={ this.update_traffic_data }
								update_page_data={ this.update_page_data }
								// ~~~~~~~~~~~~~~~~~~~~
								user_id={ this.state.user_id }
								user_name={ this.state.user_name }
								first_name={ this.state.first_name }
							/>
						</Route>
						<Route exact path='/log_out'>
							<LogOut
								update_traffic_data={ this.update_traffic_data }
								update_page_data={ this.update_page_data }
								// ~~~~~~~~~~~~~~~~~~~~
								token={ this.state.token }
								user_id={ this.state.user_id }
								user_name={ this.state.user_name }
								access={ this.state.access }
								logOut={ this.logOut }
							/>
						</Route>
						<Route exact path='/backroom'>
							<Backroom
								token={ this.state.token }
								user_name={ this.state.user_name }
								access={ this.state.access }
								update_backroom_from_header={ this.state.backroom_display }
							/>
						</Route>
						<Route exact path='/backroom/test_temp'>
							<TestTemp
								token={ this.state.token }
							/>
						</Route>
						<Route exact path='/terms_of_service'>
							<TermsOfService
								update_page_data={ this.update_page_data }
								// ~~~~~~~~~~~~~~~~~~~~
							/>
						</Route>
						<Route exact path='/privacy'>
							<Privacy
								update_page_data={ this.update_page_data }
								// ~~~~~~~~~~~~~~~~~~~~
							/>
						</Route>
						<Route exact path='/disclaimer'>
							<Disclaimer
								update_page_data={ this.update_page_data }
								// ~~~~~~~~~~~~~~~~~~~~
							/>
						</Route>
						<Route component={ Error } />
					</Switch>
				</div>
				<div className="footer">
					{ showFooter }
				</div>
			</>
		)
	}
}