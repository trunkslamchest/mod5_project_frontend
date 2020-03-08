import React from 'react'
import RTVpagesRow from './RTVpagesRow'

const RTVpagesList = (props) => {
	const distribute_RTV_page_data = props.RTV_page_data.map( RTV_page_obj =>
		<RTVpagesRow
			key={RTV_page_obj.id}
			RTV_page_obj={RTV_page_obj}
		/>
	)

	const RTVpages_table =
	<table className="RTVpages_table">
		<tbody>
			<tr>
				<th>User ID</th>
				<th>Page</th>
				<th>Timestamp</th>
			</tr>
				{ distribute_RTV_page_data }
		</tbody>
	</table>

	return(
		<>
			{ RTVpages_table }
		</>
	)
}

export default RTVpagesList