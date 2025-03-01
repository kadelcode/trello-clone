import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"
// import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "TaskBoard - Trello Clone",
  description: "A modern task management application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main
        className="min-h-screen bg-slat-50 dark:bg-slate-900"
        >
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  )
}