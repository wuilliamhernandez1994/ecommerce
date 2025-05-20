import type { HeroBanner } from "../../interface";

export const HeroBannerComponent: React.FC<HeroBanner> = ({
    title,
    titleClasses = "",
    contentLines,
    buttonText,
    buttonClasses = "",
    backgroundImage,
    buttonOnClick,
}) => {
    return (
        <div
            className={`relative mt-16 pt-16 lg:pt-32 pb-8 lg:pb-16 flex items-center bg-cover bg-center ${backgroundImage} px-3`}
        >
            <div className="mx-auto w-auto sm:mx-[5%] lg:mx-[10%] flex flex-col justify-between items-start">
                <div className="text-white w-full">
                    <p className={`${titleClasses}`}>{title}</p>
                    <div className="space-y-2">
                        {contentLines.map((line, index) => (
                            <p key={index} className={line.classes}>
                                {line.text}
                            </p>
                        ))}
                    </div>
                </div>
                <a
                    href=""
                    className={`text-sm font-semibold py-4 px-8 mb-2.5 w-fit [clip-path:polygon(0_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%)] ${buttonClasses} hover:text-white`}
                    onClick={buttonOnClick}
                >
                    {buttonText}
                </a>
            </div>
        </div>
    );
};
