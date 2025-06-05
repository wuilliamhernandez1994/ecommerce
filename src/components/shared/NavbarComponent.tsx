import { NavLink } from "react-router-dom";
import { navbarLinks } from "../../constants/Links";
import { LogoComponent } from "./LogoComponent";

export const NavbarComponent = () => {
    return (
        <div className="border-b border-slate-200">
            <header className="grid grid-cols-5 gap-0 bg-white text-black items-center mx-auto px-3 w-auto sm:mx-[5%] lg:mx-[10%]">
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
