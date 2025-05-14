import { AccordionAboutServices, SupportSection } from "../components/sections";
import RepairSection from "../components/sections/RepairSection";
import { WhatsAppButton, DynamicTabs } from "../components/shared";
import { BusinessComponent, ProductComponent } from "../components/shop";
import { maintenancePackages, initialData, tabs } from "../data";

export const HomePage = () => {
    return (
        <>
            <RepairSection />

            <BusinessComponent {...maintenancePackages} />
            {initialData.map((product, index) => (
                <ProductComponent key={index} {...product} />
            ))}

            <DynamicTabs items={tabs} defaultValue="warranty" />

            <AccordionAboutServices />

            <SupportSection />

            <WhatsAppButton
                phoneNumber="+5355208375"
                message="¡Hola! Me gustaría más información."
                size={40}
            />
        </>
    );
};
