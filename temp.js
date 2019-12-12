	onSubmitEditProfileFunctions = async (event) => {
		event.persist()
		event.preventDefault()
		try {
			const updatedState = await this.updateState()
			this.EditProfileSubmitted(event)
		} catch(e) {
    		console.error("Problem", e)
  		}
	}

	updateState = async () =>  {
		if(this.state.edit_user_name === null) {
			this.setState({
				edit_user_name: this.props.user_name,
				edit_email: this.props.email
			})
		}
		return this.state
	}