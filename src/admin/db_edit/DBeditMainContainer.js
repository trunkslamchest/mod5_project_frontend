import React from 'react'

import DBeditIndex from './DBeditIndex'
import DBeditUsersContainer from './users/DBeditUsersContainer'
import DBeditQuestionsContainer from './questions/DBeditQuestionsContainer'
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

	showDBquestions = () => {
		this.setState({
			display: 'questions'
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
			<>
				<div className="DBedit_navbar">
					<div className="DBedit_navbar_item" onClick={ this.showDBusers }>
						<p>Users</p>
					</div>
					<div className="DBedit_navbar_item" onClick={ this.showDBquestions }>
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
							case 'questions': return <DBeditQuestionsContainer showDBquestions={ this.showDBquestions } />;
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