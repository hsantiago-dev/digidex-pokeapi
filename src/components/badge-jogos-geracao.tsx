import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "#/src/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        "red-blue":
          "border-transparent bg-blue-600 text-white shadow hover:bg-blue-600/80",
        "yellow":
          "border-transparent bg-yellow-500 text-white shadow hover:bg-yellow-500/80",
        "gold-silver":
          "border-transparent bg-slate-500 text-white shadow hover:bg-slate-500/80",
        "crystal":
          "border-transparent bg-indigo-300 text-white shadow hover:bg-indigo-300/80",
        "ruby-sapphire":
          "border-transparent bg-rose-500 text-white shadow hover:bg-rose-500/80",
        "emerald":
          "border-transparent bg-emerald-500 text-white shadow hover:bg-emerald-500/80",
        "firered-leafgreen":
          "border-transparent bg-red-600 text-white shadow hover:bg-red-600/80",
        "colosseum":
          "border-transparent bg-amber-950 text-white shadow hover:bg-amber-950/80",
        "xd":
          "border-transparent bg-violet-800 text-white shadow hover:bg-violet-800/80",
        "diamond-pearl":
          "border-transparent bg-sky-800 text-white shadow hover:bg-sky-800/80",
        "platinum":
          "border-transparent bg-cyan-700 text-white shadow hover:bg-cyan-700/80",
        "heartgold-soulsilver":
          "border-transparent bg-amber-500 text-white shadow hover:bg-amber-500/80",
        "black-white":
          "border-transparent bg-zinc-900 text-white shadow hover:bg-zinc-900/80",
        "black-2-white-2":
          "border-transparent bg-stone-950 text-white shadow hover:bg-stone-950/80",
        "x-y":
          "border-transparent bg-blue-800 text-white shadow hover:bg-blue-800/80",
        "omega-ruby-alpha-sapphire":
          "border-transparent bg-indigo-600 text-white shadow hover:bg-indigo-600/80",
        "sun-moon":
          "border-transparent bg-stone-500 text-white shadow hover:bg-stone-500/80",
        "ultra-sun-ultra-moon":
          "border-transparent bg-slate-800 text-white shadow hover:bg-slate-800/80",
        "lets-go-pikachu-lets-go-eevee":
          "border-transparent bg-green-500 text-white shadow hover:bg-green-500/80",
        "sword-shield":
          "border-transparent bg-gray-700 text-white shadow hover:bg-gray-700/80",
        "the-isle-of-armor":
          "border-transparent bg-cyan-400 text-white shadow hover:bg-cyan-400/80",
        "the-crown-tundra":
          "border-transparent bg-pink-700 text-white shadow hover:bg-pink-700/80",
        "brilliant-diamond-and-shining-pearl":
          "border-transparent bg-stone-400 text-white shadow hover:bg-stone-400/80",
        "legends-arceus":
          "border-transparent bg-teal-800 text-white shadow hover:bg-teal-800/80",
        "scarlet-violet":
          "border-transparent bg-violet-700 text-white shadow hover:bg-violet-700/80",
        "the-teal-mask":
          "border-transparent bg-teal-500 text-white shadow hover:bg-teal-500/80",
        "the-indigo-disk":
          "border-transparent bg-indigo-500 text-white shadow hover:bg-indigo-500/80",
      },
    },
    defaultVariants: {
      variant: "red-blue",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function BadgeJogosGeracao({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { BadgeJogosGeracao, badgeVariants }
