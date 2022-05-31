import apps from '@/data/apps'
import { isBot } from '@/lib/utils'
import { NextApiResponse } from 'next'
import { ApiRequest } from '@/types/api'
import { COOKIE_NAMES } from '@/lib/consts'
import { buildProfileLink } from '@/lib/links'

const handler = (
	{
		query: { handle, default: defaultApp },
		headers: { 'user-agent': userAgent },
		cookies: { [COOKIE_NAMES.profile]: openProfileWith, [COOKIE_NAMES.default]: openLinksWith },
	}: ApiRequest<{ handle: string; default?: string }>,
	res: NextApiResponse
) => {
	if (!handle) return res.status(404).send('Not Found')
	const preference: string = openProfileWith ?? openLinksWith

	if (!preference && !isBot(userAgent)) {
		return res.redirect(`/choose?type=profile&handle=${handle}`)
	}

	res.redirect(buildProfileLink(apps[preference], handle, defaultApp))
}

export default handler
