module.exports = {
	darkMode: 'class',
	mode: 'jit',
	purge: {
		safelist: [
			// Indigo
			'bg-indigo-500',
			'ring-indigo-500',
			'border-indigo-500',
			// Blue
			'bg-blue-500',
			'ring-blue-500',
			'border-blue-500',
			// Verde
			'ring-green-500',
			'bg-green-500',
			'border-green-500',
			// Vermelho
			'ring-red-500',
			'bg-red-500',
			'bg-red-400',
			'border-red-500',
			'stroke-red-500',
			// Yellow
			'ring-yellow-400',
			'bg-yellow-400',
			'border-yellow-400',
			// Rosa
			'ring-pink-500',
			'bg-pink-500',
			'border-pink-500',
			// Background
			'bg-green-400',
			'bg-gray-500',
			'bg-gray-600',
			'bg-gray-700',
			'bg-gray-800',
			'bg-gray-900'
		]
	},
	theme: {
		fontFamily: {
			sans: ['Open Sans']
		}
	},
	variants: {
		borderColor: ['focus-within']
	}
};
