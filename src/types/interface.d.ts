type LayoutProp = {
    children: ReactNode;
};

type NavItemProp = {
    name: string,
    link: string,
}

type IconLinkProp = {
    icon: string,
    link: string,
}

type SectionTitleProp = {
    mainTitle: string,
    subTitle: string,
    color: 'white' | 'primary',
}

type CareerItemProp = {
    company: string,
    duration: string,
    description: string,
    logo: string,
    position: string,
    index: number,
}