import Layout from '@/components/Layout'
import APILinkView from '@/components/APILinkView'
import { ArrowRightIcon } from '@heroicons/react/outline'

const IndexPage = () => {
	return (
		<Layout>
			<div className="space-y-3 flex flex-col items-center justify-center">
				<p className="text-center font-bold text-white text-4xl">Lens Hotlink</p>
				<p className="text-center text-white/80 text-2xl">
					Links to Lens Protocol posts/profiles that open in the user&apos;s preferred frontend
				</p>
			</div>
			<div className="space-y-8">
				<div className="flex flex-col md:flex-row items-center md:justify-around space-y-8 md:space-y-0">
					<APILinkView label="Link to a Lens profile">
						https://open.withlens.app/profile/{'{handle}'}
					</APILinkView>
					<APILinkView label="Link to a Lens post">https://open.withlens.app/posts/{'{id}'}</APILinkView>
				</div>
				<div className="flex items-center justify-center">
					<APILinkView label="(API) Get info about an app">
						https://open.withlens.app/apps/{'{appId}'}
					</APILinkView>
				</div>
			</div>
			<a
				href="/profile/m1guelpf.lens"
				target="_blnak"
				className="flex items-center justify-center space-x-2 font-medium text-white/70 hover:text-white/90 transition"
			>
				<span>Try it out!</span>
				<ArrowRightIcon className="w-4 h-4" />
			</a>
		</Layout>
	)
}

export default IndexPage
