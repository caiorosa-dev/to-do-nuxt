module.exports = {
	darkMode: 'class',
	mode: 'jit',
	purge: {
		safelist: [
			'bg-indigo-500',
			'ring-indigo-500',
			'border-indigo-500',
			'bg-blue-500',
			'ring-blue-500',
			'border-blue-500',
			'ring-green-500',
			'bg-green-500',
			'border-green-500',
			'bg-gray-500'
		]
	},
	theme: {
		fontFamily: {
			sans: ['Open Sans']
		}
	}
};
