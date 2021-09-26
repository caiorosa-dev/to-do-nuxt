/* eslint-disable import/no-mutable-exports */
import { NuxtAxiosInstance } from '@nuxtjs/axios';
import { ColorModeInstance } from '@nuxtjs/color-mode/types/color-mode';
import { NuxtCookies } from 'cookie-universal-nuxt';

let $axios: NuxtAxiosInstance;
let $cookies: NuxtCookies;
let $colorMode: ColorModeInstance;

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
	$axios = axiosInstance;
}

export function initializeCookies(cookiesInstance: NuxtCookies) {
	$cookies = cookiesInstance;
}

export function initializeColorMode(colorModeInstance: ColorModeInstance) {
	$colorMode = colorModeInstance;
}

export { $axios, $cookies, $colorMode };
