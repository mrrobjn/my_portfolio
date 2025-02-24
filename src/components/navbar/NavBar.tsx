import Link from "next/link";

const navItemArr = [
    {name: 'About', link: '#about'},
    {name: 'Experience', link: '#experience'},
    {name: 'Skills', link: '#skill'},
    {name: 'Contact', link: '#'},
]


export const NavItem: React.FC<NavItemProp> = (item) => {
  return (
    <Link className="uppercase mx-5" href={item.link}>{item.name}</Link>
  )
}

export const NavBar = () => {
    return (
        <nav className="fixed bg-white w-full z-50">
            <div className="flex justify-between items-center h-[72px] max-w-7xl m-auto px-5">
                <a className="font-bold" href="/">My Portfolio</a>
                <div>
                    {navItemArr.map((item, i) => {
                        return <NavItem link={item.link} name={item.name} key={i}/>
                    })}
                </div>
                <div>Let's talk</div>
            </div>
        </nav>
    );
};
