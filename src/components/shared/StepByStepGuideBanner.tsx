import React from "react";
import type { StepByStepGuideBanner } from "../../interface";

export const StepByStepGuideBannerComponent: React.FC<
    StepByStepGuideBanner
> = ({
    imageUrl,
    title,
    subtitle,
    buttonText,
    buttonHref,
    buttonClassName = "",
    whiteBoxPositionClass = "",
}) => {
    return (
        <div className="relative h-64 md:h-80 lg:h-80 overflow-hidden font-nunito">
            <img
                src={imageUrl}
                alt="Banner"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div
                className={`absolute z-10 flex flex-col justify-center h-full mx-auto w-full p-3 sm:px-[5%] lg:px-[10%] ${whiteBoxPositionClass}`}
            >
                <div className={`bg-white/82 p-6 w-full lg:w-1/2`}>
                    <span className="text-gray-500 text-lg md:text-xl font-light mb-1">
                        {subtitle}
                    </span>
                    <h2 className="text-2xl md:text-4xl font-semibold mb-4">
                        {title}
                    </h2>
                    <a
                        href={buttonHref}
                        className={`flex items-center text-sm font-semibold py-4 px-8 mb-2.5 w-fit [clip-path:polygon(0_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%)] ${buttonClassName}`}
                    >
                        {buttonText}
                    </a>
                </div>
            </div>
        </div>
    );
};
