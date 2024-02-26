/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				deepBlue: "#0E1023",
				lightBlue: "#CAF9FF",
						light1: "#263A9C",
						light2: "#15FACE",
						light3: "#6223C1",
						patito: "#A0D7FF",
			  },
		},
	},
	plugins: [],
}
