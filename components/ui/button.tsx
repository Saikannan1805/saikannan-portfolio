import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Defining reusable button styles and variants with class-variance-authority
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all " +
    "disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none " +
    "[&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 " +
    "outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] " +
    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "rounded-md bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "rounded-md bg-destructive text-white hover:bg-destructive/90 " +
          "focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "rounded-md border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground " +
          "dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "rounded-md hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "rounded-none text-primary underline-offset-4 hover:underline",

        // Glass variant — adds subtle transparency and blur for liquid-glass UI
        glass:
          "rounded-xl border border-white/15 text-white " +
          "bg-[rgba(20,30,50,0.55)] hover:bg-[rgba(20,30,50,0.65)] " +
          "backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,.08)] " +
          "focus-visible:ring-white/40 transition-all duration-200",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Defining type interface for Button props, extending standard button attributes
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// Reusable Button component supporting multiple variants and Slot rendering
export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  // Allows rendering as <Slot> (for composition) or regular <button>
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)} // Combining variant + custom styles
      {...props}
    />
  );
}

export { buttonVariants };
