import type { BusinessServices } from "../interface/Business";

export const maintenancePackages: BusinessServices = {
    business: {
        name: "Seabob Repairs and Maintenance",
        tagline: "Fix the problem before it arrives",
        description:
            "To give you that peace of mind knowing your Seabobs are ready to perform when the season starts, we’ve come up with a packages to cover the regular and ongoing maintenance.",
    },
    servicePackages: [
        {
            id: "pre_season_check",
            name: "Pre-Season Check",
            description:
                "A quick health check to keep you going during the Season.",
        },
        {
            id: "full_preventive_maintenance",
            name: "Full Preventive Maintenance",
            description:
                "A full preventive protocol to give you that peace of mind.",
        },
        {
            id: "winterization",
            name: "Winterization",
            description: "Prepare your Seabob for a refit/off‐season period.",
        },
        {
            id: "repairs",
            name: "Repairs",
            description: "Fix your Seabob and get it up and running.",
        },
        {
            id: "warranty_repairs",
            name: "Warranty Repairs",
            description:
                "Fix your Seabob free of charge. Warranty lasts 24 months.",
        },
        {
            id: "refurbishment",
            name: "Refurbishment",
            description: "Full custom paint‐job of upper shell.",
        },
    ],
};
