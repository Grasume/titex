
import type { Metadata } from "next";
import type { ReactNode } from "react";
// These styles apply to every route in the application
import './globals.css'


export const metadata: Metadata = {
  title: "Tit's Express - Freight Calculator",
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}