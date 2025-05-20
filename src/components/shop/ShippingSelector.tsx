import { useState } from "react";

export const ShippingSelector = () => {
    const countries = [
        { name: "Italy", price: "82€" },
        { name: "Greece", price: "83€" },
        { name: "Spain", price: "89€" },
        { name: "France", price: "85€" },
        { name: "Croatia", price: "81€" },
        { name: "Netherlands", price: "81€" },
    ];

    const [selected, setSelected] = useState("Italy");

    // Encuentra el país seleccionado en el array
    const selectedCountry = countries.find(
        (country) => country.name === selected
    );

    return (
        <div className="bg-[#F1F1F1] pt-8 pb-16 font-nunito">
            <div className="flex flex-col sm:flex-row justify-center gap-8 mx-auto w-auto sm:mx-[5%] lg:mx-[10%] p-3">
                <div className="flex-1">
                    <h2 className="text-2xl font-normal mb-3">
                        I want my Seabob collected on board
                    </h2>
                    <p className="text-gray-600 mb-6 text-sm font-normal">
                        Your Seabob is going to be delivered to the nearest
                        Ocean Premium Repair Centre in a protective box.
                    </p>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                        {countries.map((country) => (
                            <div
                                key={country.name}
                                className={`bg-white p-2.5 rounded-3xl flex justify-between items-center cursor-pointer min-w-min ${
                                    selected === country.name
                                        ? "shadow-[inset_2px_2px_3px_rgba(0,0,0,0.3)]" // sombra interna personalizada
                                        : ""
                                }`}
                                onClick={() => setSelected(country.name)}
                            >
                                <span className="text-gray-700">
                                    {country.name}
                                </span>
                                <span className="font-bold">
                                    {country.price}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-6 flex-1">
                    <div className="text-gray-700 mb-6">
                        Your price shipping from {selectedCountry?.name}
                    </div>
                    <div className="text-4xl text-green-500 font-semibold flex items-baseline mb-6">
                        {selectedCountry?.price}
                        <div className="text-xs font-normal text-gray-500 ml-2">
                            Flat rate shipping fee
                        </div>
                    </div>
                    <a
                        href=""
                        className="block text-sm font-semibold py-4 px-8 mb-2.5 w-fit [clip-path:polygon(0_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%)] bg-[#1a2b3c] text-white"
                    >
                        Request collection
                    </a>
                </div>
            </div>
        </div>
    );
};
