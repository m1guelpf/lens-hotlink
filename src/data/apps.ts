import iris from './apps/iris'
import sepana from './apps/sepana'
import lenster from './apps/lenster'
import refract from './apps/refract'
import { LensApp } from '@/types/lens'
import lensfrens from './apps/lensfrens'

const apps: Record<string, LensApp> = Object.fromEntries(
	[iris, sepana, lenster, refract, lensfrens].map(app => [app.id, app])
)

export default apps
