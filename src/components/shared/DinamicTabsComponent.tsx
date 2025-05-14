import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import type { DynamicTabsProps } from "../../interface";
import {
    AccordionMaintenance,
    AccordionRefurbishment,
    AccordionRepairs,
    AccordionWarranty,
    AccordionWinterStorage,
    AccordionWinterStorage2,
} from "../sections";

export const DynamicTabs: React.FC<DynamicTabsProps> = ({
    items,
    defaultValue,
}) => {
    const initialIndex = defaultValue
        ? items.findIndex((item) => item.key === defaultValue)
        : 0;
    const [selectedIndex, setSelectedIndex] = useState(initialIndex);

    return (
        <Tabs
            selectedIndex={selectedIndex}
            onSelect={(index) => setSelectedIndex(index)}
            className="w-full p-3"
        >
            <TabList className="flex flex-wrap bg-muted rounded-xl">
                {items.map((item, index) => {
                    const isSelected = index === selectedIndex;
                    return (
                        <Tab
                            key={item.key}
                            className={`w-fit px-7 py-3.5 text-sm font-medium text-center cursor-pointer p-2 focus-visible:outline-none border-b-2
                            ${
                                isSelected
                                    ? "bg-white text-[rgba(25,48,59,1)] border-yellow-400"
                                    : "text-[rgba(25,48,59,0.5)] border-transparent"
                            }
                        `}
                        >
                            {item.label}
                        </Tab>
                    );
                })}
            </TabList>

            {items.map((item) => {
                switch (item.key) {
                    case "warranty":
                        return (
                            <TabPanel key={item.key} className="mt-4">
                                <AccordionWarranty />
                            </TabPanel>
                        );

                    case "repairs":
                        return (
                            <TabPanel key={item.key} className="mt-4">
                                <AccordionRepairs />
                            </TabPanel>
                        );

                    case "maintenance":
                        return (
                            <TabPanel key={item.key} className="mt-4">
                                <AccordionMaintenance />
                            </TabPanel>
                        );

                    case "refurbishment":
                        return (
                            <TabPanel key={item.key} className="mt-4">
                                <AccordionRefurbishment />
                            </TabPanel>
                        );

                    case "winter-storage":
                        return (
                            <TabPanel key={item.key} className="mt-4">
                                <AccordionWinterStorage />
                            </TabPanel>
                        );

                    case "winter-storage2":
                        return (
                            <TabPanel key={item.key} className="mt-4">
                                <AccordionWinterStorage2 />
                            </TabPanel>
                        );

                    default:
                        break;
                }
            })}
        </Tabs>
    );
};

export default DynamicTabs;
