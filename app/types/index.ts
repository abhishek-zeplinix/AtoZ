import { ReactNode } from "react";

export interface SmoothScrollingProps {
    children: ReactNode;
}

// Define the type for the logo object
export interface Logo {
    src: string;
    alt: string;
}
export interface ClientSliderProps {
    directions?: "left" | "right";
}

export interface Testimonial {
    id: number;
    rating: number;
    text: string;
    name: string;
    role: string;
    bgColor: string;
}

export interface ProcessData {
    title: string;
    items: string[];
}

export interface ProcessAchievementProps {
    data?: ProcessData[];
    mainTitle?: string;
}

export interface SubPageBannerProps {
    title: string;
    subText: string;
    iconImage: string;
    bannerImage: string;
    titlePosition?: {
        top: string;
        left: string;
    };
    bannerPosition?: {
        top: string;
        right: string;
    };
    iconImageSize?: {
        width: number;
        height: number;
    };
    bannerImageSize?: {
        width: number;
        height: number;
    };
}


export interface CardData {
    id: number;
    category: string;
    imageUrl: string;
    title: string;
}

export interface Portfolio {
    title: string;
    label: string;
    services: string[];
    industry: string;
    tools: string[];
    clientOverview: string;
    challenge: string[];
    approach: string[];
    results: string[];
    clientTestimonial: string;
    images: string[];
}


export interface ProductSlider {
    id: number,
    category: string,
    title: string,
    description: string,
    image: string,
    bgColor: string

}