import Link from "next/link"
import { Button } from "../common/Button"

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
      <Link href={link}><img className="h-[33px] hover:text-primary transition-all fill-teal-500" src={icon}/></Link>
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
                        <p className="text-paragraph">I am a recent graduate software engineer with a foundation in full-
                            stack web development. Proficient in Odoo, JavaScript, React,
                            and Node.js. Passionate about web programming, with a focus
                            on creating efficient, scalable, and maintainable web applications.</p>
                    </div>
                    <div className="my-4">
                        <Button>Download CV</Button>
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
            <img src="/about_bg.svg" alt="" className="w-full"/>
        </section>
    )
}
