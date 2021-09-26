import { Plugin } from '@nuxt/types';
import { initializeAxios, initializeColorMode, initializeCookies } from '@/utils/nuxt-instance';

const accessor: Plugin = ({ $axios, app, $colorMode }) => {
	initializeAxios($axios);
	initializeCookies(app.$cookies);
	initializeColorMode($colorMode);
};

export default accessor;
