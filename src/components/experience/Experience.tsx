import { SectionTitle } from "../common/SectionTitle"

const data = [
    {
        company: 'Savvycom JSC',
        logo: 'https://erp.savvycom.vn/files/savvycom_logo.png',
        position: 'Junior Software Engineer',
        duration: '11/2024 - Now',
        description: 'Develop, deploy ERP & CRM project using Odoo, Docker, Gitlab CI/CD, Nginx.'
    },
    {
        company: 'D-Soft JSC',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Ni14JRZA_8XetDM20ZKXTmeCoLUuvCn77w&s',
        position: 'Fulltime Intern - Junior Software Engineer',
        duration: '3/2024 - 10/2024',
        description: 'Trained in gitflow, Python. Get familliar with Odoo & PostgreSQL, build custom module, apis to interact with mobile app.'
    },
    {
        company: 'DAC Data Technology Vietnam',
        position: 'Partime Intern',
        duration: '10/2023 - 12/2023',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKIpjDMmkOiQbzorlLb0-8ZyB06Y-YhPPY-A&s',
        description: 'Trained in security, gitflow, coding convention,... Develop a project using Laravel and React in a team of 2 members.'
    },
]

const CareerItem:React.FC<CareerItemProp> = ({ company, duration, position, description, index, logo }) => {
    const isLeft = index % 2 == 0
    return (
        <>
            <div className={`relative w-1/2 ${isLeft ? 'left-0 pr-7' : 'left-1/2 pl-7'}`}>
                <img src={logo} alt='' className={`bg-white w-8 h-8 z-10 absolute rounded-full top-1/3 ${isLeft ? '-right-4' : '-left-4'}`}/>
                <div className="bg-white p-4 rounded-2xl">
                    <p className="text-2xl text-big_title font-bold">{company}</p>
                    <p className="italic">{position}</p>
                    <p>{duration}</p>
                    <p className="text-paragraph">{description}</p>
                </div>
            </div>
        </>
    )
}

export const Experience = () => {
    return (
        <section id="experience">
            <div className="bg-primary">
                <SectionTitle color="white" mainTitle="Career Path" subTitle="My Professional Experience" />
                <div className="relative">
                    <div className="px-5 max-w-7xl m-auto
                        after:content-[''] after:rounded-full after:absolute after:w-[8px] after:h-full after:bg-[#333] after:top-0 after:left-1/2 after:ml-[-4px]">
                        {data.map((item, index) => {
                            return <CareerItem key={index} {...item} index={index} />
                        })}
                    </div>
                </div>
            </div>
            <img src="/wave_bottom.svg" alt="" className="w-full"/>
        </section>
    )
}
