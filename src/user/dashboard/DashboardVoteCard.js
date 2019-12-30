import React from 'react'

import {
	//  Link
	} from 'react-router-dom'

export default class DashboardVoteCard extends React.Component{

	state={
		allVotes: []
	}

	componentDidMount(){
		this.getVotes()
	}

	convertedVote = () => {
		if (this.props.vote.vote_num === 1){
			return "Up Vote"
		} else if (this.props.vote.vote_num === 0) {
			return "No Vote"
		} else {
			return "Down Vote"
		}
	}

	getVotes = () => {
		fetch(`http://localhost:3001/questions/${this.props.question.id}`)
		.then(res => res.json())
		.then(res_obj =>
			this.setState({
				allVotes: res_obj.data.attributes.votes.map(vote => vote.vote_num)
			})
		)
	}

	calculateUpVotes = () => {
		let total_votes = this.state.allVotes.length
		let up_votes = this.state.allVotes.filter(vote => vote === 1 )
		let total_up_votes = up_votes.length
		let up_vote_percent = ((total_up_votes / total_votes) * 100).toFixed(2)
		if (up_votes.length === 0) {
			return "0%"
		} else {
			return `${up_vote_percent}%`
		}
	}

	calculateNoVotes = () => {
		let total_votes = this.state.allVotes.length
		let no_votes = this.state.allVotes.filter(vote => vote === 0 )
		let total_no_votes = no_votes.length
		let no_vote_percent = ((total_no_votes / total_votes) * 100).toFixed(2)
		if (no_votes.length === 0) {
			return "0%"
		} else {
			return `${no_vote_percent}%`
		}
	}

	calculateDownVotes = () => {
		let total_votes = this.state.allVotes.length
		let down_votes = this.state.allVotes.filter(vote => vote === -1 )
		let total_down_votes = down_votes.length
		let down_vote_percent = ((total_down_votes / total_votes) * 100).toFixed(2)
		if (down_votes.length === 0) {
			return "0%"
		} else {
			return `${down_vote_percent}%`
		}
	}

	render(){

		const vote_total =
		<>
			<div className="vote_total">
				<ul>
				Overall Votes:
				<li>Up Votes: { this.calculateUpVotes() }</li>
				<li>No Votes: { this.calculateNoVotes() }</li>
				<li>Down Votes: { this.calculateDownVotes() }</li>
				</ul>
			</div>
		</>

		return(
			<ul>
				<li>Question: { this.props.question.question_desc }</li>
				<li> { vote_total } </li>
				<li>Your Vote: { this.convertedVote() }</li>
			</ul>
		)
	}
}