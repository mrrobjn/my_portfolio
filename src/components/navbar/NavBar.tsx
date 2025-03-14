import Link from "next/link";
import { Button } from "../common/Button";

const navItemArr = [
    {name: 'About', link: '#about'},
    {name: 'Experience', link: '#experience'},
    {name: 'Skills', link: '#skill'},
    {name: 'Contact', link: '#'},
]


export const NavItem: React.FC<NavItemProp> = (item) => {
  return (
    <Link className="uppercase mx-5 tracking-[2px]" href={item.link}>{item.name}</Link>
  )
}

export const NavBar = () => {
    return (
        <nav className="fixed bg-white w-full z-50">
            <div className="flex justify-between items-center h-[72px] w-10/12 m-auto px-5">
                <Link className="font-bold tracking-[2px] uppercase" href="/">My Portfolio</Link>
                <div>
                    {navItemArr.map((item, i) => {
                        return <NavItem link={item.link} name={item.name} key={i}/>
                    })}
                </div>
                <Button>Contact Me</Button>
            </div>
        </nav>
    );
};
