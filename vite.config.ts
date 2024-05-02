import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	test:{
		coverage:{
			reporter:["text","html"]
		}
	},
	plugins: [sveltekit()]
});
