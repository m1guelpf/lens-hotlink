import apps from '@/data/apps'
import { LensApp } from '@/types/lens'
import { DEFAULT_APP } from './consts'

export const buildPostLink = (app: LensApp, postId: string, defaultApp?: string): string => {
	if ('post_url' in app.links) return app.links.post_url.replace('{post:id}', postId)

	return buildPostLink(apps[defaultApp ?? DEFAULT_APP], postId)
}

export const buildProfileLink = (app: LensApp, handle: string, defaultApp?: string): string => {
	if ('profile_url' in app.links) return app.links.profile_url.replace('{profile:handle}', handle)

	return buildProfileLink(apps[defaultApp ?? DEFAULT_APP], handle)
}
