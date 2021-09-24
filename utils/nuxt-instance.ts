/* eslint-disable import/no-mutable-exports */
import { NuxtAxiosInstance } from '@nuxtjs/axios';
import { NuxtCookies } from 'cookie-universal-nuxt';

let $axios: NuxtAxiosInstance;
let $cookies: NuxtCookies;

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
	$axios = axiosInstance;
}

export function initializeCookies(cookiesInstance: NuxtCookies) {
	$cookies = cookiesInstance;
}

export { $axios, $cookies };
