import { Link } from "react-router-dom";
import { dataFooter } from "../../data/DataFooter";
import { LogoComponent } from "./LogoComponent";
import { socialLinks } from "../../constants/Links";

export const FooterComponent = () => {
    return (
        <>
            <footer className="py-8 bg-[#f8f8f8] text-gray-800 text-base px-3">
                <div className="flex flex-col justify-between gap-20 mx-auto w-full sm:w-11/12 lg:w-4/5">
                    <div className="flex flex-wrap md:flex-nowrap gap-6 md:gap-15 xl:gap-30">
                        {dataFooter.map((element, index) => (
                            <div
                                key={index}
                                className="flex flex-col gap-4 flex-1 min-w-fit"
                            >
                                <p className="font-semibold uppercase tracking-tighter">
                                    {element.name}
                                </p>
                                <nav className="flex flex-col gap-2 text-sm font-normal">
                                    {element.sections.map((section, count) => (
                                        <Link
                                            key={count}
                                            to={"#"}
                                            className="hover:text-yellow-400"
                                        >
                                            {section}
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        ))}
                    </div>
                    <div className="container flex justify-between border-t border-gray-300 pt-10">
                        <LogoComponent />
                        <div className="flex gap-5">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    target="_blank"
                                    rel={link.title}
                                    className="w-6 h-6 flex items-center justify-center"
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
            <div className="pt-8 pb-15 text-center">
                © 2010 - 2025 Ocean Premium - Water Toys anytime anywhere.
            </div>
        </>
    );
};
