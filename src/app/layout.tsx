import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google';
import Image from "next/image";
import logoImage from '#/public/static/images/logo.png'
import { ThemeProvider } from "../components/theme/theme-provider";
import { DropdownTheme } from "../components/theme/dropdown-theme";
import { Button } from "../components/ui/button";
import { Disc3, PawPrint, Sparkles } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip";
import { Separator } from "../components/ui/separator";
import { LabelLogo } from "../components/label-logo";
import Link from "next/link";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], // Você pode especificar os pesos necessários
});

export const metadata: Metadata = {
  title: "DigiDex | PokeAPI",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.className} antialiased h-full`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-full">
            <nav className="rounded-lg border-r border-gray-200 bg-white text-gray-950 shadow dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 flex flex-col gap-3 min-w-14 items-center p-2 h-screen sticky top-0 z-50">
              <Link href='/'>
                <Image 
                  src={logoImage}
                  alt="logo"
                  width={40}
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
            <div className="flex-grow">
              <div className="flex justify-between m-2">
                <LabelLogo />
                <DropdownTheme />
              </div>
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
