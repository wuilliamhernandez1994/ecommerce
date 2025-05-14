import { dataWarranty } from "../../data";
import { AccordionComponent } from "../shared";

export const AccordionWarranty = () => {
    return (
        <>
            <div className="flex flex-col font-normal font-nunito mb-16 mt-8">
                <span className="text-3xl font-medium mb-4">Warranty</span>
                <span className="text-sm font-normal mb-3">
                    Your Seabob warranty is active for 24 months from the day of
                    the purchase. Make sure you’ve got an invoice from the
                    supplier stating the S/N of the Seabob.
                </span>
                <span className="text-2xl font-medium mt-8 mb-2.5">
                    Warranty FAQ
                </span>
                <AccordionComponent faqs={dataWarranty} />
            </div>
        </>
    );
};
