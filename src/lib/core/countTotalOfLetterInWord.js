export const countTotalOfLetterInWord = (word, val) => {
	let count = 0;
	Object.keys(word).forEach((letter) => {
		if (word[letter].value.toLowerCase() == val && word[letter].index !== -1) count++;
	});
	return count;
};
