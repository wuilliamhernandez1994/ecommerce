import type { BusinessServices } from "../../interface";

export const BusinessComponent: React.FC<BusinessServices> = ({
    business,
    servicePackages,
}) => {
    return (
        <section className="mx-auto p-3 font-nunitos">
            <div className="mb-8">
                <p className="text-[rgba(25,48,59,0.5)] text-2xl mt-0 mb-0 leading-[normal] font-normal">
                    {business.tagline}
                </p>
                <p className="block text-gray-800 text-3xl font-normal leading-8 mb-2.5">
                    {business.name}
                </p>
                <p className="text-sm text-gray-800">{business.description}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {servicePackages.map((pkg) => (
                    <div
                        key={pkg.id}
                        className="bg-gray-100 p-4 font-nunito text-center"
                    >
                        <h2 className="text-sm font-bold mb-6">{pkg.name}</h2>
                        <p className="text-xs font-normal mb-6">
                            {pkg.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
