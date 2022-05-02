import { countTotalOfLetterInWord } from "./countTotalOfLetterInWord.js";

function checkLetter(word, letterInd, letter, x) {
	const val = word[letter].value.toLowerCase();
	const total = countTotalOfLetterInWord(word, val);

	if (total == 0) {
		return !x.includes(val);
	}

	if (word[letter].index < 0) {
		return x.includes(val) && x[letterInd] !== val;
	}
	return x[letterInd] == val;
}

export const filterWords = (allWords, word) => {
	let filtered = allWords.filter((x) => {
		const allChecked = Object.keys(word).map((letter, ind) => checkLetter(word, ind, letter, x));

		return allChecked.every((element) => element === true);
	});

	return filtered;
};
