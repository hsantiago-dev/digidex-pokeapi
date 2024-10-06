import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import { Disc3, PawPrint, Sparkles } from "lucide-react";
import logoImage from '#/public/static/images/logo.png'

export function SideBar() {
  return (
    <nav className="rounded-lg border-r border-gray-200 bg-white text-gray-950 shadow dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 flex flex-col gap-3 min-w-14 items-center p-2 h-screen sticky top-0 z-50">
      <Link href='/'>
        <Image 
          src={logoImage}
          alt="logo"
          width={40}
          priority
        />
      </Link>
      <Separator />
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="ghost-primary" 
              size="icon"
              className="w-full"
            >
              <Link href='/pokemons'>
                <PawPrint />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Pokémons</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="ghost-primary" 
              size="icon"
              className="w-full"
            >
              <Link href='/movimentos'>
                <Sparkles />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Movimentos</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="ghost-primary" 
              size="icon"
              className="w-full"
            >
              <Link href='/maquinas'>
                <Disc3 />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>TM's | HM's</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </nav>
  )
}