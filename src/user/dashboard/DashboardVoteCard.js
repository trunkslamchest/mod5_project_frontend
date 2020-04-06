import React from 'react'

export default class DashboardVoteCard extends React.Component{

	state={
		allVotes: [],
		vote: "",
		mounted: false,
		updated_votes: false,
		converted_votes: false
	}

	componentDidMount(){
		this.setState({ mounted: true })
	}

	componentDidUpdate(){
		if (this.state.mounted && this.state.updated_votes === false) {
			this.getAllVotes()
		}
		if (this.state.updated_votes && this.state.converted_votes === false) {
			this.convertVote()
		}
	}

	convertVote = () => {
		if (this.props.vote.vote_num === 1){
			this.setState({ vote: "Up Vote" })
		} else if (this.props.vote.vote_num === 0) {
			this.setState({ vote: "No Vote" })
		} else {
			this.setState({ vote: "Down Vote" })
		}

		this.setState({ converted_votes: true })
	}

	getAllVotes = () => {
		fetch(`http://localhost:3001/questions/${this.props.question.id}`)
		.then(res => res.json())
		.then(res_obj =>
			this.setState({
				allVotes: res_obj.data.attributes.votes.map(vote => vote.vote_num),
				updated_votes: true
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

		const vote_header_switch =
			(() => {
				switch(this.state.vote) {
					case 'Up Vote': return "vote_card_header_upvote";
					case 'No Vote': return "vote_card_header";
					case 'Down Vote': return "vote_card_header_downvote";
					default: return "vote_card_header";
				}
			})()

		return(
			<div className="vote_card">
				<div className={ vote_header_switch }>
					<h3>{ this.props.question.question_desc }</h3>
				</div>
				<h4>Overall Votes</h4>
				<ul>
					<li><h4>Up Votes</h4> { this.calculateUpVotes() }</li>
					<li><h4>No Votes</h4> { this.calculateNoVotes() }</li>
					<li><h4>Down Votes</h4> { this.calculateDownVotes() }</li>
				</ul>
				<span><h4>Your Vote</h4> { this.state.vote }</span>
			</div>
		)
	}
}

