import { dataWinterStorage2 } from "../../data";
import { AccordionComponent } from "../shared";

export const AccordionWinterStorage2 = () => {
    return (
        <>
            <div className="flex flex-col font-normal font-nunito mb-16 mt-8">
                <span className="text-3xl font-medium mb-4">
                    Winter Storage
                </span>
                <span className="text-sm font-normal mb-3">
                    During Yacht Refit phase or anytime you’re in need of space
                    onboard or want to get the burden of the proper off-season
                    maintenance to us – winterisation is the way forward.
                </span>
                <span className="text-2xl font-medium mt-8 mb-2.5">
                    Seabob Winter Storage FAQ
                </span>
                <AccordionComponent faqs={dataWinterStorage2} />
            </div>
        </>
    );
};
