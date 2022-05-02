import { readable } from 'svelte/store';
import { dev } from '$app/env';
const link = dev ? '/' : '/wordlehack/';

export const languages = readable([
	{
		name: 'Français',
		code: 'fr',
		flag: link + 'flags/fr.svg',
		letters: [4, 5, 6, 7, 8, 9, 10, 11],
		selected: 5
	},
	{
		name: 'English',
		code: 'en',
		flag: link + 'flags/en.svg',
		letters: [5],
		selected: 5
	}
]);
