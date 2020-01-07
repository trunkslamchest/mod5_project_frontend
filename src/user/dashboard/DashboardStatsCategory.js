import React from 'react'

export default class DashboardStatsCategory extends React.Component{

	state = {
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
		if (Object.keys(this.props.all_questions).length > 0 && !this.state.updatedAllQuestions) {
			this.sortAllQuestionsByCategory()
		}
		if (this.state.updatedAllQuestions && !this.state.updatedCategories) {
			this.questionsAnsweredByCategory()
		}
	}

	sortAllQuestionsByCategory = () => {
			let all_anime_questions = this.props.all_questions.filter(question => question.category === "Anime")
			let all_art_questions = this.props.all_questions.filter(question => question.category === "Art")

			let all_book_questions = this.props.all_questions.filter(question => question.category === "Books")
			let all_celebrities_questions = this.props.all_questions.filter(question => question.category === "Celebrities")

			let all_computer_questions = this.props.all_questions.filter(question => question.category === "Computers")
			let all_film_questions = this.props.all_questions.filter(question => question.category === "Film")
			let all_general_knowledge_questions = this.props.all_questions.filter(question => question.category === "General Knowledge")
			let all_geography_questions = this.props.all_questions.filter(question => question.category === "Geography")
			let all_history_questions = this.props.all_questions.filter(question => question.category === "History")
			let all_math_questions = this.props.all_questions.filter(question => question.category === "Mathematics")

			let all_music_questions = this.props.all_questions.filter(question => question.category === "Music")
			let all_mythology_questions = this.props.all_questions.filter(question => question.category === "Mythology")
			let all_nature_questions = this.props.all_questions.filter(question => question.category === "Nature")
			let all_politics_questions = this.props.all_questions.filter(question => question.category === "Politics")
			let all_science_questions = this.props.all_questions.filter(question => question.category === "Science")
			let all_sports_questions = this.props.all_questions.filter(question => question.category === "Sports")
			let all_television_questions = this.props.all_questions.filter(question => question.category === "Television")
			let all_theatre_questions = this.props.all_questions.filter(question => question.category === "Theatre")
			let all_vehicles_questions = this.props.all_questions.filter(question => question.category === "Vehicles")
			let all_video_games_questions = this.props.all_questions.filter(question => question.category === "Video Games")

			this.setState({
				all_anime_questions: all_anime_questions,
				all_art_questions: all_art_questions,
				all_book_questions: all_book_questions,
				all_celebrities_questions: all_celebrities_questions,
				all_computer_questions: all_computer_questions,
				all_film_questions: all_film_questions,
				all_general_knowledge_questions: all_general_knowledge_questions,
				all_geography_questions: all_geography_questions,
				all_history_questions: all_history_questions,
				all_math_questions: all_math_questions,
				all_music_questions: all_music_questions,
				all_mythology_questions: all_mythology_questions,
				all_nature_questions: all_nature_questions,
				all_politics_questions: all_politics_questions,
				all_science_questions: all_science_questions,
				all_sports_questions: all_sports_questions,
				all_television_questions: all_television_questions,
				all_theatre_questions: all_theatre_questions,
				all_vehicles_questions: all_vehicles_questions,
				all_video_games_questions: all_video_games_questions,
				updatedAllQuestions: true
			})
	}

