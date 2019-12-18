import React from 'react'
import { Redirect } from 'react-router'

import './DBedit.css'

export default class DBeditDeleteUser extends React.Component {

	state = {
		deleteSuccess: false
	}

	componentDidMount(){
	}

	onMountAsync = async () => {
	}

	onClickYes = () => {
		let user = this.props.user
		fetch(`http://localhost:3001/users/${user.id}`, {
			method: "DELETE"
		})
	    .then(res_obj => {
			if (res_obj.errors) {
				this.setState({
					errors: res_obj.errors
				})
			} else {
				this.props.displaySwitchToIndex(res_obj)
			}
		})
	}

	onClickNo = () => {
		let user = this.props.user
		this.props.displaySwitchToUserInfo(user)
	}

	componentWillUnmount(){
	}

	render(){
		// console.log("delete user state", this.state)
		// console.log("delete user props id", this.props.user)
		// console.log("delete user props", this.props.user.user_name)

		const confirm =
			<div className="DBedit_default_wrapper">
				<h3>Are you sure you want to delete {this.props.user.user_name}'s account?</h3>
				<div className="delete_profile_buttons_container">
					<button
						key={"b1"}
						name="delete_profile_form"
						interaction="submit"
						className="default_button"
						onClick={ this.onClickYes }
					>
						Yes
					</button>
					<button
						key={"b2"}
						name="delete_profile_form"
						interaction="cancel"
						className="default_button"
						onClick={ this.onClickNo }
					>
						No
					</button>
				</div>
			</div>
		return(
			<>
				{
			        (!!this.state.errors) ? (
		  				<div className="default_error_report">
		  					{
				              this.state.errors.map( error =>
				                <div className="default_error_item">
				                  { error }
				                </div>
				              )
		            		}
		  				</div>
			        )
			        :
			        (
			          ""
			        )
				}
				{ confirm }
			</>
		)
	}
}