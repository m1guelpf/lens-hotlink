import apps from '@/data/apps'
import { NextApiResponse } from 'next'
import { ApiRequest } from '@/types/api'

const handler = ({ query: { id } }: ApiRequest<{ id: string }>, res: NextApiResponse) => {
	if (!id || !apps[id]) return res.status(404).send('Not Found')

	res.status(200).json(apps[id])
}

export default handler
