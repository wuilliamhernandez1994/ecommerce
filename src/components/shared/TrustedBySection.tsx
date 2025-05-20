import React from "react";

const logos = [
    "/logo/Burgess-BI-Logo-1.webp",
    "/logo/camper-nicholsons-international-vector-logo-1.webp",
    "/logo/yco-logo-150x150.webp",
    "/logo/IYC.webp",
    "/logo/northrop-johnson-logo-150x150.webp",
    "/logo/Fraser-Yachts-Logo-Light-1.png",
    "/logo/Edmiston.webp",
    "/logo/tjb-logo-150x150.webp",
];

export const TrustedBySection: React.FC = () => {
    return (
        <section className="bg-white py-10 font-nunito">
            <div className="mx-auto w-full p-3 sm:px-[5%] lg:px-[10%]">
                <h2 className="text-2xl md:text-3xl font-medium mb-8">
                    Trusted By
                </h2>
                <div className="flex flex-wrap justify-between items-center mb-1 h-auto">
                    {logos.map((logo, idx) => (
                        <img
                            key={idx}
                            src={logo}
                            alt={`Logo ${idx + 1}`}
                            className="grayscale hover:opacity-100 transition max-h-28 w-auto object-cover mx-auto"
                        />
                    ))}
                </div>
                <p className="text-gray-700 text-sm">
                    For over a decade, Ocean Premium has been providing water
                    toy rentals to yachts and charter brokers. By consistently
                    incorporating feedback from our clients and partners, we
                    have honed our services to achieve excellence. The
                    continuous collaboration with several hundred yachts attests
                    to our superior performance.
                </p>
            </div>
        </section>
    );
};
