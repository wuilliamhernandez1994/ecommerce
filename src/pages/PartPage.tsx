import { ProductComponent } from "../components/shop";
import { initialData } from "../data";

export const PartPage = () => {
    const part = initialData.filter((p) => p.type === "part");

    return (
        <>
            {part.map((product, index) => (
                <ProductComponent key={index} {...product} />
            ))}
        </>
    );
};
