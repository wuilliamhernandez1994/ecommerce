import type { HeroBanner } from "../interface";

export const dataHeroBanner: HeroBanner[] = [
    {
        title: "Water toys are assets",
        titleClasses:
            "text-lg lg:text-3xl font-normal text-[rgba(25,48,59,0.5)]",
        contentLines: [
            {
                text: "Maintain and keep their value.",
                classes:
                    "text-3xl lg:text-7xl font-semibold lg:font-normal mb-7 text-gray-800",
            },
            {
                text: "Maintenance is the key. Reduce your down time with scheduled preventive maintenance.",
                classes:
                    "text-2xl lg:text-4xl font-normal text-gray-800 mb-9 leading-7 lg:leading-12",
            },
        ],
        buttonText: "Request a repair onboard",
        buttonClasses: "bg-yellow-500 text-black",
        backgroundImage: "bg-[url('/img/JS_COPYRIGHT_33-1.webp')]",
    },
    {
        title: "Mid season? Boat full off guests? Water-toy is not working?",
        titleClasses: "text-lg lg:text-[24px] font-normal text-white",
        contentLines: [
            {
                text: "Replacement unit on board during your repairs",
                classes: "text-3xl lg:text-5xl font-normal mb-4 text-white",
            },
        ],
        buttonText: "Search for toys",
        buttonClasses: "bg-yellow-500 text-black mb-16",
        backgroundImage: "bg-[url('/img/replacements-during-summer.webp')]",
    },
    {
        title: "Maintenance is the key",
        titleClasses:
            "text-lg lg:text-4xl font-normal text-[rgba(25,48,59,0.5)]",
        contentLines: [
            {
                text: "Reduce your down time",
                classes: "text-3xl lg:text-6xl font-normal mb-7 text-gray-800",
            },
            {
                text: "with scheduled preventive maintenance.",
                classes: "text-2xl lg:text-4xl font-normal mb-9 text-gray-800",
            },
        ],
        buttonText: "Request a repair",
        buttonClasses: "bg-yellow-500 !text-lg text-black mb-16",
        backgroundImage: "bg-[url('/img/reduce.webp')]",
    },
];
