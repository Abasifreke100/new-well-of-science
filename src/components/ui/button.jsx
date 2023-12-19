import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green_two focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-[100px]",
  {
    variants: {
      variant: {
        default:
          "bg-green_one text-white hover:bg-green_three hover:bg-opacity-50",

        outline:
          "border border-green_one bg-white hover:bg-green_three hover:text-white text-green_one",
      },
      size: {
        default: "px-6 py-4",
        lg: " px-8 py-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = ({ className, variant, size, asChild = false, ...props }) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}
Button.displayName = "Button"

export { Button }
