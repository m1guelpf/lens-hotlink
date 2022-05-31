const APILinkView = ({ label, children }) => (
	<div>
		<p className="text-lg text-white/70 font-medium mb-3 text-center">{label}</p>
		<code className="bg-white/60 text-black/80 backdrop-filter backdrop-blur-lg backdrop-saturate-150 p-2 px-3 rounded-lg text-sm md:text-base">
			{children}
		</code>
	</div>
)

export default APILinkView
