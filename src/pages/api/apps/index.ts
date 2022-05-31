import apps from '@/data/apps'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = (_: NextApiRequest, res: NextApiResponse) => res.status(200).json(apps)

export default handler
