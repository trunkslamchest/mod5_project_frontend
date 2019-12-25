import React from 'react'

import {
        //  Link
        } from 'react-router-dom'

export default class DashboardStatsCategory extends React.Component{

	state = {
		user_questions_anime: 0,
		user_questions_books: 0,
		user_questions_computers: 0,
		user_questions_film: 0,
		user_questions_general_knowledge: 0,
		user_questions_geography: 0,
		user_questions_history: 0,
		user_questions_music: 0,
		user_questions_mythology: 0,
		user_questions_nature: 0,
		user_questions_politics: 0,
		user_questions_science: 0,
		user_questions_sports: 0,
		user_questions_technology: 0,
		user_questions_television: 0,
		user_questions_theatre: 0,
		user_questions_vehicles: 0,
		user_questions_video_games: 0,
		user_correct_anime: 0,
		user_correct_books: 0,
		user_correct_computers: 0,
		user_correct_film: 0,
		user_correct_general_knowledge: 0,
		user_correct_geography: 0,
		user_correct_history: 0,
		user_correct_music: 0,
		user_correct_mythology: 0,
		user_correct_nature: 0,
		user_correct_politics: 0,
		user_correct_science: 0,
		user_correct_sports: 0,
		user_correct_technology: 0,
		user_correct_television: 0,
		user_correct_theatre: 0,
		user_correct_vehicles: 0,
		user_correct_video_games: 0,
		all_questions: 0,
		all_filtered_anime: 0,
		all_filtered_books: 0,
		all_filtered_computers: 0,
		all_filtered_film: 0,
		all_filtered_general_knowledge: 0,
		all_filtered_geography: 0,
		all_filtered_history: 0,
		all_filtered_music: 0,
		all_filtered_mythology: 0,
		all_filtered_nature: 0,
		all_filtered_politics: 0,
		all_filtered_science: 0,
		all_filtered_sports: 0,
		all_filtered_technology: 0,
		all_filtered_television: 0,
		all_filtered_theatre: 0,
		all_filtered_vehicles: 0,
		all_filtered_video_games: 0,
		mounted: false,
		updatedAllQuestions : false,
		updatedCategories: false,
	}

	componentDidMount(){
		this.setState({
			mounted: true
		})
	}

	componentDidUpdate(){
		if (this.state.mounted) {
			this.questionsAnsweredByCategory()
			this.sortAllQuestionsByCategory()
		}
	}

	sortAllQuestionsByCategory = () => {
		if (Object.keys(this.props.all_questions).length > 0 && this.state.updatedAllQuestions !== true ) {

			let sorted = this.props.all_questions.map(question => question.category).sort()

			let all_filtered_anime = sorted.filter(question => question === "Anime")
			let all_filtered_books = sorted.filter(question => question === "Books")
			let all_filtered_computers = sorted.filter(question => question === "Computers")
			let all_filtered_film = sorted.filter(question => question === "Film")
			let all_filtered_general_knowledge = sorted.filter(question => question === "General Knowledge")
			let all_filtered_geography = sorted.filter(question => question === "Geography")
			let all_filtered_history = sorted.filter(question => question === "History")
			let all_filtered_music = sorted.filter(question => question === "Music")
			let all_filtered_mythology = sorted.filter(question => question === "Mythology")
			let all_filtered_nature = sorted.filter(question => question === "Nature")
			let all_filtered_politics = sorted.filter(question => question === "Politics")
			let all_filtered_science = sorted.filter(question => question === "Science")
			let all_filtered_sports = sorted.filter(question => question === "Sports")
			let all_filtered_technology = sorted.filter(question => question === "Technology")
			let all_filtered_television = sorted.filter(question => question === "Television")
			let all_filtered_theatre = sorted.filter(question => question === "Theatre")
			let all_filtered_vehicles = sorted.filter(question => question === "Vehicles")
			let all_filtered_video_games = sorted.filter(question => question === "Video Games")

			this.setState({
				all_questions: Object.keys(this.props.all_questions).length,
				all_filtered_anime: all_filtered_anime.length,
				all_filtered_books: all_filtered_books.length,
				all_filtered_computers: all_filtered_computers.length,
				all_filtered_film: all_filtered_film.length,
				all_filtered_general_knowledge: all_filtered_general_knowledge.length,
				all_filtered_geography: all_filtered_geography.length,
				all_filtered_history: all_filtered_history.length,
				all_filtered_music: all_filtered_music.length,
				all_filtered_mythology: all_filtered_mythology.length,
				all_filtered_nature: all_filtered_nature.length,
				all_filtered_politics: all_filtered_politics.length,
				all_filtered_science: all_filtered_science.length,
				all_filtered_sports: all_filtered_sports.length,
				all_filtered_technology: all_filtered_technology.length,
				all_filtered_television: all_filtered_television.length,
				all_filtered_theatre: all_filtered_theatre.length,
				all_filtered_vehicles: all_filtered_vehicles.length,
				all_filtered_video_games: all_filtered_video_games.length,
				updatedAllQuestions: true
			})
		}
	}

