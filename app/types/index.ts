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