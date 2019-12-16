import React from 'react'
import {
        //  Link
        } from 'react-router-dom'

import DBeditIndex from './DBeditIndex'
import DBeditUsersContainer from './DBeditUsersContainer'
import DBeditThings from './DBeditThings'
import DBeditVotes from './DBeditVotes'
import DBeditComments from './DBeditComments'



import './DBedit.css'

export default class DBeditMainContainer extends React.Component{

	state = {
		display: 'index'
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

	showDBusers = () => {
		this.setState({
			display: 'users'
		})
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
		return(
				<div className="DBedit_main_window">
					<h3>Database Editor</h3>
					<div className="DBedit_cat_bar">
						<div className="DBedit_cat_bar_item">
							<p onClick={ this.showDBusers }>Users</p>
						</div>
						<div className="DBedit_cat_bar_item">
							<p onClick={ this.showDBthings }>Things</p>
						</div>
						<div className="DBedit_cat_bar_item">
							<p onClick={ this.showDBvotes }>Votes</p>
						</div>
						<div className="DBedit_cat_bar_item">
							<p onClick={ this.showDBcomments }>Comments</p>
						</div>
					</div>
					{
						(() => {
							switch(this.state.display) {
							case 'index': return <DBeditIndex />;
							case 'users': return <DBeditUsersContainer />;
							case 'things': return <DBeditThings />;
							case 'votes': return <DBeditVotes />;
							case 'comments': return <DBeditComments />;
							default: return <DBeditIndex />;
							}
						})()
					}
				</div>
		)
	}
}