import React from "react";
import { cva, type VariantProps } from "class-variance-authority";


export const IconVariants = cva("", {
  variants: {
    animate: {
      false: "",
      true: "animate-spin"
    }
  },

  defaultVariants: {
    animate: false
  }
});


interface IconProps extends React.ComponentProps<"svg">, VariantProps<typeof IconVariants> {
  svg: React.FC<React.ComponentProps<"svg">>;
}

export default function Icon({ svg: Svg, animate, className, ...props }: IconProps) {
  return <Svg className={IconVariants({ animate, className })} {...props} />;
}