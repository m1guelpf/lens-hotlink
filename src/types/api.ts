import { NextApiRequest } from 'next'

type Query = {
	[key: string]: string | string[]
}

export interface ApiRequest<T extends Query> extends NextApiRequest {
	query: T
}
