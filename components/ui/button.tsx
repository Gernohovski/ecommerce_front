import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "h=[40px] inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        input: "bg-white border border-input",
        default:
          "bg-[#7738C8] text-primary-foreground shadow hover:bg-[#7738C8]/70 cursor-pointer",
        cancel:
          "bg-[#71717A] text-primary-foreground shadow hover:bg-[#71717A]/70 cursor-pointer",
        confirm:
          "bg-[#C9FFB1] text-[#2A4B1D] shadow hover:bg-[#C9FFB1]/70 cursor-pointer",
        delete:
          "bg-[#C8383A] text-primary-foreground shadow hover:bg-[#C8383A]/70 cursor-pointer",
        delete_disabled:
          "bg-[#A9A9A9] text-primary-foreground shadow cursor-not-allowed",
        sidebar:
          "bg-white hover:bg-[#382057] hover:text-[#382057] cursor-pointer",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-[#7738C8] text-[#7738C8] bg-white shadow-sm hover:bg-accent hover:border-[#382057] hover:text-[#382057]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground hover:bg-transparent focus:ring-0 focus:outline-none",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
