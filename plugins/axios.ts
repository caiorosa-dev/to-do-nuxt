import { Plugin } from '@nuxt/types';

const axiosPlugin: Plugin = ({ app, store, redirect }) => {
	app.$axios.onRequest((config) => {
		const token = app.$cookies.get('token');

		if (token) {
			config.headers.Authorization = token;
		}
	});

	app.$axios.onError((err) => {
		if (err.response?.status === 401) {
			app.$cookies.remove('token');

			store.dispatch('modules/authentication/update', null);

			return redirect('/login');
		}
	});
};

export default axiosPlugin;
