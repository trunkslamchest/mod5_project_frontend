import React from 'react'
import {
        //  Link
        } from 'react-router-dom'

import DBeditIndex from './DBeditIndex'
import DBeditUsersContainer from './DBeditUsersContainer'
import DBeditQuestions from './DBeditQuestions'
import DBeditVotes from './DBeditVotes'
import DBeditComments from './DBeditComments'



import './DBedit.css'

export default class DBeditMainContainer extends React.Component{

	state = {
		display: 'index',
	}

	componentDidMount(){
		this.setState({
			display: 'index'
		})
	}

	UNSAFE_componentWillReceiveProps(nextProps){
		this.setState({
			display: nextProps.update_db_display,
		})
	}

	showDBIndex = () => {
		this.setState({
			display: 'index'
		})
	}

	showDBusers = (signal) => {
		if(signal !== "signal") {
			this.setState({
				display: 'users',
			})
		}
	}

	showDBthings = () => {
		this.setState({
			display: 'things'
		})
	}

	showDBvotes = () => {
		this.setState({
			display: 'votes'
		})
	}

	showDBcomments = () => {
		this.setState({
			display: 'comments'
		})
	}

	render(){
		// console.log("main container state", this.state)
		// console.log("main container props", this.props)
		return(
				<>
					<div className="DBedit_navbar">
						<div className="DBedit_navbar_item" onClick={ this.showDBusers }>
							<p>Users</p>
						</div>
						<div className="DBedit_navbar_item" onClick={ this.showDBthings }>
							<p>Questions</p>
						</div>
						<div className="DBedit_navbar_item" onClick={ this.showDBvotes }>
							<p>Votes</p>
						</div>
						<div className="DBedit_navbar_item" onClick={ this.showDBcomments }>
							<p>Comments</p>
						</div>
					</div>
					{
						(() => {
							switch(this.state.display) {
								case 'index': return <DBeditIndex />;
								case 'users': return <DBeditUsersContainer showDBusers={ this.showDBusers } />;
								case 'things': return <DBeditQuestions />;
								case 'votes': return <DBeditVotes />;
								case 'comments': return <DBeditComments />;
								default: return <DBeditIndex />;
							}
						})()
					}
				</>
		)
	}
}