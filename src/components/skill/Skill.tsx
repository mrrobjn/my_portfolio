import { SectionTitle } from "../common/SectionTitle"

const data = [
    {
        name: 'Odoo',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFT-Y0lAmy2WK6QtK0ZfzTi0OMERiiPiLSCg&s',
    },
    {
        name: 'React',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s',
    },
    {
        name: 'NextJS',
        logo: 'https://img.icons8.com/color/512/nextjs.png',
    },
    {
        name: 'NodeJS',
        logo: 'https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png',
    },
    {
        name: 'TailwindCSS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png',
    },
    {
        name: 'Bootstrap',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png',
    },
    {
        name: 'SCSS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png',
    },
    {
        name: 'Gitlab CI/CD',
        logo: 'https://bephongviet.com/wp-content/uploads/2023/05/gitlab-cicd.png',
    },
    {
        name: 'Docker',
        logo: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png',
    },
    {
        name: 'PostgreSQL',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png',
    },
]

export const Skill = () => {
    return (
        <section id='skill' className="min-h-[calc(100vh-72px)]">
            <SectionTitle color="primary" mainTitle="Skills" subTitle="Programming languages and tools." />
            <div className="grid grid-cols-6 gap-4 max-w-6xl m-auto place-items-center gap-y-10">
                {data.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col">
                            <img src={item.logo} alt={item.name} className="w-[95px] h-[95px] object-contain mb-1"/>
                            <p className="text-center font-bold text-paragraph">{item.name}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
