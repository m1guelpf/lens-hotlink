import Image from 'next/image'
import bgImage from '@images/bg.png'
import cardImage from '@images/card.jpg'
import Head from 'next/head'

const Layout = ({ children }) => {
	const meta = {
		title: `Lens links that open with your preferred frontend`,
		description: `Lens Protocol content can be rendered with multiple frontends. Using Hotlink, users always get their favourite one.`,
		image: `https://open.withlens.app${cardImage.src}`,
	}

	return (
		<>
			<Head>
				<title>{meta.title}</title>
				<meta name="title" content={meta.title} />
				<meta name="description" content={meta.description} />

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://open.withlens.app" />
				<meta property="og:title" content={meta.title} />
				<meta property="og:description" content={meta.description} />
				<meta property="og:image" content={meta.image} />

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://open.withlens.app" />
				<meta property="twitter:title" content={meta.title} />
				<meta property="twitter:description" content={meta.description} />
				<meta property="twitter:image" content={meta.image} />
			</Head>
			<div className="p-8 space-y-16 max-w-7xl mx-auto">
				<div className="fixed inset-0 -z-10 h-screen">
					<Image src={bgImage} placeholder="blur" layout="fill" alt="" />
				</div>
				{children}
			</div>
		</>
	)
}

export default Layout
