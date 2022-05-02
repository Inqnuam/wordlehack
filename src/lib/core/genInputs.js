export const genInputs = (count = 5) => {
	let cleanObj = {};

	for (let i = 0; i < count; i++) {
		cleanObj[`letter${i}`] = {
			value: '',
			index: -1
		};
	}

	return cleanObj;
};
