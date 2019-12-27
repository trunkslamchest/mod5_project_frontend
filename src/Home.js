import React from 'react'

import index_logo from './assets/index_logo_blue3.png'

import {
	 NavLink,
	//  Link,
	//  Redirect,
	// Route,
	// Switch,
	//  useRouteMatch,
	//  useParams
} from 'react-router-dom'

import './css/Home.css'

export default class Home extends React.Component {

	componentDidMount(){
		this.onMountAsync()
	}

	onMountAsync = async () => {
		try {
			await this.props
			await this.props.user_id;
			this.onPageLoadFunctions()
		} catch(errors) {
			console.log(errors);
		}
	}

	onPageLoadFunctions = (user_id) => {
		this.props.update_page_data({
			user_id: this.props.user_id,
			page_name: "index"
		})
	}

	onClickUpdateTrafficFunctions = (event) => {
		this.props.update_traffic_data({
			user_id: this.props.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		})
	}

	render(){

		const quick_play_button = [
			<NavLink
				exact to="/quick_play"
				key={"quick_play_link"}
				name="quick_play_button"
				interaction="click"
				className="quick_play_button"
				onClick={this.onClickQuickPlayFunctions }
			>
				Quick Play
			</NavLink>
		]

		const play_by_difficulty = [
			<NavLink
				exact to="/play_by_difficulty"
				key={"play_by_difficulty_link"}
				name="play_by_difficulty_button"
				interaction="click"
				className="play_by_difficulty_button"
				onClick={this.onClickPlayByDifficultyFunctions }
			>
				Play By Difficulty
			</NavLink>
		]

		const play_by_category = [
			<NavLink
				exact to="/play_by_category"
				key={"play_by_category_link"}
				name="play_by_category_button"
				interaction="click"
				className="play_by_category_button"
				onClick={this.onClickPlayByCategoryFunctions }
			>
				Play By Category
			</NavLink>
		]

		return(
			<div className="default_wrapper">
				<div className="logo_container">
					<img src={index_logo} alt={"logo"}/>
				</div>
				<div className="play_buttons_container">
					<div className="quick_play_container">
						{ quick_play_button }
					</div>
					<div className="other_play_container">
						{ play_by_difficulty }
						{ play_by_category }
					</div>
				</div>
			</div>
		)
	}
}