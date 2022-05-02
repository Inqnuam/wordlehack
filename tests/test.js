import { expect, test } from '@playwright/test';

test('header has expected WordleHack!', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('header a h1')).toBe('WordleHack!');
});

test('check correct letters count!', async ({ page }) => {
	await page.goto('/fr/?letter=7');
	expect(await page.textContent('header div button')).toContain('7');

	await page.goto('/fr/?letter=4');
	expect(await page.textContent('header div button')).toContain('4');
});
