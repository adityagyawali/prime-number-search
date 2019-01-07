import * as React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Input = ({
	handleChange,
	handleSubmit,
	value,
	error,
	isEnabled,
	handleBlur,
	shouldMarkError
}: Props) => (
	<form className="form" onSubmit={handleSubmit}>
		<label htmlFor="num">Search The First Prime Number</label>
		<input
			name="num"
			value={value}
			onChange={handleChange}
			className={shouldMarkError ? "form__error-input" : "form__input"}
			placeholder="Please Enter 3 Number Only"
			onBlur={handleBlur}
		/>

		<div className={shouldMarkError ? "form__error" : "error__message"}>
			{error.num}
		</div>
		<button disabled={!isEnabled} className="form__submit">
			Submit{" "}
		</button>
	</form>
);

Input.propTypes = {
	handleChange: PropTypes.func.isRequired,
	handleBlur: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	error: PropTypes.object.isRequired,
	isEnabled: PropTypes.bool.isRequired,
	shouldMarkError: PropTypes.bool.isRequired
};
export default Input;
