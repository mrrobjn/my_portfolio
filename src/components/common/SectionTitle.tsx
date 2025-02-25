export const SectionTitle:React.FC<SectionTitleProp> = ({ mainTitle, subTitle, color }) => {
	return (
		<div className={`m-auto w-fit text-center ${color == 'primary'? 'text-big_title' : 'text-white'} flex flex-col gap-1 py-5`}>
			<h1 className="text-[40px] font-bold">{mainTitle}</h1>
			<hr/>
			<p className="text-xl">{subTitle}</p>
		</div>
	)
}
