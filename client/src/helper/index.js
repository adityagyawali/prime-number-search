export const findFirstNum = (num, array) => {
	for (let i = 0; i < array.length; i++) {
		if (array[i].includes(num)) {
			return array[i];
		}
	}
};

export const findPrimeNum = (input, array) => {
	const num = findFirstNum(input, array);
	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			return false;
		} else if (num !== 1 && num !== 0) {
			return num;
		}
	}
};

//validate
export const validate = input => {
	return {
		num:
			input.length === 0
				? "Input field cannot be empty"
				: "" || !/^[0-9]*$/.test(input)
					? "Please insert only numbers"
					: "" || /^[0-9]{3}$/.test(input)
						? ""
						: "Number must contain three digits"
	};
};
