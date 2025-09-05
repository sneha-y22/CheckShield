import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const variants = {
      default: "bg-indigo-600 text-white hover:bg-indigo-700",
      outline: "border border-slate-300 text-slate-700 hover:bg-slate-50",
      ghost: "text-slate-700 hover:bg-slate-100",
    }

    const sizes = {
      sm: "px-3 py-1 text-sm rounded-lg",
      md: "px-4 py-2 rounded-lg",
      lg: "px-6 py-3 text-lg rounded-xl",
    }

    return (
      <button
        ref={ref}
        className={cn("font-medium transition-colors focus:outline-none", variants[variant], sizes[size], className)}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button }
