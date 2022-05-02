//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
const dev = process.env.NODE_ENV === 'development';

//https://github.com/sveltejs/kit/blob/master/packages/adapter-static/README.md

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		prerender: {
			default: true,
			onError: () => {}
		},
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: 'index.html',
			precompress: false
		}),
		appDir: 'internal',
		trailingSlash: 'always',
		paths: {
			base: dev ? '' : '/wordlehack'
		}
	}
};

export default config;
