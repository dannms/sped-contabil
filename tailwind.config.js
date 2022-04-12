module.exports = {
	content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
	theme: {
		colors: {
			primary: '#280071',
			secondary: '#5dfdbc',
			accent: '#1f271b',
			white: '#f5f5f5',
			neutral: '#ebf6ff',
			black: '#010203',
		},
		fontFamily: {
			serif: 'Playfair Display',
			sans: 'Raleway',
			display: 'Broadway',
		},
		extend: {
			backgroundImage: {
				'hero-bg': "url('/images/hero-bg.jpg')",
				'cta-footer': "url('/images/cta-footer.jpg')",
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
