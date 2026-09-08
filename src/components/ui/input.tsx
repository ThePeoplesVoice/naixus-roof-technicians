import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-md bg-paper px-3.5 text-base text-ink shadow-[inset_0_0_0_1px_var(--color-rule)] transition-[box-shadow] duration-150 placeholder:text-stone focus-visible:outline-none focus-visible:shadow-[inset_0_0_0_1.5px_var(--color-metal)] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
