import { Link } from "react-router-dom"
import { useState } from "react"
import { X ,Menu} from "lucide-react"

const NavLinks = () => {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/products" >Store</Link>
            <Link to="/">Cart</Link>
        </>
    )
}

const Nav = () => {
    const [isOpen, setOpen] = useState(false)

    const toggleNavbar = () => {
        setOpen(!isOpen)
    }

    return (
        <nav className="grid grid-cols-4 grid-flow-col text-center p-3 shadow-md">
            <div className="text-left shrink">Logo</div>
            <div className="shrink-0 col-span-2"><input className="w-full" placeholder="search"></input></div>
            <div className="hidden sm:flex gap-3 justify-end text-blue-700">
                <NavLinks />
                <button>Night</button>
            </div>
            <div className="sm:hidden shrink">
                <button onClick={toggleNavbar} >{isOpen ?<X/>:<Menu />}</button>
                {isOpen && <div className="flex justify-between flex-col bg-yellow-300 text-left "><NavLinks/></div>}
            </div>
        </nav>
    )
}

export default Nav