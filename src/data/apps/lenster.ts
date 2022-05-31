import { AppPlatform, AppType, LensApp } from '@/types/lens'

const lenster: LensApp = {
	id: 'Lenster',
	name: 'Lenster',
	links: {
		home: 'https://lenster.xyz/',
		post_url: 'https://lenster.xyz/posts/{post:id}',
		profile_url: 'https://lenster.xyz/u/{profile:handle}',
	},
	image_url: 'https://lens.xyz/static/media/lenster.8b83c79a3429715f184ddf346467bc75.svg',
	description: 'Community built, open-source social network.',
	platform: [AppPlatform.Web],
	type: AppType.GENERAL_PURPOSE,
}

export default lenster
