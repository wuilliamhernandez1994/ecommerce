import {
    AccordionAboutServices,
    SupportSection,
    HeroBannerComponent,
    RepairSection,
    CollectionMap,
} from "../components/sections";
import {
    DynamicTabs,
    StepByStepGuideBannerComponent,
    TrustedBySection,
} from "../components/shared";
import {
    BusinessComponent,
    ProductComponent,
    ShippingSelector,
} from "../components/shop";
import NewsletterSubscription from "../components/shop/NewsletterSubscription";
import {
    maintenancePackages,
    initialData,
    tabs,
    dataStepByStepGuideBanner,
} from "../data";
import { dataHeroBanner } from "../data/DataHeroBanner";

export const MaintenancePage = () => {
    const maintenance = initialData.filter((p) => p.type === "maintenance");

    return (
        <>
            <RepairSection />

            <BusinessComponent {...maintenancePackages} />

            <CollectionMap />

            <ShippingSelector />

            {maintenance.map((product, index) => {
                if (index === 1) {
                    // Aquí pones la lógica que deseas ejecutar cuando el índice sea 2
                    return (
                        <>
                            <SupportSection />
                            <div className="bg-[rgb(25,48,59)] text-white pt-10 pb-8  lg:pb-18 mt-16 p-3">
                                <div className="mx-auto w-auto sm:mx-[5%] lg:mx-[10%]">
                                    <p className="text-lg lg:text-2xl">
                                        Always ask yourself - What If?
                                    </p>
                                    <p className="text-3xl lg:text-6xl mb-6">
                                        Preventive Maintenance
                                    </p>
                                    <p className="text-2xl lg:text-4xl mb-9">
                                        Get your Seabob ready for charter.
                                        Before it’s too late!
                                    </p>
                                </div>
                            </div>
                            <ProductComponent key={index} {...product} />;
                        </>
                    );
                } else if (index === 4) {
                    return (
                        <>
                            <HeroBannerComponent {...dataHeroBanner[0]} />
                            <ProductComponent key={index} {...product} />;
                        </>
                    );
                } else if (index === 6) {
                    // Aquí pones la lógica que deseas ejecutar cuando el índice sea 2
                    return (
                        <>
                            <HeroBannerComponent {...dataHeroBanner[1]} />
                            <NewsletterSubscription />
                            <ProductComponent key={index} {...product} />;
                        </>
                    );
                } else {
                    return <ProductComponent key={index} {...product} />;
                }
            })}
            <HeroBannerComponent {...dataHeroBanner[2]} />

            <TrustedBySection />

            <StepByStepGuideBannerComponent {...dataStepByStepGuideBanner[0]} />

            <DynamicTabs items={tabs} defaultValue="warranty" />

            <StepByStepGuideBannerComponent {...dataStepByStepGuideBanner[1]} />

            <AccordionAboutServices />
        </>
    );
};
