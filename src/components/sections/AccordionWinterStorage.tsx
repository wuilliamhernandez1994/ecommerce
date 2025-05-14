import { dataWinterStorage } from "../../data";
import { AccordionComponent } from "../shared";

export const AccordionWinterStorage = () => {
    return (
        <>
            <div className="flex flex-col font-normal font-nunito mb-16 mt-8">
                <span className="text-3xl font-medium mb-4">
                    Winter Storage
                </span>
                <span className="text-2xl font-medium mt-8 mb-2.5">
                    Seabob Refurbishment
                </span>
                <span className="text-sm font-normal mb-3">
                    After a season or two it is time to get that new fresh look
                    again.
                </span>
                <AccordionComponent faqs={dataWinterStorage} />
            </div>
        </>
    );
};
