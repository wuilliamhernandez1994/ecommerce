import { useState, useRef, useEffect } from "react";

const RepairSection = () => {
    const [itemOptions] = useState(["Seabob F5", "Seabob F7", "Seabob F5s"]);
    const [methodOptions] = useState(["Pick-up", "Drop-off", "Mail-in"]);
    const [showItemDropdown, setShowItemDropdown] = useState(false);
    const [showMethodDropdown, setShowMethodDropdown] = useState(false);
    const [selectedItem, setSelectedItem] = useState(itemOptions[0]);
    const [selectedMethod, setSelectedMethod] = useState(methodOptions[0]);
    const itemRef = useRef<HTMLDivElement | null>(null);
    const methodRef = useRef<HTMLDivElement | null>(null);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                itemRef.current &&
                !itemRef.current.contains(event.target as Node)
            ) {
                setShowItemDropdown(false);
            }
            if (
                methodRef.current &&
                !methodRef.current.contains(event.target as Node)
            ) {
                setShowMethodDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="w-lvw mx-auto sm:-mx-[4.8%] lg:-mx-[13.8%] mb-15">
            {/* Hero Section */}
            <div className="relative bg-gray-900 text-white flex justify-start font-nunito pt-7 pb-7 md:pb-14">
                <img
                    src="/img/seabob-repairpng.png"
                    alt="Seabob animation"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-10 px-4 w-lvw mx-auto sm:mx-[3.2%] lg:mx-[12.2%]">
                    <p className="uppercase tracking-widest text-xl md:text-2xl font-normal mb-2 inline-block">
                        Luxury Toys
                        {/* <p className="text-xs md:text-sm inline ml-1">Repair</p> */}
                    </p>
                    <p className="text-3xl md:text-4xl font-light">
                        The Fastest, The Easiest and The Cheapest way to get
                        your Seabob fixed.
                    </p>
                </div>
            </div>

            {/* Action Form */}
            <div className="-mt-12 relative z-20 px-4">
                <div className="w-[92%] lg:w-[78%] mx-auto bg-white shadow-lg hidden flex-row md:flex items-center px-4 py-2">
                    {/* "I want to repair my" */}
                    <div
                        className="flex items-center flex-1 w-full sm:w-auto relative"
                        ref={itemRef}
                    >
                        <span className="text-gray-700 mr-2 whitespace-nowrap text-2xl">
                            I want to repair my
                        </span>
                        <button
                            onClick={() =>
                                setShowItemDropdown(!showItemDropdown)
                            }
                            className="text-yellow-500 font-normal flex items-center focus:outline-none text-4xl"
                        >
                            {selectedItem}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        {showItemDropdown && (
                            <ul className="absolute top-full mt-2 left-0 bg-white w-40 z-30">
                                {itemOptions.map((opt) => (
                                    <li
                                        key={opt}
                                        onClick={() => {
                                            setSelectedItem(opt);
                                            setShowItemDropdown(false);
                                        }}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        {opt}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="hidden sm:block border-l h-8 mx-4" />

                    {/* "How?" */}
                    <div
                        className="flex items-center flex-1 w-full sm:w-auto relative mt-4 sm:mt-0"
                        ref={methodRef}
                    >
                        <span className="text-gray-700 mr-2 whitespace-nowrap text-2xl">
                            How?
                        </span>
                        <button
                            onClick={() =>
                                setShowMethodDropdown(!showMethodDropdown)
                            }
                            className="text-yellow-500 font-normal flex items-center focus:outline-none text-4xl"
                        >
                            {selectedMethod}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        {showMethodDropdown && (
                            <ul className="absolute top-full mt-2 left-0 bg-white w-40 z-30">
                                {methodOptions.map((opt) => (
                                    <li
                                        key={opt}
                                        onClick={() => {
                                            setSelectedMethod(opt);
                                            setShowMethodDropdown(false);
                                        }}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        {opt}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Request Button */}
                    {/* <button className="mt-4 sm:mt-0 bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-yellow-600 transition ml-auto">
                        Request a repair
                    </button> */}
                    <a
                        href=""
                        className={`text-sm font-medium py-4 px-8 mb-2.5 w-fit [clip-path:polygon(0_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%)] bg-yellow-500 text-gray-900 hover:bg-yellow-600`}
                    >
                        Request a repair
                    </a>
                </div>
            </div>
        </div>
    );
};

export default RepairSection;
