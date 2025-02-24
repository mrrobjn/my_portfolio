import Link from "next/link"

const socialLinks = [
    {
        icon: 'linkedin.svg',
        link: 'https://www.linkedin.com/in/dung-vo-truong-4a6b39270/'
    },
    {
        icon: 'github.svg',
        link: 'https://github.com/mrrobjn'
    },
    {
        icon: 'square-facebook.svg',
        link: '#'
    },
    {
        icon: 'instagram.svg',
        link: '#'
    },
]

const IconLink: React.FC<IconLinkProp> = ({ icon, link }) => {
    return (
      <Link href={link}><img className="h-[33px]" src={icon}/></Link>
    )
}

export const About = () => {
    return (
        <section id="about" className="h-screen flex flex-col">
            <div className="max-w-6xl m-auto mt-28 flex p-5">
                <div className="flex-1 mr-10">
                    <div>
                        <p className="text-lg font-bold text-primary">Hello! I am Dung Vo Truong — </p>
                        <p className="text-4xl font-bold text-big_title">I am a Junior Software Engineer</p>
                        <p className="text-paragraph">I am currently studying at STT Terpadu Nurul Fikri majoring in Informatics Engineering. Sometimes have the motivation to learnand improve new skills. I hope to develop further in 
                            the future to gain real world work experience 
                            in web development.</p>
                    </div>
                    <div className="my-4">
                        <button className="bg-primary font-semibold text-sm text-white py-2 px-5 rounded-full transition-all hover:opacity-80">Download CV</button>
                    </div>
                    <div className="flex w-[172px] justify-between">
                        {socialLinks.map((item, i) => {
                            return <IconLink icon={item.icon} link={item.link} key={i}/>
                        })}
                    </div>
                </div>
                <div className="w-[261px] h-[261px]">
                    <img src="/avatar.jpg" alt="avatar" className="w-full h-full rounded-full"/>
                </div>
            </div>
            <div>
                <img src="/about_bg.svg" alt="" className="w-full"/>
            </div>
        </section>
    )
}
