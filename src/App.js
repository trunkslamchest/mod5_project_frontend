import React from 'react'

import Header from './Header'
import Home from './Home'

import LogIn from './user/LogIn'
import SignUp from './user/SignUp'
import Dashboard from './user/Dashboard'
import EditProfile from './user/EditProfile'

import Error from './Error'

import {
         NavLink,
         Link,
         Redirect,
         Route,
         Switch,
         useRouteMatch,
         useParams
        } from 'react-router-dom'

import './App.css'

export default class App extends React.Component {

  state = {
    token: null,
    loggedIn: null,
    user_id: null,
    user_name: null,
    first_name: null,
    last_name: null
  }

  componentDidMount(){
    if (!localStorage.token)  {
      localStorage.clear()
    } else {
      this.setState({
        token: localStorage.token,
        loggedIn: true,
        user_id: parseInt(localStorage.user_id, 10),
        user_name: localStorage.user_name,
        first_name: localStorage.first_name,
        last_name: localStorage.last_name
      })
    }
  }

  setToken = ({ token, user_id, user_name })  =>{
    localStorage.user_id = user_id
    localStorage.token = token

    fetch(`http://localhost:3001/users/${user_id}`)
    .then(res => res.json())
    .then(res_obj => {
      let current_user = res_obj.data.attributes.user

      localStorage.user_name = current_user.user_name
      localStorage.first_name = current_user.first_name
      localStorage.last_name = current_user.last_name

      this.setState({
  	    user_name: current_user.user_name,
        first_name: current_user.first_name,
        last_name: current_user.last_name,
      })
    })

    this.setState({
      token: token,
      loggedIn: true,
      user_id: user_id,
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
      token: null,
      loggedIn: null,
      user_id: null,
      user_name: null,
      first_name: null,
      last_name: null
    })
  }

  render(){
    // console.log("UserID", this.state.loggedInUserID)
    // console.log("token", this.state.token)
    // console.log("cart", this.state.cart)
    // console.log("display", this.state.display)
    // console.log("logged in", this.state.loggedIn)
    // console.log("state", this.state)
    // console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

    const showHeader =
      <Header
        token={ this.state.token }
		    user_name={ this.state.user_name }
        logOut={ this.logOut }
      />

    return (
      <>
        <div className="Header">
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
                user_name={ this.state.user_name }
                first_name={ this.state.first_name }
              />
            </Route>
            <Route exact path='/edit_profile'>
              <EditProfile
                setToken={ this.setToken }
                user_id= {this.state.user_id }
                user_name={ this.state.user_name }
              />
            </Route>
            <Route component={ Error } />
          </Switch>
    		</div>
      </>
    )
  }
}
