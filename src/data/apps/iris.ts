import { AppPlatform, AppType, LensApp } from '@/types/lens'

const lenster: LensApp = {
	id: 'iris',
	name: 'Iris',
	links: {
		home: 'https://irisapp.xyz/',
		post_url: 'https://irisapp.xyz/post/{post:id}',
		profile_url: 'https://irisapp.xyz/user/{profile:handle}',
	},
	image_url: 'https://lens.xyz/static/media/iris.ab17d0a93cbea323c0a667158b967b81.svg',
	description: 'Subscribe to creator feeds for access to token-gated content.',
	platform: [AppPlatform.Web],
	type: AppType.GENERAL_PURPOSE,
}

export default lenster
