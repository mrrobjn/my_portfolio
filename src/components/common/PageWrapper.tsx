import { NavBar } from "@/components"

export const PageWrapper: React.FC<LayoutProp> = ({ children }) => {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    )
}
