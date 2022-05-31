/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: '/post/:id',
				destination: '/api/post/:id',
			},
			{
				source: '/profile/:handle',
				destination: '/api/profile/:handle',
			},
		]
	},
}

module.exports = nextConfig
