import * as React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Input from "./components/Input";
import Table from "./components/Table";

import {
	getAllData,
	postPrimeNum,
	deleteAllNum,
	getFoundNum
} from "./actions/primeAction";
import { foundPrimeNumbers, loading } from "./reducers";
import loader from "./assets/loader.svg";
import { validate } from "./helper";
import "./App.css";

class App extends React.Component {
	state = {
		num: "",
		touched: {
			num: false
		}
	};

	componentDidMount = () => {
		this.props.getAllData();
		this.props.getFoundNum();
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleBlur = field => e => {
		this.setState({
			touched: { ...this.state.touched, [field]: true }
		});
	};

	handleSubmit = e => {
		e.preventDefault();

		this.props.postPrimeNum(this.state.num);
		this.setState({
			num: ""
		});
	};

	handleDelete = () => {
		this.props.deleteAllNum();
	};

	render() {
		const { found, loading } = this.props;
		const { num } = this.state;
		const errors = validate(num);
		const isEnabled = !Object.keys(errors).some(msg => errors[msg]);

		const shouldMarkError = field => {
			const hasError = errors[field];
			const shouldShow = this.state.touched[field];
			return hasError ? shouldShow : false;
		};

		const table = loading ? (
			<img src={loader} alt="loading" />
		) : (
				<Table data={found} handleDelete={this.handleDelete} />
			);
		return (
			<div className="App">
				<h3 className="App__header">Prime Number Search</h3>
				{table}
				<Input
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
					loading={loading}
					value={num}
					error={errors}
					isEnabled={isEnabled}
					handleBlur={this.handleBlur("num")}
					shouldMarkError={shouldMarkError("num")}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	found: foundPrimeNumbers(state),
	loading: loading(state)
});

export default connect(
	mapStateToProps,
	{ getAllData, getFoundNum, postPrimeNum, deleteAllNum }
)(App);

App.propTypes = {
	found: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	loading: PropTypes.bool.isRequired,
	getAllData: PropTypes.func.isRequired,
	getFoundNum: PropTypes.func.isRequired,
	postPrimeNum: PropTypes.func.isRequired,
	deleteAllNum: PropTypes.func.isRequired
};
