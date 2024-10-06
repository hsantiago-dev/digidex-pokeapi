import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google';
import { ThemeProvider } from "../components/theme/theme-provider";
import { DropdownTheme } from "../components/theme/dropdown-theme";
import { LabelLogo } from "../components/label-logo";
import { SideBar } from "../components/sidebar";
import { PokemonProvider } from "./context/pokemons-context";

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
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <PokemonProvider>
          <body
            className={`${poppins.className} antialiased h-full`}
          >
                <div className="flex h-full">
                  <SideBar />
                  <div className="flex-grow">
                    {children}
                  </div>
                </div>
          </body>
        </PokemonProvider>
      </ThemeProvider>
    </html>
  );
}
