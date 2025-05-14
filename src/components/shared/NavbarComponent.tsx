import { Link, NavLink } from "react-router-dom";
import { navbarLinks } from "../../constants/Links";
import { HiOutlineSearch, HiOutlineShoppingBag } from "react-icons/hi";
import { FaBarsStaggered } from "react-icons/fa6";
import { LogoComponent } from "./LogoComponent";

export const NavbarComponent = () => {
    return (
        <header className="bg-white text-black py-4 flex items-center justify-between border-b border-slate-200 mx-auto px-3 w-full sm:w-11/12 lg:w-4/5">
            <LogoComponent />
            <nav className="space-x-5 hidden md:flex">
                {navbarLinks.map((link) => (
                    <NavLink
                        key={link.id}
                        to={link.href}
                        className={({ isActive }) =>
                            `transition-all duration-300 text-lg px-5 py-2.5 relative text-center inline-block uppercase ${
                                isActive
                                    ? "text-cyan-600 underline"
                                    : "text-slate-800"
                            }`
                        }
                    >
                        {link.title}
                    </NavLink>
                ))}
            </nav>
            <div className="flex gap-5 items-center">
                <button>
                    <HiOutlineSearch size={28} />
                </button>
                <div className="relative">
                    <Link
                        to="/account"
                        className="border-2 border-slate-700 w-8 h-8 rounded-full grid place-items-center text-lg font-bold"
                    >
                        W
                    </Link>
                </div>
                <button className="relative">
                    <span className="absolute -bottom-2 w-5 h-5 grid place-items-center bg-black text-white text-xs rounded-full">
                        0
                    </span>
                    <HiOutlineShoppingBag size={30} />
                </button>
            </div>
            <button className="md:hidden">
                <FaBarsStaggered size={30} />
            </button>
        </header>
    );
};
