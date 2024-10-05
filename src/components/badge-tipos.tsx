import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "#/src/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        "normal":
          "border-transparent bg-zinc-200 text-black shadow hover:bg-zinc-200/80",
        "fighting":
          "border-transparent bg-red-500 text-white shadow hover:bg-red-500/80",
        "flying":
            "border-transparent bg-zinc-400 text-black shadow hover:bg-zinc-400/80",
        "poison":
            "border-transparent bg-purple-600 text-white shadow hover:bg-purple-600/80",
        "ground":
            "border-transparent bg-amber-900 text-white shadow hover:bg-amber-900/80",
        "rock":
            "border-transparent bg-amber-700 text-white shadow hover:bg-amber-700/80",
        "bug":
            "border-transparent bg-lime-600 text-white shadow hover:bg-lime-600/80",
        "ghost":
            "border-transparent bg-purple-500 text-white shadow hover:bg-purple-500/80",
        "steel":
            "border-transparent bg-slate-400 text-white shadow hover:bg-slate-400/80",
        "fire":
            "border-transparent bg-orange-500 text-white shadow hover:bg-orange-500/80",
        "water":
            "border-transparent bg-blue-500 text-white shadow hover:bg-blue-500/80",
        "grass":
            "border-transparent bg-green-500 text-white shadow hover:bg-green-500/80",
        "electric":
            "border-transparent bg-yellow-500 text-white shadow hover:bg-yellow-500/80",
        "psychic":
            "border-transparent bg-pink-600 text-white shadow hover:bg-pink-600/80",
        "ice":
            "border-transparent bg-sky-300 text-black shadow hover:bg-sky-300/80",
        "dragon":
            "border-transparent bg-blue-800 text-white shadow hover:bg-blue-800/80",
        "dark":
            "border-transparent bg-stone-950 text-white shadow hover:bg-stone-950/80",
        "fairy":
            "border-transparent bg-pink-400 text-white shadow hover:bg-pink-400/80",
        "stellar":
            "border-transparent bg-rose-900 text-white shadow hover:bg-rose-900/80",
        "unknown":
            "border-transparent bg-zinc-200 text-muted-foreground shadow hover:bg-zinc-200/80",
        "shadow":
            "border-transparent bg-violet-950 text-white shadow hover:bg-violet-950/80",
      },
    },
    defaultVariants: {
      variant: "normal",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function BadgeTipos({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { BadgeTipos, badgeVariants }