	questionsAnsweredByCategory = () => {
		if (Object.keys(this.props.user).length > 0 && this.state.updatedCategories !== true ) {

			let user_answers_correct = this.props.user.answers.filter(answer => answer.user_result === "correct")
			let user_answers_correct_ids = user_answers_correct.map(answer => answer.question_id)

			let user_questions_anime = this.props.user.questions.filter(question => question.category === "Anime")
			let user_questions_books = this.props.user.questions.filter(question => question.category === "Books")
			let user_questions_computers = this.props.user.questions.filter(question => question.category === "Computers")
			let user_questions_film = this.props.user.questions.filter(question => question.category === "Film")
			let user_questions_general_knowledge = this.props.user.questions.filter(question => question.category === "General Knowledge")
			let user_questions_geography = this.props.user.questions.filter(question => question.category === "Geography")
			let user_questions_history = this.props.user.questions.filter(question => question.category === "History")
			let user_questions_music = this.props.user.questions.filter(question => question.category === "Music")
			let user_questions_mythology = this.props.user.questions.filter(question => question.category === "Mythology")
			let user_questions_nature = this.props.user.questions.filter(question => question.category === "Nature")
			let user_questions_politics = this.props.user.questions.filter(question => question.category === "Politics")
			let user_questions_science = this.props.user.questions.filter(question => question.category === "Science")
			let user_questions_sports = this.props.user.questions.filter(question => question.category === "Sports")
			let user_questions_technology = this.props.user.questions.filter(question => question.category === "Technology")
			let user_questions_television = this.props.user.questions.filter(question => question.category === "Television")
			let user_questions_theatre = this.props.user.questions.filter(question => question.category === "Theatre")
			let user_questions_vehicles = this.props.user.questions.filter(question => question.category === "Vehicles")
			let user_questions_video_games = this.props.user.questions.filter(question => question.category === "Video Games")

			let user_correct_anime = user_questions_anime.filter(answer => user_answers_correct_ids.includes(answer.id))
			let user_correct_books = user_questions_books.filter(answer => user_answers_correct_ids.includes(answer.id))
			let user_correct_computers = user_questions_computers.filter(answer => user_answers_correct_ids.includes(answer.id))
			let user_correct_film = user_questions_film.filter(answer => user_answers_correct_ids.includes(answer.id))
			let user_correct_general_knowledge = user_questions_general_knowledge.filter(answer => user_answers_correct_ids.includes(answer.id))
			let user_correct_geography = user_questions_geography.filter(answer => user_answers_correct_ids.includes(answer.id))
			let user_correct_history = user_questions_history.filter(answer => user_answers_correct_ids.includes(answer.id))
			let user_correct_music = user_questions_music.filter(answer => user_answers_correct_ids.includes(answer.id))
			let user_correct_mythology = user_questions_mythology.filter(answer => user_answers_correct_ids.includes(answer.id))
			let user_correct_nature = user_questions_nature.filter(answer => user_answers_correct_ids.includes(answer.id))
			let user_correct_politics = user_questions_politics.filter(answer => user_answers_correct_ids.includes(answer.id))
			let user_correct_science = user_questions_science.filter(answer => user_answers_correct_ids.includes(answer.id))
			let user_correct_sports = user_questions_sports.filter(answer => user_answers_correct_ids.includes(answer.id))
			let user_correct_technology = user_questions_technology.filter(answer => user_answers_correct_ids.includes(answer.id))
			let user_correct_television = user_questions_television.filter(answer => user_answers_correct_ids.includes(answer.id))
			let user_correct_theatre = user_questions_theatre.filter(answer => user_answers_correct_ids.includes(answer.id))
			let user_correct_vehicles = user_questions_vehicles.filter(answer => user_answers_correct_ids.includes(answer.id))
			let user_correct_video_games = user_questions_video_games.filter(answer => user_answers_correct_ids.includes(answer.id))

			this.setState({
				user_questions: this.props.user.questions.length,
				user_questions_anime: user_questions_anime.length,
				user_questions_books: user_questions_books.length,
				user_questions_computers: user_questions_computers.length,
				user_questions_film: user_questions_film.length,
				user_questions_general_knowledge: user_questions_general_knowledge.length,
				user_questions_geography: user_questions_geography.length,
				user_questions_history: user_questions_history.length,
				user_questions_music: user_questions_music.length,
				user_questions_mythology: user_questions_mythology.length,
				user_questions_nature: user_questions_nature.length,
				user_questions_politics: user_questions_politics.length,
				user_questions_science: user_questions_science.length,
				user_questions_sports: user_questions_sports.length,
				user_questions_technology: user_questions_technology.length,
				user_questions_television: user_questions_television.length,
				user_questions_theatre: user_questions_theatre.length,
				user_questions_vehicles: user_questions_vehicles.length,
				user_questions_video_games: user_questions_video_games.length,
				user_correct_anime: user_correct_anime.length,
				user_correct_books: user_correct_books.length,
				user_correct_computers: user_correct_computers.length,
				user_correct_film: user_correct_film.length,
				user_correct_general_knowledge: user_correct_general_knowledge.length,
				user_correct_geography: user_correct_geography.length,
				user_correct_history: user_correct_history.length,
				user_correct_music: user_correct_music.length,
				user_correct_mythology: user_correct_mythology.length,
				user_correct_nature: user_correct_nature.length,
				user_correct_politics: user_correct_politics.length,
				user_correct_science: user_correct_science.length,
				user_correct_sports: user_correct_sports.length,
				user_correct_technology: user_correct_technology.length,
				user_correct_television: user_correct_television.length,
				user_correct_theatre: user_correct_theatre.length,
				user_correct_vehicles: user_correct_vehicles.length,
				user_correct_video_games: user_correct_video_games.length,
				updatedCategories: true
			})
		}
	}

