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
	
	

 

Alabama
Alaska
Arizona
Arkansas
California
Colorado
Connecticut
Delaware
Florida
Georgia
Hawaii
Idaho
Illinois
Indiana
Iowa
Kansas
Kentucky
Louisiana
Maine
Maryland
Massachusetts
Michigan
Minnesota
Mississippi
Missouri
Montana
Nebraska
Nevada
New Hampshire
New Jersey
New Mexico
New York
North Carolina
North Dakota
Ohio
Oklahoma
Oregon
Pennsylvania
Rhode Island
South Carolina
South Dakota
Tennessee
Texas
Utah
Vermont
Virginia
Washington
West Virginia
Wisconsin
Wyoming