	questionsAnsweredByCategory = () => {
		let user_answers = this.props.user_answers.filter(answer => answer)
		let user_answers_ids = user_answers.map(answer => answer.question_id)

		let user_answers_correct = this.props.user_answers.filter(answer => answer.user_result === "correct")
		let user_answers_correct_ids = user_answers_correct.map(answer => answer.question_id)

		let user_answers_anime = this.state.all_anime_questions.filter(answer => user_answers_ids.includes(answer.id))
		let user_answers_anime_correct = user_answers_anime.filter(answer => user_answers_correct_ids.includes(answer.id))

		let user_answers_art = this.state.all_art_questions.filter(answer => user_answers_ids.includes(answer.id))
		let user_answers_art_correct = user_answers_art.filter(answer => user_answers_correct_ids.includes(answer.id))

		let user_answers_book = this.state.all_book_questions.filter(answer => user_answers_ids.includes(answer.id))
		let user_answers_book_correct = user_answers_book.filter(answer => user_answers_correct_ids.includes(answer.id))

		let user_answers_celebrities = this.state.all_celebrities_questions.filter(answer => user_answers_ids.includes(answer.id))
		let user_answers_celebrities_correct = user_answers_celebrities.filter(answer => user_answers_correct_ids.includes(answer.id))

		let user_answers_computer = this.state.all_computer_questions.filter(answer => user_answers_ids.includes(answer.id))
		let user_answers_computer_correct = user_answers_computer.filter(answer => user_answers_correct_ids.includes(answer.id))

		let user_answers_film = this.state.all_film_questions.filter(answer => user_answers_ids.includes(answer.id))
		let user_answers_film_correct = user_answers_film.filter(answer => user_answers_correct_ids.includes(answer.id))

		let user_answers_general_knowledge = this.state.all_general_knowledge_questions.filter(answer => user_answers_ids.includes(answer.id))
		let user_answers_general_knowledge_correct = user_answers_general_knowledge.filter(answer => user_answers_correct_ids.includes(answer.id))

		let user_answers_geography = this.state.all_geography_questions.filter(answer => user_answers_ids.includes(answer.id))
		let user_answers_geography_correct = user_answers_geography.filter(answer => user_answers_correct_ids.includes(answer.id))

		let user_answers_history = this.state.all_history_questions.filter(answer => user_answers_ids.includes(answer.id))
		let user_answers_history_correct = user_answers_history.filter(answer => user_answers_correct_ids.includes(answer.id))

		let user_answers_math = this.state.all_math_questions.filter(answer => user_answers_ids.includes(answer.id))
		let user_answers_math_correct = user_answers_math.filter(answer => user_answers_correct_ids.includes(answer.id))

		let user_answers_music = this.state.all_music_questions.filter(answer => user_answers_ids.includes(answer.id))
		let user_answers_music_correct = user_answers_music.filter(answer => user_answers_correct_ids.includes(answer.id))

		let user_answers_mythology = this.state.all_mythology_questions.filter(answer => user_answers_ids.includes(answer.id))
		let user_answers_mythology_correct = user_answers_mythology.filter(answer => user_answers_correct_ids.includes(answer.id))

		let user_answers_nature = this.state.all_nature_questions.filter(answer => user_answers_ids.includes(answer.id))
		let user_answers_nature_correct = user_answers_nature.filter(answer => user_answers_correct_ids.includes(answer.id))

		let user_answers_politics = this.state.all_politics_questions.filter(answer => user_answers_ids.includes(answer.id))
		let user_answers_politics_correct = user_answers_politics.filter(answer => user_answers_correct_ids.includes(answer.id))

		let user_answers_science = this.state.all_science_questions.filter(answer => user_answers_ids.includes(answer.id))
		let user_answers_science_correct = user_answers_science.filter(answer => user_answers_correct_ids.includes(answer.id))

		let user_answers_sports = this.state.all_sports_questions.filter(answer => user_answers_ids.includes(answer.id))
		let user_answers_sports_correct = user_answers_sports.filter(answer => user_answers_correct_ids.includes(answer.id))

		let user_answers_television = this.state.all_television_questions.filter(answer => user_answers_ids.includes(answer.id))
		let user_answers_television_correct = user_answers_television.filter(answer => user_answers_correct_ids.includes(answer.id))

		let user_answers_theatre = this.state.all_theatre_questions.filter(answer => user_answers_ids.includes(answer.id))
		let user_answers_theatre_correct = user_answers_theatre.filter(answer => user_answers_correct_ids.includes(answer.id))

		let user_answers_vehicles = this.state.all_vehicles_questions.filter(answer => user_answers_ids.includes(answer.id))
		let user_answers_vehicles_correct = user_answers_vehicles.filter(answer => user_answers_correct_ids.includes(answer.id))

		let user_answers_video_games = this.state.all_video_games_questions.filter(answer => user_answers_ids.includes(answer.id))
		let user_answers_video_games_correct = user_answers_video_games.filter(answer => user_answers_correct_ids.includes(answer.id))

		this.setState({
			user_answers_correct: user_answers_correct.length,
			user_answers_anime: user_answers_anime.length,
			user_answers_anime_correct: user_answers_anime_correct.length,
			user_answers_art: user_answers_art.length,
			user_answers_art_correct: user_answers_art_correct.length,
			user_answers_book: user_answers_book.length,
			user_answers_book_correct: user_answers_book_correct.length,
			user_answers_celebrities: user_answers_celebrities.length,
			user_answers_celebrities_correct: user_answers_celebrities_correct.length,
			user_answers_computer: user_answers_computer.length,
			user_answers_computer_correct: user_answers_computer_correct.length,
			user_answers_film: user_answers_film.length,
			user_answers_film_correct: user_answers_film_correct.length,
			user_answers_general_knowledge: user_answers_general_knowledge.length,
			user_answers_general_knowledge_correct: user_answers_general_knowledge_correct.length,
			user_answers_geography: user_answers_geography.length,
			user_answers_geography_correct: user_answers_geography_correct.length,
			user_answers_history: user_answers_history.length,
			user_answers_history_correct: user_answers_history_correct.length,
			user_answers_math: user_answers_math.length,
			user_answers_math_correct: user_answers_math_correct.length,
			user_answers_music: user_answers_music.length,
			user_answers_music_correct: user_answers_music_correct.length,
			user_answers_mythology: user_answers_mythology.length,
			user_answers_mythology_correct: user_answers_mythology_correct.length,
			user_answers_nature: user_answers_nature.length,
			user_answers_nature_correct: user_answers_nature_correct.length,
			user_answers_politics: user_answers_politics.length,
			user_answers_politics_correct: user_answers_politics_correct.length,
			user_answers_science: user_answers_science.length,
			user_answers_science_correct: user_answers_science_correct.length,
			user_answers_sports: user_answers_sports.length,
			user_answers_sports_correct: user_answers_sports_correct.length,
			user_answers_television: user_answers_television.length,
			user_answers_television_correct: user_answers_television_correct.length,
			user_answers_theatre: user_answers_theatre.length,
			user_answers_theatre_correct: user_answers_theatre_correct.length,
			user_answers_vehicles: user_answers_vehicles.length,
			user_answers_vehicles_correct: user_answers_vehicles_correct.length,
			user_answers_video_games: user_answers_video_games.length,
			user_answers_video_games_correct: user_answers_video_games_correct.length,
			updatedCategories: true
		})
	}

