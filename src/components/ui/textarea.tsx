import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-32 w-full rounded-md bg-paper px-3.5 py-3 text-base text-ink shadow-[inset_0_0_0_1px_var(--color-rule)] transition-[box-shadow] duration-150 placeholder:text-stone focus-visible:outline-none focus-visible:shadow-[inset_0_0_0_1.5px_var(--color-metal)] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
