import { SectionTitle } from "../common/SectionTitle"

const data = [
    {
        company: 'Savvycom JSC',
        position: 'Junior Software Engineer',
        duration: '11/2024 - Now',
        description: 'Worked on a variety of projects, including web development, mobile app development, and software development. Developed and maintained web applications using React, Angular, and Node.js. Developed and maintained mobile applications using React Native. Developed and maintained software applications using Java, C#, and Python.'
    },
    {
        company: 'D-Soft JSC',
        position: 'Junior Software Engineer',
        duration: '3/2024 - 10/2024',
        description: 'Worked on a variety of projects, including web development, mobile app development, and software development. Developed and maintained web applications using React, Angular, and Node.js. Developed and maintained mobile applications using React Native. Developed and maintained software applications using Java, C#, and Python.'
    },
    {
        company: 'DAC Data Technology Vietnam',
        position: 'Junior Software Engineer',
        duration: '10/2023 - 12/2023',
        description: 'Worked on a variety of projects, including web development, mobile app development, and software development. Developed and maintained web applications using React, Angular, and Node.js. Developed and maintained mobile applications using React Native. Developed and maintained software applications using Java, C#, and Python.'
    },
]

const CareerItem:React.FC<CareerItemProp> = ({ company, duration, description, index }) => {
    const isLeft = index % 2 == 0
    return (
        <>
            <div className={`relative w-1/2 ${isLeft ? 'left-0 pr-7' : 'left-1/2 pl-7'}`}>
                <img src='/avatar.jpg' alt='' className={`w-8 h-8 z-10 absolute rounded-full top-[32px] ${isLeft ? '-right-4' : '-left-4'}`}/>
                <div className="bg-white p-4 rounded-2xl">
                    <p className="text-2xl text-big_title font-bold">{company}</p>
                    <p>{duration}</p>
                    <p className="text-paragraph">{description}</p>
                </div>
            </div>
        </>
    )
}

export const Experience = () => {
    return (
        <section id="experience" className="bg-primary">
            <SectionTitle mainTitle="Career Path" subTitle="My Professional Experience" />
            <div className="relative">
                <div className="p-5 max-w-7xl m-auto
                    after:content-[''] after:rounded-full after:absolute after:w-[8px] after:h-[calc(100%-40px)] after:bg-white after:top-5 after:left-1/2 after:ml-[-4px]">
                    {data.map((item, index) => {
                        return <CareerItem key={index} {...item} index={index} />
                    })}
                </div>
            </div>
        </section>
    )
}
