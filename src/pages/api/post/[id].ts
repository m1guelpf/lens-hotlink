import apps from '@/data/apps'
import { isBot } from '@/lib/utils'
import { NextApiResponse } from 'next'
import { ApiRequest } from '@/types/api'
import { COOKIE_NAMES } from '@/lib/consts'
import { buildPostLink } from '@/lib/links'

const handler = (
	{
		query: { id, default: defaultApp },
		headers: { 'user-agent': userAgent },
		cookies: { [COOKIE_NAMES.post]: openPostWith, [COOKIE_NAMES.default]: openLinksWith },
	}: ApiRequest<{ id: string; default?: string }>,
	res: NextApiResponse
) => {
	if (!id) return res.status(404).send('Not Found')
	const preference: string = openPostWith ?? openLinksWith

	if (!preference && !isBot(userAgent)) {
		return res.redirect(`/choose?type=post&id=${id}`)
	}

	res.redirect(buildPostLink(apps[preference], id, defaultApp))
}

export default handler
