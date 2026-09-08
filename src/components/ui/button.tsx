import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium tracking-wide transition-[background-color,color,box-shadow,transform,opacity] duration-[var(--motion-quick,150ms)] ease-[var(--ease-out,cubic-bezier(0.23,1,0.32,1))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metal focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary: "bg-metal text-metal-fg hover:bg-ink",
        outline:
          "bg-transparent text-ink shadow-[inset_0_0_0_1px_var(--color-ink)] hover:bg-ink hover:text-paper",
        ghost: "bg-transparent text-ink hover:bg-paper-2",
        invert:
          "bg-paper text-ink hover:bg-paper-2",
        onDark:
          "bg-transparent text-paper shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--color-paper)_60%,transparent)] hover:bg-paper hover:text-ink",
      },
      size: {
        default: "h-11 min-h-11 px-5",
        lg: "h-12 min-h-12 px-7 text-[0.9375rem]",
        sm: "h-10 min-h-10 px-4 text-[0.8125rem]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
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
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
