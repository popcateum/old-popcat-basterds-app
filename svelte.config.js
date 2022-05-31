// import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-node';
// import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
      prependData: `@import "src/scss/app.scss";`
    },
	}),

	kit: {
		adapter: adapter({ out: 'build' }),
		alias: {
      $stores: 'src/stores',
      $blockchain: 'src/blockchain'
    },
	},
};

export default config;
