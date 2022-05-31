import apps from '@/data/apps'
import { LensApp } from '@/types/lens'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import { useEffect, useMemo, useState } from 'react'
import { getPreference, setPreference } from '@/lib/cookies'
import { buildPostLink, buildProfileLink } from '@/lib/links'
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/outline'

const ChoosePage = () => {
	const router = useRouter()
	const { id, handle, type }: { id?: string; handle?: string; type?: 'post' | 'profile' } = router.query

	const [selected, setSelected] = useState<string>(null)
	useEffect(() => {
		setSelected(getPreference(type))
	}, [type])

	const setAndRedirectTo = (app: LensApp) => {
		setSelected(app.id)
		setPreference(app.id, type)

		if (type == 'post' && id) window.location.href = buildPostLink(app, id as string)
		if (type == 'profile' && handle) window.location.href = buildProfileLink(app, handle as string)
	}

	const availableApps = useMemo(
		() =>
			Object.values(apps).filter((app: LensApp): boolean =>
				type ? (type == 'post' ? 'post_url' in app.links : 'profile_url' in app.links) : true
			),
		[type]
	)

	return (
		<Layout>
			<div className="space-y-3 flex flex-col items-center justify-center">
				<p className="text-center font-bold text-white text-4xl">Lens Hotlink</p>
				<p className="text-center text-white/80 text-2xl">Select an app to open Lens {type ?? 'link'}s with</p>
				<p className="text-center text-white/60 text-xl">We&apos;ll remember this for the next time</p>
			</div>
			<div className="my-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
				{availableApps.map(app => (
					<button
						className="flex flex-col p-8 rounded-lg bg-white/60 hover:bg-white/70 backdrop-filter backdrop-blur-lg hover:backdrop-blur-3xl hover:backdrop-saturate-150 shadow hover:shadow-lg relative transition"
						onClick={() => setAndRedirectTo(app)}
						key={app.id}
					>
						{selected == app.id && (
							<div className="absolute top-2 right-2">
								<CheckCircleIcon className="w-6 h-6 text-black/40" />
							</div>
						)}
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img className="rounded-full w-14 h-14 object-cover mb-6" src={app.image_url} alt={app.name} />
						<div className="flex flex-col items-start">
							<p className="uppercase text-xl font-bold text-black">{app.name}</p>
							<p className="text-black/50 text-xs">{new URL(app.links.home).host}</p>
						</div>
						<p className="whitespace-pre-wrap font-subheader text-sm sm:text-base text-black/60 text-left mt-4">
							{app.description}
						</p>
					</button>
				))}
			</div>
			<a
				href="https://github.com/m1guelpf/lens-hotlink"
				target="_blnak"
				className="flex items-center justify-center space-x-2 font-medium text-black/60 hover:text-black/80 transition"
			>
				<span>Missing an app? Add it to the list</span>
				<ArrowRightIcon className="w-4 h-4" />
			</a>
		</Layout>
	)
}

export default ChoosePage
