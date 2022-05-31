import { AppPlatform, AppType, LensApp } from '@/types/lens'

const sepana: LensApp = {
	id: 'sepana',
	name: 'Sepana',
	links: {
		home: 'https://lens.sepana.io/',
		profile_url: 'https://lens.sepana.io/posts?from_users={profile:handle}',
	},
	image_url: 'https://lens.xyz/static/media/sepana.f303bbf02acf69d644e75adc3f48f12f.svg',
	description: 'Search engine to discover the magic of Lens. Find content, users, bios, social graphs, and more.',
	platform: [AppPlatform.Web],
	type: AppType.READ_ONLY,
}

export default sepana
