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
        < >
        <nav className="grid grid-cols-4 grid-flow-col text-center p-3 shadow-md items-center">
            <div className="text-left shrink">Logo</div>
            <div className="shrink-0 col-span-2"><input className="w-3/4 bg-slate-100 rounded p-1" placeholder="search"></input></div>
            <div className="hidden sm:flex gap-3 justify-end text-blue-700 text-lg font-medium">
                <NavLinks />
                <button>Night</button>
            </div>
            <div className="sm:hidden shrink">
                <button onClick={toggleNavbar} className="bg-blue-500 text-white">{isOpen ?<X/>:<Menu />}</button>
            </div>
        </nav>
        {isOpen && <div className="flex flex-col bg-sky-100 text-left items-end gap-3 px-5"><NavLinks /></div>}
        </>
    )
}

export default Nav