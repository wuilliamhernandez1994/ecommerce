import { NavLink } from "react-router-dom";
import { navbarLinks } from "../../constants/Links";
import { LogoComponent } from "./LogoComponent";

export const NavbarComponent = () => {
    return (
        <div>
            <header className="grid grid-cols-5 gap-0 bg-white text-black items-center border-b border-slate-200 mx-auto px-3 w-auto sm:mx-[5%] lg:mx-[10%]">
                <div className="col-start-1 col-end-2 flex items-center">
                    <LogoComponent />
                </div>
                <nav className="col-start-2 col-end-5 space-x-0 lg:space-x-5 flex justify-center">
                    {navbarLinks.map((link) => (
                        <NavLink
                            key={link.id}
                            to={link.href}
                            className={({ isActive }) =>
                                `transition-all duration-300 text-xs lg:text-lg px-2 lg:px-5 py-1 lg:py-2.5 relative text-center inline-block uppercase ${
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
                <div className="col-start-5 col-end-6"></div>
            </header>
        </div>
    );
};

{
    /* <div className="flex gap-5 items-center">
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
                </button> */
}
