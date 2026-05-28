import React from "react";
import { cva } from "class-variance-authority"

export const textVariants = cva("font-sans text-gray-400", {
    variants: {
        variant: {
            "bold-sm-bold": "text-sm leading-5 font-semibold",
            "bold-md": "text-base leading-6 font-normal",
            "bold-md-bold": "text-base leading-6 font-semibold"
        }
    },

    defaultVariants: {
        variant: "bold-md"
    }
})


interface TextProps {
    as?: keyof React.JSX.IntrinsicElements;
    className?: string;
    children?: React.ReactNode;
}

export default function Text({
    as = "span",
    className,
    children,
    ...props
}: TextProps) {
    return React.createElement(
        as,
        {
            className,
            ...props,
        },
        children
    );
}