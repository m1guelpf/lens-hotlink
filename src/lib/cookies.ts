import Cookies from 'js-cookie'
import { COOKIE_CONFIG, COOKIE_NAMES } from './consts'

export const getCookieName = (type?: 'post' | 'profile'): string => {
	return type ? (type == 'post' ? COOKIE_NAMES.post : COOKIE_NAMES.profile) : COOKIE_NAMES.default
}

export const getPreference = (type?: 'post' | 'profile'): string | null => {
	return Cookies.get(getCookieName(type)) ?? Cookies.get(COOKIE_NAMES.default)
}

export const setPreference = (value: string, type?: 'post' | 'profile') => {
	Cookies.set(getCookieName(type), value, COOKIE_CONFIG)
}

export const hasPreference = (type?: 'post' | 'profile'): boolean => getPreference(type) != null
