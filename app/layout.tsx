import type React from "react"
import type { Metadata } from "next"
import { Baloo_Bhai_2 } from "next/font/google"
import "./globals.css"

const balooBhai = Baloo_Bhai_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Bumblebee",
  description: "A magical kindergarten experience in Vellore for your little ones",
   
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${balooBhai.className} bg-cream-50 overflow-x-hidden`}>{children}</body>
    </html>
  )
}
