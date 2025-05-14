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
        <div className="w-lvw mx-auto sm:-mx-[4.8%] lg:-mx-[13.8%]">
            {/* Hero Section */}
            <div className="relative bg-gray-900 text-white h-96 flex items-center justify-center">
                <img
                    src="/path-to-seabob-engine-image.jpg"
                    alt="Seabob animation"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60" />
                <div className="relative z-10 text-center px-4">
                    <p className="uppercase tracking-widest text-sm mb-2">
                        Official Seabob Repair Centre
                    </p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-light">
                        The Fastest, The Easiest and The Cheapest way to get
                        your Seabob fixed.
                    </h1>
                </div>
            </div>

            {/* Action Form */}
            <div className="-mt-12 relative z-20 px-4">
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl flex flex-col sm:flex-row items-center p-6">
                    {/* "I want to repair my" */}
                    <div
                        className="flex items-center flex-1 w-full sm:w-auto relative"
                        ref={itemRef}
                    >
                        <span className="text-gray-700 mr-2 whitespace-nowrap">
                            I want to repair my
                        </span>
                        <button
                            onClick={() =>
                                setShowItemDropdown(!showItemDropdown)
                            }
                            className="text-yellow-500 font-semibold flex items-center focus:outline-none"
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
                        <span className="text-gray-700 mr-2 whitespace-nowrap">
                            How?
                        </span>
                        <button
                            onClick={() =>
                                setShowMethodDropdown(!showMethodDropdown)
                            }
                            className="text-yellow-500 font-semibold flex items-center focus:outline-none"
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
                    <button className="mt-4 sm:mt-0 bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-yellow-600 transition ml-auto">
                        Request a repair
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RepairSection;
