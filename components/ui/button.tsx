import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "body-p1-m rounded hover:text-neutral-white hover:bg-neutral-black-800 [transition:transform_0.3s,background_0.2s,color_0.2s] active:scale-95 hover:outline-neutral-black-800 -outline-offset-1",
  {
    variants: {
      variant: {
        default: "bg-neutral-black text-neutral-white",
        outline:
          "bg-transparent text-neutral-black-500 outline outline-1 outline-neutral-black-200",
        ghost: "bg-transparent text-neutral-black",
      },
      size: {
        default: "px-6 py-2.5",
        small: "px-5 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        aria-label={variant || "button"}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
