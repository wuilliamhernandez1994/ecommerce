import React from "react";
import type ProductInterface from "../../interface/Product";

export const ProductComponent: React.FC<ProductInterface> = (props) => {
    const {
        title,
        category,
        categoryDetail,
        features,
        description,
        notes,
        imageSrc,
        className = "",
        price,
        priceDetail,
        textButton,
        classButton,
        href,
    } = props;

    const directionClass =
        className == "flex-row-reverse" ? "md:flex-row-reverse" : "md:flex-row";

    return (
        // flex flex-row-reverse
        <div
            className={`flex flex-col items-center gap-6 mb-2.5 p-3 ${directionClass}`}
        >
            <img
                src={imageSrc}
                alt=""
                className="w-full md:w-1/2 max-w-[536px] h-auto object-cover"
            />
            <div className="flex flex-col font-nunito">
                <p className="text-[rgba(25,48,59,0.5)] text-2xl mt-0 mb-0 leading-[normal] font-normal">
                    {title}
                </p>
                <p className="block text-gray-800 text-2xl font-semibold leading-8 mb-6">
                    {category}
                </p>
                <p className="block text-gray-700 text-sm font-normal leading-normal mb-3.5">
                    {categoryDetail}
                </p>
                {features && features.length > 0 && (
                    <ul className="list-disc pl-5 mb-3.5">
                        {features!.map((item, index) => (
                            <li key={index} className="text-gray-800">
                                <p
                                    key={index}
                                    className="block text-gray-700 text-sm font-normal leading-normal"
                                >
                                    {item}
                                </p>
                            </li>
                        ))}
                    </ul>
                )}
                <p className="block text-gray-700 text-sm font-normal leading-normal mb-3.5">
                    {description}
                </p>
                <p className="block text-gray-700 text-sm font-normal leading-normal mb-3.5">
                    {notes}
                </p>
                <div className="mb-3.5">
                    <p className="block text-gray-700 text-3xl font-semibold leading-normal">
                        {price}
                        <span className="text-xs font-normal relative bottom-0.5 left-1.5">
                            {priceDetail}
                        </span>
                    </p>
                </div>
                <a
                    href={href}
                    className={`text-sm font-semibold py-4 px-8 mb-2.5 w-fit [clip-path:polygon(0_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%)] ${classButton}`}
                >
                    {textButton}
                </a>
            </div>
        </div>
    );
};
