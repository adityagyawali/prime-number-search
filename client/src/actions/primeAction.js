import * as type from "./actionTypes";
import { findPrimeNum } from "../helper";
import axios from "axios";

// type LoadingAction = {
// 	type: type.LOADING,
// 	loading: boolean
// };

// type GetState = () => State;
// type PromiseAction = Promise<Action>;
// type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
// type Dispatch = (
// 	action: Action | ThunkAction | PromiseAction | Array<Action>
// ) => any;

// type Action = LoadingAction;

export const getAllData = (): ThunkAction => dispatch => {
	dispatch(setLoading());
	axios
		.get(
			"https://cors-anywhere.herokuapp.com/https://www.di-mgt.com.au/primes10000.txt"
		)
		.then(res =>
			dispatch({
				type: type.ARRAY_PRIME_NUMBER,
				payload: res.data.split(" ")
			})
		);
};

export const postPrimeNum = inputNum => (dispatch, getState) => {
	const arrayOfNum = getState().primeReducer.allPrimeNum;
	const foundNum = findPrimeNum(inputNum, arrayOfNum);
	axios
		.post("api/input", { inputNum, foundNum })
		.then(res => dispatch(getFoundNum()));
};

export const getFoundNum = () => dispatch => {
	dispatch(setLoading());
	axios.get("api/input").then(res =>
		dispatch({
			type: type.GET_PRIME_NUMBER,
			payload: res.data
		})
	);
};

export const deleteAllNum = () => dispatch => {
	axios.delete("api/input").then(res =>
		dispatch({
			type: type.DELETE_ALL_NUMBER
		})
	);
};

export const setLoading = () => {
	return {
		type: type.LOADING
	};
};
