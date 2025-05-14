import { useState } from "react";
import type Accordion from "../../interface/Accordion";
import { IoIosArrowUp } from "react-icons/io";

interface AccordionProps {
    faqs: Accordion[];
}
export const AccordionComponent: React.FC<AccordionProps> = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className={`border-t border-gray-200 ${
                        index === faqs.length - 1 ? "border-b" : ""
                    }`}
                >
                    <button
                        onClick={() => toggle(index)}
                        className="w-full flex justify-between items-center py-4 text-left"
                    >
                        <span className="text-gray-800 text-sm font-medium">
                            {faq.question}
                        </span>
                        <span
                            className={`transform transition-all duration-200 ${
                                openIndex === index ? "rotate-180" : ""
                            }`}
                        >
                            <IoIosArrowUp />
                        </span>
                    </button>
                    {openIndex === index && (
                        <div className="text-gray-600 text-sm font-normal pt-4 border-t border-gray-200">
                            {faq.answer.map((line, i) => (
                                <p key={i} className="mb-2">
                                    {line}
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
