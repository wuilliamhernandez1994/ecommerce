import { dataRepairs } from "../../data";
import { AccordionComponent } from "../shared";

export const AccordionRepairs = () => {
    return (
        <>
            <div className="flex flex-col font-normal font-nunito mb-16 mt-8">
                <span className="text-3xl font-medium mb-4">Repairs</span>
                <span className="text-sm font-normal mb-3">
                    If your Seabob was damaged and you do not have a valid
                    Warranty, you’ll be charged for the repairs. Your cost will
                    include the Wet/Dry Lock fee + Repair fee as per the fee
                    list below.
                </span>
                <span className="text-2xl font-medium mt-8 mb-2.5">
                    What are the repair costs?
                </span>
                <AccordionComponent faqs={dataRepairs} />
            </div>
        </>
    );
};
