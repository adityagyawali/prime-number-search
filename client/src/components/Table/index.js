import * as React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";

const Table = ({ data, handleDelete }) => {
	const searchResult =
		data.length === 0 || data === (null || undefined) ? (
			<h3 style={{ textAlign: "center" }}>Start The Search</h3>
		) : (
			<>
				<table className="table__data">
					<thead>
						<tr>
							<th>Input Number</th>
							<th>Result</th>
							<th>Date</th>
						</tr>
					</thead>
					<tbody>
						{data.map((num, i) => (
							<tr key={i}>
								<td>{num.inputNum}</td>
								<td>
									{num.foundNum === (null || undefined)
										? "Number Not Found"
										: num.foundNum}
								</td>

								<td>
									<Moment format="YYYY/MM/DD">{num.Date}</Moment>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<button className="table__delete" onClick={handleDelete}>
					Delete All
				</button>
			</>
		);
	return (
		<>
			<div className="table">{searchResult}</div>
		</>
	);
};

Table.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	handleDelete: PropTypes.func.isRequired
};

export default Table;
