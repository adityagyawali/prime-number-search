import { combineReducers } from "redux";
import primeReducer from "./primeReducer";

export default combineReducers({
	primeReducer
});

export const allPrimeNumbers = state => state.primeReducer.allPrimeNum;
export const postPrimeNumbers = state => state.primeReducer.postPrimeNum;
export const foundPrimeNumbers = state => state.primeReducer.foundPrimeNum;
export const loading = state => state.primeReducer.loading;
