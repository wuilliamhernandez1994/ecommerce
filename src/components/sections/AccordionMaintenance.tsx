import { dataMaintenance } from "../../data";
import { AccordionComponent } from "../shared";

export const AccordionMaintenance = () => {
    return (
        <>
            <div className="flex flex-col font-normal font-nunito mb-16 mt-8">
                <span className="text-3xl font-medium mb-4">Maintenance</span>
                <span className="text-2xl font-medium mt-8 mb-2.5">
                    Seabob Preventive Maintenance
                </span>
                <span className="text-sm font-normal mb-3">
                    To give you that peace of mind knowing your Seabobs are
                    ready to perform when the season starts, we’ve come up with
                    a packages to cover the basic or extending maintenance.
                </span>
                <AccordionComponent faqs={dataMaintenance} />
            </div>
        </>
    );
};
