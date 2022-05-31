import { CookieAttributes } from 'js-cookie'

export const APP_NAME = 'Lens Hotlink'
export const DEFAULT_APP = 'Lenster'

export const COOKIE_NAMES = {
	default: 'lens_openWith',
	post: 'lens_openPostWith',
	profile: 'lens_openProfileWith',
}
export const COOKIE_CONFIG: CookieAttributes = {
	sameSite: 'None',
	secure: true,
	expires: 360,
}
