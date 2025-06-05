import {
    FaFacebookSquare,
    FaTwitterSquare,
    FaInstagramSquare,
    FaLinkedin,
} from "react-icons/fa";

export const navbarLinks = [
    {
        id: 1,
        title: "Maintenance",
        href: "/",
    },
    {
        id: 2,
        title: "Part",
        href: "part",
    },
    {
        id: 3,
        title: "Repair",
        href: "repair",
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
