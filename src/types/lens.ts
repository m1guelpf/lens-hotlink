export enum AppPlatform {
	Web = 'web',
	Mobile = 'mobile',
	Desktop = 'desktop',
}

export enum AppType {
	READ_ONLY = 'read_only',
	ONLY_LINKS = 'only_links',
	GENERAL_PURPOSE = 'general_purpose',
}

type AppLinks = {
	home: string
} & ({ profile_url: string } | { post_url: string })

export type LensApp = {
	id: string
	name: string
	links: AppLinks
	image_url: string
	description: string
	platform: AppPlatform[]
	type: AppType
}
