const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		join(
			__dirname,
			'{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
		),
		...createGlobPatternsForDependencies(__dirname),
		'./../../node_modules/flowbite/**/*.js',
		'./../../node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
		'./public/**/*.html',
		'./src/**/*.{ts,tsx}',
	],
	plugins: [require('flowbite/plugin')],
	theme: {},
};
