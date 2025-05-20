import { useState } from "react";

// Definir el tipo para los pines
type PinData = {
    id: number;
    top: string;
    left: string;
    info: string;
};

const pinsData: PinData[] = [
    {
        id: 1,
        top: "30%",
        left: "40%",
        info: "Información del pin 1",
    },
    {
        id: 2,
        top: "49%",
        left: "47%",
        info: "Información del pin 2",
    },
    {
        id: 3,
        top: "40%",
        left: "30%",
        info: "Información del pin 3",
    },
    {
        id: 4,
        top: "57%",
        left: "34%",
        info: "Información del pin 4",
    },
    {
        id: 5,
        top: "35%",
        left: "21%",
        info: "Información del pin 5",
    },
    {
        id: 6,
        top: "12%",
        left: "57%",
        info: "Información del pin 6",
    },
    // Puedes agregar más pines aquí
];

// Lista de ciudades
const cities = [
    { name: "Barcelona", value: "barcelona", id: "455" },
    { name: "Palma de Mallorca", value: "palma-de-mallorca", id: "460" },
    { name: "Palermo", value: "palermo", id: "516" },
    { name: "Olbia", value: "olbia", id: "535" },
    { name: "Naples", value: "naples", id: "504" },
    { name: "Athens", value: "athens", id: "560" },
    { name: "Tivat", value: "tivat", id: "554" },
    { name: "Split", value: "split", id: "549" },
    { name: "Zadar", value: "zadar", id: "546" },
    { name: "Rijeka", value: "rijeka", id: "544" },
    { name: "Livorno", value: "livorno", id: "498" },
    { name: "Viareggio", value: "viareggio", id: "497" },
    { name: "La Spezia", value: "la-spezia", id: "496" },
    { name: "Genova", value: "genova", id: "493" },
    { name: "Sanremo", value: "sanremo", id: "487" },
    { name: "La Ciotat", value: "la-ciotat", id: "469" },
    { name: "Antibes", value: "antibes", id: "477" },
];

export const CollectionMap = () => {
    const [activePin, setActivePin] = useState<number | null>(null);
    const activePinData = pinsData.find((pin) => pin.id === activePin);

    // Estado para el combo personalizado
    const [selectedCity, setSelectedCity] = useState(cities[1]);
    const [open, setOpen] = useState(false);

    return (
        <div className="grid grid-cols-12 gap-4 w-full bg-[#1F303B]">
            <div className="col-span-12 relative">
                <div className="relative z-50 p-3 mx-auto w-auto sm:mx-[5%] lg:mx-[10%]">
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
                <div className="hidden md:block absolute bottom-0 w-full">
                    <img
                        src="/img/webMap.svg"
                        alt="Imagen interactiva"
                        className="w-screen max-w-full block"
                    />
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
                                transform: "translate(-50%, -120%)",
                                zIndex: 10,
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
                            {activePinData.info}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
