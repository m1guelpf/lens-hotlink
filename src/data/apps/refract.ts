import { AppPlatform, AppType, LensApp } from '@/types/lens'

const refract: LensApp = {
	id: 'refract',
	name: 'Refract',
	links: {
		home: 'https://refract.withlens.app/',
		post_url: 'https://lenster.xyz/posts/{post:id}',
	},
	image_url: 'https://assets.lenster.xyz/images/apps/refract.jpeg',
	description: 'A decentralized link board, powered by Lens.',
	platform: [AppPlatform.Web],
	type: AppType.ONLY_LINKS,
}

export default refract
