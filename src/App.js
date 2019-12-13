import React from 'react'

import Header from './Header'
import Home from './Home'
import Footer from './Footer'

import LogIn from './user/LogIn'
import SignUp from './user/SignUp'
import Dashboard from './user/Dashboard'
import EditProfile from './user/EditProfile'
import DeleteProfile from './user/DeleteProfile'


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

export default class App extends React.Component {

  state = {
    // ~~~~~~~~~~~~~~~~~~~~
    token: null,
    loggedIn: null,
    // ~~~~~~~~~~~~~~~~~~~~
    user_id: null,
    user_name: null,
    email: null,
    access: "guest",
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

      // console.log("current user", current_user)

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
      access: "guest",
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

  formatted_birth_day = () => {
    const number_ends = [ "st", "nd", "rd", "th" ]
    const number_split = localStorage.birth_day.split('').pop()

    if ((parseInt(this.state.birth_day, 10) > 10) && (parseInt(this.state.birth_day, 10) < 19)) {
      return `${this.state.birth_day}` + number_ends[3]
    } else {
  		if ((number_split === '1')) {
				return `${this.state.birth_day}` + number_ends[0]
			} else if (number_split === '2') {
				return `${this.state.birth_day}` + number_ends[1]
			} else if (number_split === '3') {
				return `${this.state.birth_day}` + number_ends[2]
			} else {
				return `${this.state.birth_day}` + number_ends[3]
			}
    }
  }

  formatted_join_day = () => {
    const number_ends = [ "st", "nd", "rd", "th" ]
    const number_split = localStorage.join_day.split('').pop()

    if ((parseInt(this.state.join_day, 10) > 10) && (parseInt(this.state.join_day, 10) < 19)) {
      return `${this.state.join_day}` + number_ends[3]
    } else {
  		if ((number_split === '1')) {
				return `${this.state.join_day}` + number_ends[0]
			} else if (number_split === '2') {
				return `${this.state.join_day}` + number_ends[1]
			} else if (number_split === '3') {
				return `${this.state.join_day}` + number_ends[2]
			} else {
				return `${this.state.join_day}` + number_ends[3]
			}
    }
  }

  render(){
    // console.log("UserID", this.state.loggedInUserID)
    // console.log("token", this.state.token)
    // console.log("logged in", this.state.loggedIn)
    // console.log("state", this.state)
    // console.log((this.state.birth_day) ? this.format_birthday() : "" )
    // console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

    const showHeader =
      <Header
        token={ this.state.token }
		    user_name={ this.state.user_name }
        logOut={ this.logOut }
      />

    const showFooter =
      <Footer
        
      />

    return (
      <>
        <div className="header">
          { showHeader }
        </div>
    		<div className="main_wrapper">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/login'>
              <LogIn
                setToken={ this.setToken }
                updateLogin={ this.updateLogin }
              />
            </Route>
            <Route exact path='/signup'>
              <SignUp
                setToken={ this.setToken }
                updateLogin={ this.updateLogin }
               />
             </Route>
            <Route exact path='/dashboard'>
              <Dashboard
                user_id={ this.state.user_id }
                user_name={ this.state.user_name }
                email={ this.state.email }
                access={ this.state.access }
              // ~~~~~~~~~~~~~~~~~~~~
                first_name={ this.state.first_name }
                last_name={ this.state.last_name }
                gender={ this.state.gender }
              // ~~~~~~~~~~~~~~~~~~~~
                birth_day={ this.state.birth_day }
                formatted_birth_day={ (this.state.birth_day) ? this.formatted_birth_day() : "" }
                birth_month={ this.state.birth_month }
                birth_year={ this.state.birth_year }
              // ~~~~~~~~~~~~~~~~~~~~
                house_number={ this.state.house_number }
                street_name={ this.state.street_name }
                city_town={ this.state.city_town }
                state={ this.state.state }
                zip_code={ this.state.zip_code }
              // ~~~~~~~~~~~~~~~~~~~~
                join_day={ this.state.join_day }
                formatted_join_day={ (this.state.join_day) ? this.formatted_join_day() : "" }
                join_month={ this.state.join_month }
                join_year={ this.state.join_year }
              />
            </Route>
            <Route exact path='/edit_profile'>
              <EditProfile
                setToken={ this.setToken }
                user_id= {this.state.user_id }
                user_name={ this.state.user_name }
                email={ this.state.email }
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
                user_id={this.state.user_id }
                log_out={ this.logOut }
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
