'use client'
import { useTheme } from "next-themes";
import Image from "next/image";
import fonteBranca from '#/public/static/images/logo_fonte_branca.png'
import fontePreta from '#/public/static/images/logo_fonte_preta.png'

export function LabelLogo() {
  const { theme, systemTheme } = useTheme()

  return (
    <Image
      src={
        (theme == 'dark') 
        ? fonteBranca 
        : (theme == 'system' && systemTheme == 'dark')
          ? fonteBranca 
          : fontePreta
      }
      alt="font logo"
      height={36}
    />
  )
}