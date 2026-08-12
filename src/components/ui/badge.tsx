import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-mono-tight font-medium",
  {
    variants: {
      variant: {
        default: "border-border-strong bg-white/[0.03] text-muted-foreground",
        cyan: "border-cyan/30 bg-cyan/10 text-cyan",
        green: "border-green/30 bg-green/10 text-green",
        pink: "border-pink/30 bg-pink/10 text-pink",
        violet: "border-violet/30 bg-violet/10 text-violet",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span className={cn(badgeVariants({ variant, className }))} {...props} />
  )
}

export { Badge, badgeVariants }
