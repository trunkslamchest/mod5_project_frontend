import React, { useEffect, useCallback } from 'react'

import trafficFunctions from '../utility/trafficFunctions'

import index_logo from '../assets/index_logo_blue3.png'

import IndexButton from '../UI/indexButton'

import './Home.css'

const Home = (props) => {

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
		let elementInfo = {
			user_id: localStorage.user_id,
			interaction: event.target.attributes.interaction.value,
			element: event.target.name
		}

		trafficFunctions('element', 'http://localhost:3001/traffics', elementInfo)
	}

	const onPageLoadFunctions = useCallback(() => {
		var pageInfo = {
			user_id: localStorage.user_id,
			page_name: 'index',
		}

		trafficFunctions('page', 'http://localhost:3001/pages', pageInfo)
	}, [])

	useEffect(() => {onPageLoadFunctions()}, [onPageLoadFunctions])

	const quick_play_button =
		<IndexButton
			link="/quick_play"
			buttonName="quick_play_button"
			interaction="click"
			classType="quick_play_button"
			onClick={ onClickQuickPlayFunctions }
		>
			Quick Play
		</IndexButton>

	const play_by_difficulty =
		<IndexButton
			link="/play_by_difficulty"
			buttonName="play_by_difficulty_button"
			interaction="click"
			classType="play_by_difficulty_button"
			onClick={ onClickPlayByDifficultyFunctions }
		>
			Play By Difficulty
		</IndexButton>

	const play_by_category =
		<IndexButton
			link="/play_by_category"
			buttonName="play_by_category_button"
			interaction="click"
			classType="play_by_category_button"
			onClick={ onClickPlayByCategoryFunctions }
		>
			Play By Category
		</IndexButton>

	const log_in_button =
		<IndexButton
			link="/log_in"
			buttonName="log_in_button"
			interaction="click"
			classType="log_in_button"
			onClick={ onClickLogInFunctions }
		>
			Log In
		</IndexButton>

	const sign_up_button =
		<IndexButton
			link="/sign_up"
			buttonName="sign_up_button"
			interaction="click"
			classType="sign_up_button"
			onClick={ onClickSignUpFunctions }
		>
			Sign Up
		</IndexButton>

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