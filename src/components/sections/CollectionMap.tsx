import { useState } from "react";

// Definir el tipo para los pines
type PinData = {
    id: number;
    top: string;
    left: string;
    info: string;
    img: string;
};

const pinsData: PinData[] = [
    {
        id: 1,
        top: "10%",
        left: "68%",
        info: "Miami 681 e 17 Street Hialeah FL,",
        img: "miami.jpg",
    },
];

// Lista de ciudades
const cities = [
    {
        name: "Hialeah FL",
        value: "hialeah",
        id: "1",
    },
];

export const CollectionMap = () => {
    const [activePin, setActivePin] = useState<number | null>(null);
    const activePinData = pinsData.find((pin) => pin.id === activePin);

    // Estado para el combo personalizado
    const [selectedCity, setSelectedCity] = useState(cities[0]);
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="p-3 mx-auto w-auto sm:mx-[5%] lg:mx-[10%]">
                <div className="">
                    <p className="text-lg md:text-2xl font-normal text-[rgba(25,48,59,.5)]">
                        Ocean Premium Repair centre’s. FASTER and CHEAPER than
                        local provider.
                    </p>
                    <p className="text-2xl lg:text-3xl font-normal mb-6">
                        How to do I get my Seabob fixed?
                    </p>
                    <p className="text-lg font-normal mb-4">
                        While out there cruising your first concern is how to
                        get your Water toy to us, right? No worries we have
                        listed the options below. You can simply choose to drop
                        off the toy to be repaired in one of Ocean premium’s
                        service centres.
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-4 w-full bg-[#232937] md:bg-[url('/img/usa-fl.svg')] bg-no-repeat bg-contain bg-top relative h-auto md:h-[775px]">
                <div className="relative md:absolute bottom-0 z-50 p-3 mx-auto w-auto sm:mx-[5%] lg:mx-[10%]">
                    <span className="text-gray-500 text-2xl mb-2">
                        17 Collection points across the Mediterranean
                    </span>
                    <h2 className="hidden sm:block text-2xl text-white mb-4">
                        <span>I will drop-off my Seabob to </span>
                        <div className="relative inline-block w-72">
                            <button
                                type="button"
                                className="w-full bg-transparent text-white py-2 rounded-t-lg text-left flex justify-between items-center cursor-pointer"
                                onClick={() => setOpen(!open)}
                            >
                                <span>{selectedCity.name}</span>
                                <svg
                                    className={`w-5 h-5 ml-2 transition-transform ${
                                        open ? "rotate-180" : ""
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {open && (
                                <ul className="absolute z-50 w-full bg-[rgba(25,48,59,.89)] max-h-96 overflow-y-auto">
                                    {cities.map((city) => (
                                        <li
                                            key={city.value}
                                            className={`px-4 py-2 cursor-pointer text-white text-xl hover:text-black transition ${
                                                selectedCity.value ===
                                                city.value
                                                    ? "font-semibold bg-[#22343a]"
                                                    : ""
                                            }`}
                                            onClick={() => {
                                                setSelectedCity(city);
                                                setOpen(false);
                                            }}
                                        >
                                            {city.name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <span className="cityWrapper"></span>
                    </h2>
                    <h2 className="block sm:hidden text-2xl text-white mb-4">
                        Dropping off your Seabob is
                    </h2>
                    <div className="mb-4 text-sm text-white">
                        <p>
                            Whether you are in the South of France, Italy,
                            Greece or anywhere across the Mediterranean, you’ve
                            got our Collection Point nearby. Simply drop off
                            your Water toy to one of our Collection points and
                            we will take care of the rest.
                        </p>
                    </div>
                    <div className="pb-holder flex flex-col items-start gap-4 mb-6">
                        <p className="hidden sm:block">
                            <span
                                className="text-5xl font-semibold text-[#2cc079]"
                                id="repairPrice"
                            >
                                FREE
                            </span>
                        </p>
                        <a
                            href=""
                            className="text-sm font-semibold py-4 px-8 mb-2.5 w-fit [clip-path:polygon(0_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%)] bg-yellow-400"
                        >
                            Request a repair
                        </a>
                    </div>
                </div>
                <div className="hidden md:block w-full">
                    {pinsData.map((pin) => (
                        <button
                            key={pin.id}
                            onClick={() => setActivePin(pin.id)}
                            style={{
                                position: "absolute",
                                top: pin.top,
                                left: pin.left,
                                transform: "translate(-50%, -50%)",
                            }}
                            className="bg-white rounded-full border-amber-400 border-solid border-2 w-6 h-6 cursor-pointer z-50"
                            aria-label={`Pin ${pin.id}`}
                        />
                    ))}
                    {activePinData && (
                        <div
                            style={{
                                position: "absolute",
                                top: activePinData.top,
                                left: activePinData.left,
                                transform: "translate(-50%, -130%)",
                                zIndex: 10,
                                border: "1px solid #E4E4E6",
                            }}
                            className="bg-white text-black p-2.5 pt-6 rounded-lg shadow-lg flex flex-col items-center"
                        >
                            <button
                                onClick={() => setActivePin(null)}
                                className="absolute top-0 right-0 ml-2 px-2 py-1"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-4 cursor-pointer"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                            <div
                                className="h-8 w-full bg-no-repeat bg-[length:100%_100%] rounded-sm"
                                style={{
                                    backgroundImage: `url('/img/${activePinData.img}')`,
                                }}
                            ></div>
                            {activePinData.info}
                            <svg
                                width="20"
                                height="10"
                                viewBox="0 0 20 10"
                                style={{
                                    position: "absolute",
                                    left: "50%",
                                    top: "100%",
                                    transform: "translateX(-50%)",
                                    zIndex: 10,
                                }}
                            >
                                <polygon
                                    points="0,0 20,0 10,10"
                                    fill="white"
                                    stroke="white"
                                    strokeWidth="1"
                                />
                            </svg>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
