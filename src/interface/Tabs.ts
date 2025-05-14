export interface TabItem {
    key: string;
    label: string;
}

export interface DynamicTabsProps {
    items: TabItem[];
    defaultValue?: string;
}
