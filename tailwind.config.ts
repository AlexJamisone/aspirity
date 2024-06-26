import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#141414',
				secodary: '#232324',
				modal: '#303030',
				accent: '#0047BB',
				'accent-hov': '#003182',
				'accent-focuse': '#4c7ecf',
				disabel: '#424242',
				'static-green': '#25824F',
				'static-red': '#DB4546',
				'static-orange': '#FFB649',
				tertiary: '#202021',
				'prime-bord': '#363738',

				'primary-txt': '#E1E3E6',
				'secondary-txt': '#B0B1B6',
				'tertiary-txt': '#76787A',
			},
			fontFamily: {
				base: ['"Poppins"', 'sans-serif'],
			},
			padding: {
				'grid-x': '213px',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
};
export default config;
