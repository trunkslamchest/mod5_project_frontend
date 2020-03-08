import React, { useEffect, useCallback } from 'react'
import { NavLink } from 'react-router-dom'

import index_logo from './assets/index_logo_blue3.png'

import './css/Home.css'

const Home = (props) => {

	const { update_page_data, update_traffic_data } = props

	// componentDidMount(){
	// 	onPageLoadFunctions()
	// }

	const onClickLogInFunctions = (event) => {
		onClickUpdateTrafficFunctions(event)
	}

	const onClickSignUpFunctions = (event) => {
		onClickUpdateTrafficFunctions(event)
	}

	const onClickQuickPlayFunctions = (event) => {
		onClickUpdateTrafficFunctions(event)
	}

	const onClickPlayByDifficultyFunctions = (event) => {
		onClickUpdateTrafficFunctions(event)
	}

	const onClickPlayByCategoryFunctions = (event) => {
		onClickUpdateTrafficFunctions(event)
	}

	const onClickUpdateTrafficFunctions = (event) => {
		update_traffic_data({
			user_id: props.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		})
	}

	const onPageLoadFunctions = useCallback((temp) => {
		update_page_data({
			user_id: localStorage.user_id,
			page_name: "index",
		}, console.log(temp))
	}, [update_page_data])

	useEffect(() => {onPageLoadFunctions()}, [onPageLoadFunctions])

		const quick_play_button =
			<NavLink
				exact to="/quick_play"
				key={"quick_play_link"}
				name="quick_play_button"
				interaction="click"
				className="quick_play_button"
				onClick={onClickQuickPlayFunctions }
			>
				Quick Play
			</NavLink>

		const play_by_difficulty =
			<NavLink
				exact to="/play_by_difficulty"
				key={"play_by_difficulty_link"}
				name="play_by_difficulty_button"
				interaction="click"
				className="play_by_difficulty_button"
				onClick={onClickPlayByDifficultyFunctions }
			>
				Play By Difficulty
			</NavLink>

		const play_by_category =
			<NavLink
				exact to="/play_by_category"
				key={"play_by_category_link"}
				name="play_by_category_button"
				interaction="click"
				className="play_by_category_button"
				onClick={onClickPlayByCategoryFunctions }
			>
				Play By Category
			</NavLink>

		const log_in_button =
			<NavLink
				exact to="/log_in"
				key={"log_in_link"}
				name="log_in_button"
				interaction="click"
				className="log_in_button"
				onClick={onClickLogInFunctions }
			>
				Log In
			</NavLink>

		const sign_up_button =
			<NavLink
				exact to="/sign_up"
				key={"sign_up_link"}
				name="sign_up_button"
				interaction="click"
				className="sign_up_button"
				onClick={onClickSignUpFunctions }
			>
				Sign Up
			</NavLink>

		const logged_in_home = <>
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
		</>

		const logged_out_home = <>
			<div className="logo_container">
				<img src={index_logo} alt={"logo"}/>
			</div>
			<div className="log_in_sign_up_container">
				{ log_in_button }
				{ sign_up_button }
			</div>
		</>

		return(
			<div className="default_wrapper">
				{ localStorage.length === 0 ? logged_out_home : logged_in_home }
			</div>
		)

}

export default Home