	render(){

		const no_questions_answered = <> No questions answered! </>

		const no_correct_answers = <> No correct answers! </>

		const anime_questions =
			<ul>
				<li>Anime:</li>
				<li>
					{this.state.user_questions_anime ? `${ this.state.user_questions_anime }/${ this.state.all_filtered_anime } answered` : no_questions_answered }
					{this.state.user_questions_anime ? ` (${((this.state.user_questions_anime / this.state.all_filtered_anime) * 100).toFixed(2)}%)` : "" }
				</li>
				<li>
					{this.state.user_correct_anime ? `${ this.state.user_correct_anime }/${ this.state.user_questions_anime } correct` : no_correct_answers }
					{this.state.user_correct_anime ? ` (${((this.state.user_correct_anime / this.state.user_questions_anime) * 100).toFixed(2)}%)` : "" }
				</li>
			</ul>

		const book_questions =
			<ul>
				<li>Books:</li>
				<li>
					{this.state.user_questions_books ? `${ this.state.user_questions_books }/${ this.state.all_filtered_books } answered` : no_questions_answered }
					{this.state.user_questions_books ? ` (${((this.state.user_questions_books / this.state.all_filtered_books) * 100).toFixed(2)}%)` : "" }
				</li>
				<li>
					{this.state.user_correct_books ? `${ this.state.user_correct_books }/${ this.state.user_questions_books } correct` : no_correct_answers }
					{this.state.user_correct_books ? ` (${((this.state.user_correct_books / this.state.user_questions_books) * 100).toFixed(2)}%)` : "" }
				</li>
			</ul>

		const computer_questions =
			<ul>
				<li>Computers:</li>
				<li>
					{this.state.user_questions_computers ? `${ this.state.user_questions_computers }/${ this.state.all_filtered_computers } answered` : no_questions_answered }
					{this.state.user_questions_computers ? ` (${((this.state.user_questions_computers / this.state.all_filtered_computers) * 100).toFixed(2)}%)` : "" }
				</li>
				<li>
					{this.state.user_correct_computers ? `${ this.state.user_correct_computers }/${ this.state.user_questions_computers } correct` : no_correct_answers }
					{this.state.user_correct_computers ? ` (${((this.state.user_correct_computers / this.state.user_questions_computers) * 100).toFixed(2)}%)` : "" }
				</li>
			</ul>

		const film_questions =
			<ul>
				<li>Film:</li>
				<li>
					{this.state.user_questions_film ? `${ this.state.user_questions_film }/${ this.state.all_filtered_film } answered` : no_questions_answered }
					{this.state.user_questions_film ? ` (${((this.state.user_questions_film / this.state.all_filtered_film) * 100).toFixed(2)}%)` : "" }
				</li>
				<li>
					{this.state.user_correct_film ? `${ this.state.user_correct_film }/${ this.state.user_questions_film } correct` : no_correct_answers }
					{this.state.user_correct_film ? ` (${((this.state.user_correct_film / this.state.user_questions_film) * 100).toFixed(2)}%)` : "" }
				</li>
			</ul>

		const general_knowledge_questions =
			<ul>
				<li>General Knowledge:</li>
				<li>
					{this.state.user_questions_general_knowledge ? `${ this.state.user_questions_general_knowledge }/${ this.state.all_filtered_general_knowledge } answered` : no_questions_answered }
					{this.state.user_questions_general_knowledge ? ` (${((this.state.user_questions_general_knowledge / this.state.all_filtered_general_knowledge) * 100).toFixed(2)}%)` : "" }
				</li>
				<li>
					{this.state.user_correct_general_knowledge ? `${ this.state.user_correct_general_knowledge }/${ this.state.user_questions_general_knowledge } correct` : no_correct_answers }
					{this.state.user_correct_general_knowledge ? ` (${((this.state.user_correct_general_knowledge / this.state.user_questions_general_knowledge) * 100).toFixed(2)}%)` : "" }
				</li>
			</ul>

		const geography_questions =
			<ul>
				<li>Geography:</li>
				<li>
					{this.state.user_questions_geography ? `${ this.state.user_questions_geography }/${ this.state.all_filtered_geography } answered` : no_questions_answered }
					{this.state.user_questions_geography ? ` (${((this.state.user_questions_geography / this.state.all_filtered_geography) * 100).toFixed(2)}%)` : "" }
				</li>
				<li>
					{this.state.user_correct_geography ? `${ this.state.user_correct_geography }/${ this.state.user_questions_geography } correct` : no_correct_answers }
					{this.state.user_correct_geography ? ` (${((this.state.user_correct_geography / this.state.user_questions_geography) * 100).toFixed(2)}%)` : "" }
				</li>
			</ul>

		const history_questions =
			<ul>
				<li>History:</li>
				<li>
					{this.state.user_questions_history ? `${ this.state.user_questions_history }/${ this.state.all_filtered_history } answered` : no_questions_answered }
					{this.state.user_questions_history ? ` (${((this.state.user_questions_history / this.state.all_filtered_history) * 100).toFixed(2)}%)` : "" }
				</li>
				<li>
					{this.state.user_correct_history ? `${ this.state.user_correct_history }/${ this.state.user_questions_history } correct` : no_correct_answers }
					{this.state.user_correct_history ? ` (${((this.state.user_correct_history / this.state.user_questions_history) * 100).toFixed(2)}%)` : "" }
				</li>
			</ul>

		const music_questions =
			<ul>
				<li>Music:</li>
				<li>
					{this.state.user_questions_music ? `${ this.state.user_questions_music }/${ this.state.all_filtered_music } answered` : no_questions_answered }
					{this.state.user_questions_music ? ` (${((this.state.user_questions_music / this.state.all_filtered_music) * 100).toFixed(2)}%)` : "" }
				</li>
				<li>
					{this.state.user_correct_music ? `${ this.state.user_correct_music }/${ this.state.user_questions_music } correct` : no_correct_answers }
					{this.state.user_correct_music ? ` (${((this.state.user_correct_music / this.state.user_questions_music) * 100).toFixed(2)}%)` : "" }
				</li>
			</ul>

		const mythology_questions =
			<ul>
				<li>Mythology:</li>
				<li>
					{this.state.user_questions_mythology ? `${ this.state.user_questions_mythology }/${ this.state.all_filtered_mythology } answered` : no_questions_answered }
					{this.state.user_questions_mythology ? ` (${((this.state.user_questions_mythology / this.state.all_filtered_mythology) * 100).toFixed(2)}%)` : "" }
				</li>
				<li>
					{this.state.user_correct_mythology ? `${ this.state.user_correct_mythology }/${ this.state.user_questions_mythology } correct` : no_correct_answers }
					{this.state.user_correct_mythology ? ` (${((this.state.user_correct_mythology / this.state.user_questions_mythology) * 100).toFixed(2)}%)` : "" }
				</li>
			</ul>

		const nature_questions =
			<ul>
				<li>Nature:</li>
				<li>
					{this.state.user_questions_nature ? `${ this.state.user_questions_nature }/${ this.state.all_filtered_nature } answered` : no_questions_answered }
					{this.state.user_questions_nature ? ` (${((this.state.user_questions_nature / this.state.all_filtered_nature) * 100).toFixed(2)}%)` : "" }
				</li>
				<li>
					{this.state.user_correct_nature ? `${ this.state.user_correct_nature }/${ this.state.user_questions_nature } correct` : no_correct_answers }
					{this.state.user_correct_nature ? ` (${((this.state.user_correct_nature / this.state.user_questions_nature) * 100).toFixed(2)}%)` : "" }
				</li>
			</ul>

		const politics_questions =
			<ul>
				<li>Politics:</li>
				<li>
					{this.state.user_questions_politics ? `${ this.state.user_questions_politics }/${ this.state.all_filtered_politics } answered` : no_questions_answered }
					{this.state.user_questions_politics ? ` (${((this.state.user_questions_politics / this.state.all_filtered_politics) * 100).toFixed(2)}%)` : "" }
				</li>
				<li>
					{this.state.user_correct_politics ? `${ this.state.user_correct_politics }/${ this.state.user_questions_politics } correct` : no_correct_answers }
					{this.state.user_correct_politics ? ` (${((this.state.user_correct_politics / this.state.user_questions_politics) * 100).toFixed(2)}%)` : "" }
				</li>
			</ul>

		const science_questions =
			<ul>
				<li>Science:</li>
				<li>
					{this.state.user_questions_science ? `${ this.state.user_questions_science }/${ this.state.all_filtered_science } answered` : no_questions_answered }
					{this.state.user_questions_science ? ` (${((this.state.user_questions_science / this.state.all_filtered_science) * 100).toFixed(2)}%)` : "" }
				</li>
				<li>
					{this.state.user_correct_science ? `${ this.state.user_correct_science }/${ this.state.user_questions_science } correct` : no_correct_answers }
					{this.state.user_correct_science ? ` (${((this.state.user_correct_science / this.state.user_questions_science) * 100).toFixed(2)}%)` : "" }
				</li>
			</ul>

		const sports_questions =
			<ul>
				<li>Sports:</li>
				<li>
					{this.state.user_questions_sports ? `${ this.state.user_questions_sports }/${ this.state.all_filtered_sports } answered` : no_questions_answered }
					{this.state.user_questions_sports ? ` (${((this.state.user_questions_sports / this.state.all_filtered_sports) * 100).toFixed(2)}%)` : "" }
				</li>
				<li>
					{this.state.user_correct_sports ? `${ this.state.user_correct_sports }/${ this.state.user_questions_sports } correct` : no_correct_answers }
					{this.state.user_correct_sports ? ` (${((this.state.user_correct_sports / this.state.user_questions_sports) * 100).toFixed(2)}%)` : "" }
				</li>
			</ul>

		const technology_questions =
			<ul>
				<li>Technology:</li>
				<li>
					{this.state.user_questions_technology ? `${ this.state.user_questions_technology }/${ this.state.all_filtered_technology } answered` : no_questions_answered }
					{this.state.user_questions_technology ? ` (${((this.state.user_questions_technology / this.state.all_filtered_technology) * 100).toFixed(2)}%)` : "" }
				</li>
				<li>
					{this.state.user_correct_technology ? `${ this.state.user_correct_technology }/${ this.state.user_questions_technology } correct` : no_correct_answers }
					{this.state.user_correct_technology ? ` (${((this.state.user_correct_technology / this.state.user_questions_technology) * 100).toFixed(2)}%)` : "" }
				</li>
			</ul>

		const television_questions =
			<ul>
				<li>Television:</li>
				<li>
					{this.state.user_questions_television ? `${ this.state.user_questions_television }/${ this.state.all_filtered_television } answered` : no_questions_answered }
					{this.state.user_questions_television ? ` (${((this.state.user_questions_television / this.state.all_filtered_television) * 100).toFixed(2)}%)` : "" }
				</li>
				<li>
					{this.state.user_correct_television ? `${ this.state.user_correct_television }/${ this.state.user_questions_television } correct` : no_correct_answers }
					{this.state.user_correct_television ? ` (${((this.state.user_correct_television / this.state.user_questions_television) * 100).toFixed(2)}%)` : "" }
				</li>
			</ul>

		const theatre_questions =
			<ul>
				<li>Theatre:</li>
				<li>
					{this.state.user_questions_theatre ? `${ this.state.user_questions_theatre }/${ this.state.all_filtered_theatre } answered` : no_questions_answered }
					{this.state.user_questions_theatre ? ` (${((this.state.user_questions_theatre / this.state.all_filtered_theatre) * 100).toFixed(2)}%)` : "" }
				</li>
				<li>
					{this.state.user_correct_theatre ? `${ this.state.user_correct_theatre }/${ this.state.user_questions_theatre } correct` : no_correct_answers }
					{this.state.user_correct_theatre ? ` (${((this.state.user_correct_theatre / this.state.user_questions_theatre) * 100).toFixed(2)}%)` : "" }
				</li>
			</ul>

		const vehicles_questions =
			<ul>
				<li>Vehicles:</li>
				<li>
					{this.state.user_questions_vehicles ? `${ this.state.user_questions_vehicles }/${ this.state.all_filtered_vehicles } answered` : no_questions_answered }
					{this.state.user_questions_vehicles ? ` (${((this.state.user_questions_vehicles / this.state.all_filtered_vehicles) * 100).toFixed(2)}%)` : "" }
				</li>
				<li>
					{this.state.user_correct_vehicles ? `${ this.state.user_correct_vehicles }/${ this.state.user_questions_vehicles } correct` : no_correct_answers }
					{this.state.user_correct_vehicles ? ` (${((this.state.user_correct_vehicles / this.state.user_questions_vehicles) * 100).toFixed(2)}%)` : "" }
				</li>
			</ul>

		const video_games_questions =
			<ul>
				<li>Video Games:</li>
				<li>
					{this.state.user_questions_video_games ? `${ this.state.user_questions_video_games }/${ this.state.all_filtered_video_games } answered` : no_questions_answered }
					{this.state.user_questions_video_games ? ` (${((this.state.user_questions_video_games / this.state.all_filtered_video_games) * 100).toFixed(2)}%)` : "" }
				</li>
				<li>
					{this.state.user_correct_video_games ? `${ this.state.user_correct_video_games }/${ this.state.user_questions_video_games } correct` : no_correct_answers }
					{this.state.user_correct_video_games ? ` (${((this.state.user_correct_video_games / this.state.user_questions_video_games) * 100).toFixed(2)}%)` : "" }
				</li>
			</ul>

		return(
			<div className="dashboard_stats_category">
				{ anime_questions }
				{ book_questions }
				{ computer_questions }
				{ film_questions }
				{ general_knowledge_questions }
				{ geography_questions }
				{ history_questions }
				{ music_questions }
				{ mythology_questions }
				{ nature_questions }
				{ politics_questions }
				{ science_questions }
				{ sports_questions }
				{ technology_questions }
				{ television_questions }
				{ theatre_questions }
				{ vehicles_questions }
				{ video_games_questions }
			</div>
		)
	}
}
