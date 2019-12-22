import React from 'react'

import QuestionDisplay from './QuestionDisplay'

import '../css/Questions.css'

import {
		//  NavLink,
		//  Link,
		//  Redirect,
		// Route,
		// Switch,
		//  useRouteMatch,
		//  useParams
	} from 'react-router-dom'

export default class QuestionContainer extends React.Component{

	state = {
		question: {},
		user: {},
		display: 'question'
	}

	componentDidMount(){
		this.onMountAsync()
	}

	onMountAsync = async () => {
		try {
			let props = await this.props

			await this.props.user_id;

			this.onPageLoadFunctions(props)
			this.getQuestion()
			this.getUser()

		} catch(errors) {
			console.log(errors);
		}
	}

	getQuestion = () => {
		let n = Math.floor(Math.random() * 49) + 1

		fetch(`http://localhost:3001/questions/${n}`)
		.then(res => res.json())
		.then(res_obj =>
			this.setState({
				question: res_obj.data.attributes.question
			})
		)
	}

	getUser = () => {
		fetch(`http://localhost:3001/users/${this.props.user_id}`)
		.then(res => res.json())
		.then(res_obj =>
			this.setState({
				user: res_obj.data.attributes.user
			})
		)
	}

	nextQuestion = (question) => {
		this.setState({
			display: question
		}, this.getQuestion())
	}

	onClickUpdateTrafficFunctions = (event) => {
		this.props.update_traffic_data({
			user_id: this.props.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		})
	}

	onPageLoadFunctions = (props) => {
		this.props.update_page_data({
			user_id: props.user_id,
			page_name: "user_dashboard"
		})
	}

	render(){

		const blank = <></>

		const displayQuestion =
				<QuestionDisplay
					question={ this.state.question }
					user={ this.state.user }
					nextQuestion={ this.nextQuestion }
				/>

		return(
			<div className="question_wrapper">
			{
				(() => {
					switch(this.state.display) {
						case 'question': return displayQuestion;
						default: return blank;
					}
				})()
			}
			</div>
		)
	}
}