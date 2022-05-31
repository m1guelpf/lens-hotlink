import { AppPlatform, AppType, LensApp } from '@/types/lens'

const refract: LensApp = {
	id: 'lensfrens',
	name: 'LensFrens',
	links: {
		home: 'https://lensfrens.xyz/',
		profile_url: 'https://lensfrens.xyz/{post:id}',
	},
	image_url: 'https://lens.xyz/static/media/lensfrens.2f28dc59c1c3058c6d170c5c6a5fecca.svg',
	description: 'Discover and follow other Lens profiles based on similar Web3 footprint.',
	platform: [AppPlatform.Web],
	type: AppType.READ_ONLY,
}

export default refract
