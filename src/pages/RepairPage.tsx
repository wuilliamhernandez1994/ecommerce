import { ProductComponent } from "../components/shop";
import { initialData } from "../data";
export const RepairPage = () => {
    const repair = initialData.filter((p) => p.type === "repair");
    return (
        <>
            {repair.map((product, index) => (
                <ProductComponent key={index} {...product} />
            ))}
        </>
    );
};
