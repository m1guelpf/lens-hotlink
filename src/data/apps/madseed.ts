import { AppPlatform, AppType, LensApp } from '@/types/lens'

const madseed: LensApp = {
	id: 'Madseed',
	name: 'Madseed',
	links: {
		home: 'https://madseed.xyz/home',
		post_url: 'https://madseed.xyz/p/{post:id}',
		profile_url: 'https://madseed.xyz/u/{profile:handle}',
	},
	image_url: 'https://assets-madseed.vercel.app/images/icons/madseed-og-logo.jpg',
	description:
		'Social-to-Earn app; built with Lens protocol. Content creator composes article, or multimedia; selling in marketplaces. Pluggable framework for Lens developer',
	platform: [AppPlatform.Web, AppPlatform.Mobile],
	type: AppType.GENERAL_PURPOSE,
}

export default madseed