	render(){

		const zero_percent = <> (0.00%) </>

		const zero_percent_answered = <> 0/0 answered </>

		const zero_percent_correct = <> 0/0 correct </>

		const anime_questions =
			<ul>
				<li>Anime</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_anime }/${ this.state.all_anime_questions.length } answered` : zero_percent_answered }
					{this.state.user_answers_anime ? ` (${((this.state.user_answers_anime / this.state.all_anime_questions.length) * 100).toFixed(2)}%)` : zero_percent }
				</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_anime_correct }/${ this.state.user_answers_anime } correct` : zero_percent_correct }
					{this.state.user_answers_anime_correct ? ` (${((this.state.user_answers_anime_correct / this.state.user_answers_anime ) * 100).toFixed(2)}%)` : zero_percent }
				</li>
			</ul>

		const art_questions =
			<ul>
				<li>Art</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_art }/${ this.state.all_art_questions.length } answered` : zero_percent_answered }
					{this.state.user_answers_art ? ` (${((this.state.user_answers_art / this.state.all_art_questions.length) * 100).toFixed(2)}%)` : zero_percent }
				</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_art_correct }/${ this.state.user_answers_art } correct` : zero_percent_correct }
					{this.state.user_answers_art_correct ? ` (${((this.state.user_answers_art_correct / this.state.user_answers_art ) * 100).toFixed(2)}%)` : zero_percent }
				</li>
			</ul>

		const book_questions =
			<ul>
				<li>Books</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_book }/${ this.state.all_book_questions.length } answered` : zero_percent_answered }
					{this.state.user_answers_book ? ` (${((this.state.user_answers_book / this.state.all_book_questions.length) * 100).toFixed(2)}%)` :  zero_percent }
				</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_book_correct }/${ this.state.user_answers_book } correct` : zero_percent_correct }
					{this.state.user_answers_book_correct ? ` (${((this.state.user_answers_book_correct / this.state.user_answers_book ) * 100).toFixed(2)}%)` : zero_percent }
				</li>
			</ul>

		const celebrities_questions =
			<ul>
				<li>Celebrities</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_celebrities }/${ this.state.all_celebrities_questions.length } answered` : zero_percent_answered }
					{this.state.user_answers_celebrities ? ` (${((this.state.user_answers_celebrities / this.state.all_celebrities_questions.length) * 100).toFixed(2)}%)` :  zero_percent }
				</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_celebrities_correct }/${ this.state.user_answers_celebrities } correct` : zero_percent_correct }
					{this.state.user_answers_celebrities_correct ? ` (${((this.state.user_answers_celebrities_correct / this.state.user_answers_celebrities ) * 100).toFixed(2)}%)` : zero_percent }
				</li>
			</ul>

		const computer_questions =
			<ul>
				<li>Computers</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_computer }/${ this.state.all_computer_questions.length } answered` : zero_percent_answered }
					{this.state.user_answers_computer ? ` (${((this.state.user_answers_computer / this.state.all_computer_questions.length) * 100).toFixed(2)}%)` :  zero_percent }
				</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_computer_correct }/${ this.state.user_answers_computer } correct` : zero_percent_correct }
					{this.state.user_answers_computer_correct ? ` (${((this.state.user_answers_computer_correct / this.state.user_answers_computer ) * 100).toFixed(2)}%)` : zero_percent }
				</li>
			</ul>

		const film_questions =
			<ul>
				<li>Film</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_film }/${ this.state.all_film_questions.length } answered` : zero_percent_answered }
					{this.state.user_answers_film ? ` (${((this.state.user_answers_film / this.state.all_film_questions.length) * 100).toFixed(2)}%)` :  zero_percent }
				</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_film_correct }/${ this.state.user_answers_film } correct` : zero_percent_correct }
					{this.state.user_answers_film_correct ? ` (${((this.state.user_answers_film_correct / this.state.user_answers_film ) * 100).toFixed(2)}%)` : zero_percent }
				</li>
			</ul>

		const general_knowledge_questions =
			<ul>
				<li>General Knowledge</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_general_knowledge }/${ this.state.all_general_knowledge_questions.length } answered` : zero_percent_answered }
					{this.state.user_answers_general_knowledge ? ` (${((this.state.user_answers_general_knowledge / this.state.all_general_knowledge_questions.length) * 100).toFixed(2)}%)` :  zero_percent }
				</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_general_knowledge_correct }/${ this.state.user_answers_general_knowledge } correct` : zero_percent_correct }
					{this.state.user_answers_general_knowledge_correct ? ` (${((this.state.user_answers_general_knowledge_correct / this.state.user_answers_general_knowledge ) * 100).toFixed(2)}%)` : zero_percent }
				</li>
			</ul>

		const geography_questions =
			<ul>
				<li>Geography</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_geography }/${ this.state.all_geography_questions.length } answered` : zero_percent_answered }
					{this.state.user_answers_geography ? ` (${((this.state.user_answers_geography / this.state.all_geography_questions.length) * 100).toFixed(2)}%)` :  zero_percent }
				</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_geography_correct }/${ this.state.user_answers_geography } correct` : zero_percent_correct }
					{this.state.user_answers_geography_correct ? ` (${((this.state.user_answers_geography_correct / this.state.user_answers_geography ) * 100).toFixed(2)}%)` : zero_percent }
				</li>
			</ul>

		const history_questions =
			<ul>
				<li>History</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_history }/${ this.state.all_history_questions.length } answered` : zero_percent_answered }
					{this.state.user_answers_history ? ` (${((this.state.user_answers_history / this.state.all_history_questions.length) * 100).toFixed(2)}%)` :  zero_percent }
				</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_history_correct }/${ this.state.user_answers_history } correct` : zero_percent_correct }
					{this.state.user_answers_history_correct ? ` (${((this.state.user_answers_history_correct / this.state.user_answers_history ) * 100).toFixed(2)}%)` : zero_percent }
				</li>
			</ul>

		const math_questions =
			<ul>
				<li>Math</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_math }/${ this.state.all_math_questions.length } answered` : zero_percent_answered }
					{this.state.user_answers_math ? ` (${((this.state.user_answers_math / this.state.all_math_questions.length) * 100).toFixed(2)}%)` :  zero_percent }
				</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_math_correct }/${ this.state.user_answers_math } correct` : zero_percent_correct }
					{this.state.user_answers_math_correct ? ` (${((this.state.user_answers_math_correct / this.state.user_answers_math ) * 100).toFixed(2)}%)` : zero_percent }
				</li>
			</ul>

		const music_questions =
			<ul>
				<li>Music</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_music }/${ this.state.all_music_questions.length } answered` : zero_percent_answered }
					{this.state.user_answers_music ? ` (${((this.state.user_answers_music / this.state.all_music_questions.length) * 100).toFixed(2)}%)` :  zero_percent }
				</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_music_correct }/${ this.state.user_answers_music } correct` : zero_percent_correct }
					{this.state.user_answers_music_correct ? ` (${((this.state.user_answers_music_correct / this.state.user_answers_music ) * 100).toFixed(2)}%)` : zero_percent }
				</li>
			</ul>

		const mythology_questions =
			<ul>
				<li>Mythology</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_mythology }/${ this.state.all_mythology_questions.length } answered` : zero_percent_answered }
					{this.state.user_answers_mythology ? ` (${((this.state.user_answers_mythology / this.state.all_mythology_questions.length) * 100).toFixed(2)}%)` :  zero_percent }
				</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_mythology_correct }/${ this.state.user_answers_mythology } correct` : zero_percent_correct }
					{this.state.user_answers_mythology_correct ? ` (${((this.state.user_answers_mythology_correct / this.state.user_answers_mythology ) * 100).toFixed(2)}%)` : zero_percent }
				</li>
			</ul>

		const nature_questions =
			<ul>
				<li>Nature</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_nature }/${ this.state.all_nature_questions.length } answered` : zero_percent_answered }
					{this.state.user_answers_nature ? ` (${((this.state.user_answers_nature / this.state.all_nature_questions.length) * 100).toFixed(2)}%)` :  zero_percent }
				</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_nature_correct }/${ this.state.user_answers_nature } correct` : zero_percent_correct }
					{this.state.user_answers_nature_correct ? ` (${((this.state.user_answers_nature_correct / this.state.user_answers_nature ) * 100).toFixed(2)}%)` : zero_percent }
				</li>
			</ul>

		const politics_questions =
			<ul>
				<li>Politics</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_politics }/${ this.state.all_politics_questions.length } answered` : zero_percent_answered }
					{this.state.user_answers_politics ? ` (${((this.state.user_answers_politics / this.state.all_politics_questions.length) * 100).toFixed(2)}%)` :  zero_percent }
				</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_politics_correct }/${ this.state.user_answers_politics } correct` : zero_percent_correct }
					{this.state.user_answers_politics_correct ? ` (${((this.state.user_answers_politics_correct / this.state.user_answers_politics ) * 100).toFixed(2)}%)` : zero_percent }
				</li>
			</ul>

		const science_questions =
			<ul>
				<li>Science</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_science }/${ this.state.all_science_questions.length } answered` : zero_percent_answered }
					{this.state.user_answers_science ? ` (${((this.state.user_answers_science / this.state.all_science_questions.length) * 100).toFixed(2)}%)` :  zero_percent }
				</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_science_correct }/${ this.state.user_answers_science } correct` : zero_percent_correct }
					{this.state.user_answers_science_correct ? ` (${((this.state.user_answers_science_correct / this.state.user_answers_science ) * 100).toFixed(2)}%)` : zero_percent }
				</li>
			</ul>

		const sports_questions =
			<ul>
				<li>Sports</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_sports }/${ this.state.all_sports_questions.length } answered` : zero_percent_answered }
					{this.state.user_answers_sports ? ` (${((this.state.user_answers_sports / this.state.all_sports_questions.length) * 100).toFixed(2)}%)` :  zero_percent }
				</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_sports_correct }/${ this.state.user_answers_sports } correct` : zero_percent_correct }
					{this.state.user_answers_sports_correct ? ` (${((this.state.user_answers_sports_correct / this.state.user_answers_sports ) * 100).toFixed(2)}%)` : zero_percent }
				</li>
			</ul>

		const television_questions =
			<ul>
				<li>Television</li>
				<li>
					{this.state.updatedCategories? `${ this.state.user_answers_television }/${ this.state.all_television_questions.length } answered` : zero_percent_answered }
					{this.state.user_answers_television ? ` (${((this.state.user_answers_television / this.state.all_television_questions.length) * 100).toFixed(2)}%)` :  zero_percent }
				</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_television_correct }/${ this.state.user_answers_television } correct` : zero_percent_correct }
					{this.state.user_answers_television_correct ? ` (${((this.state.user_answers_television_correct / this.state.user_answers_television ) * 100).toFixed(2)}%)` : zero_percent }
				</li>
			</ul>

		const theatre_questions =
			<ul>
				<li>Theatre</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_theatre }/${ this.state.all_theatre_questions.length } answered` : zero_percent_answered }
					{this.state.user_answers_theatre ? ` (${((this.state.user_answers_theatre / this.state.all_theatre_questions.length) * 100).toFixed(2)}%)` :  zero_percent }
				</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_theatre_correct }/${ this.state.user_answers_theatre } correct` : zero_percent_correct }
					{this.state.user_answers_theatre_correct ? ` (${((this.state.user_answers_theatre_correct / this.state.user_answers_theatre ) * 100).toFixed(2)}%)` : zero_percent }
				</li>
			</ul>

		const vehicles_questions =
			<ul>
				<li>Vehicles</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_vehicles }/${ this.state.all_vehicles_questions.length } answered` : zero_percent_answered }
					{this.state.user_answers_vehicles ? ` (${((this.state.user_answers_vehicles / this.state.all_vehicles_questions.length) * 100).toFixed(2)}%)` :  zero_percent }
				</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_vehicles_correct }/${ this.state.user_answers_vehicles } correct` : zero_percent_correct }
					{this.state.user_answers_vehicles_correct ? ` (${((this.state.user_answers_vehicles_correct / this.state.user_answers_vehicles ) * 100).toFixed(2)}%)` : zero_percent }
				</li>
			</ul>

		const video_games_questions =
			<ul>
				<li>Video Games</li>
				<li>
					{this.state.updatedCategories ? `${ this.state.user_answers_video_games }/${ this.state.all_video_games_questions.length } answered` : zero_percent_answered }
					{this.state.user_answers_video_games ? ` (${((this.state.user_answers_video_games / this.state.all_video_games_questions.length) * 100).toFixed(2)}%)` :  zero_percent }
				</li>
				<li>
					{this.state.user_answers_video_games_correct ? `${ this.state.user_answers_video_games_correct }/${ this.state.user_answers_video_games } correct` : zero_percent_correct }
					{this.state.user_answers_video_games_correct ? ` (${((this.state.user_answers_video_games_correct / this.state.user_answers_video_games ) * 100).toFixed(2)}%)` : zero_percent }
				</li>
			</ul>

		return(
			<>
				<div className="stats_header">
					<h3> Categories </h3>
				</div>
				<div className="stats_category">
					{ anime_questions }
					{ art_questions }
					{ book_questions }
					{ celebrities_questions }
					{ computer_questions }
					{ film_questions }
					{ general_knowledge_questions }
					{ geography_questions }
					{ history_questions }
					{ math_questions }
					{ music_questions }
					{ mythology_questions }
					{ nature_questions }
					{ politics_questions }
					{ science_questions }
					{ sports_questions }
					{ television_questions }
					{ theatre_questions }
					{ vehicles_questions }
					{ video_games_questions }
				</div>
			</>
		)
	}
}
