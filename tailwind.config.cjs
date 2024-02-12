/** @type {import('tailwindcss').Config} */
module.exports = {
	corePlugins: {
		preflight: true,
	},
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {},
};
