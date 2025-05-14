import { dataAccordionServices } from "../../data";
import { AccordionComponent } from "../shared";

export const AccordionAboutServices = () => {
    return (
        <>
            <div className="flex flex-col font-normal font-nunito mb-16 mt-8 p-3">
                <span className="text-2xl font-normal text-[rgba(25,48,59,0.5)]">
                    FAQ
                </span>
                <span className="text-4xl font-medium mb-8">
                    About Services
                </span>
                <AccordionComponent {...dataAccordionServices} />
            </div>
        </>
    );
};
