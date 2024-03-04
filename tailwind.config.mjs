/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				deepBlue: "#0E1023",
				lightBlue: "#CAF9FF",
				skyBlue: "#78B8E3",
				patito: "#A0D7FF",
				available: "#2749A882",
						light1: "#263A9C",
						less:"#3448AF56",
						light2: "#15FACE",
						light3: "#6223C1",
						titles: '#5FACD7',
			  }, 
			  linearGradients: {
				borderColor: 'linear-gradient(100deg, rgb(255, 127, 251), rgb(122,200, 255))',
			  },
		},
	},
	plugins: [require('tailwind-scrollbar')],
}
