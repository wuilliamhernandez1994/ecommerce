export interface Business {
    name: string;
    tagline: string;
    description: string;
}

export interface ServicePackage {
    id: string;
    name: string;
    description: string;
}

export interface BusinessServices {
    business: Business;
    servicePackages: ServicePackage[];
}
