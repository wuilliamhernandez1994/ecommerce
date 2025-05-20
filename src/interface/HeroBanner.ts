interface ContentLine {
    text: string;
    classes?: string;
}

export interface HeroBanner {
    title: string;
    titleClasses?: string;
    contentLines: ContentLine[];
    buttonText: string;
    buttonClasses?: string;
    backgroundImage: string;
    buttonOnClick?: () => void;
}
