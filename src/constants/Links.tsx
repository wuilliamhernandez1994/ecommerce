import {
    FaFacebookSquare,
    FaTwitterSquare,
    FaInstagramSquare,
    FaLinkedin,
} from "react-icons/fa";

export const navbarLinks = [
    {
        id: 1,
        title: "Home",
        href: "/",
    },
    {
        id: 2,
        title: "Shop",
        href: "shop",
    },
    {
        id: 3,
        title: "About",
        href: "about",
    },
];

export const socialLinks = [
    {
        id: 1,
        title: "Facebook",
        href: "https://www.facebook.com",
        icon: <FaFacebookSquare className="w-full h-full" />,
    },
    {
        id: 2,
        title: "Twitter",
        href: "https://www.twitter.com",
        icon: <FaTwitterSquare className="w-full h-full" />,
    },
    {
        id: 3,
        title: "Instagram",
        href: "https://www.instagram.com",
        icon: <FaInstagramSquare className="w-full h-full" />,
    },
    {
        id: 4,
        title: "LinkedIn",
        href: "https://www.linkedin.com",
        icon: <FaLinkedin className="w-full h-full" />,
    },
];
