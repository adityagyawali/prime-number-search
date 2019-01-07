import * as type from "../actions/actionTypes";

const initialState = {
	allPrimeNum: [],
	foundPrimeNum: [],
	loading: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case type.ARRAY_PRIME_NUMBER:
			return {
				...state,
				allPrimeNum: [...action.payload],
				loading: false
			};

		case type.GET_PRIME_NUMBER:
			return {
				...state,
				foundPrimeNum: action.payload,
				loading: false
			};

		case type.DELETE_ALL_NUMBER:
			return {
				...state,
				foundPrimeNum: initialState.foundPrimeNum
			};

		case type.LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
};
