import { Link } from "react-router-dom"

const NavLinks = () => {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/products">Store</Link>
            <Link to="/">Cart</Link>
        </>
    )
}

const Nav = () => {
    return (
        <nav className="md:text-orange-500">
            <div>Logo</div>
            <div>searchBar</div>
            <div>
                <NavLinks />
                <button>Mode</button>
            </div>
        </nav>
    )
}

export default Nav