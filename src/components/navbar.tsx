/*"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

export default function Navbar({ user }: {user: any}) {
    const router = useRouter()
    const { toast } = useToast()
    const supabase = createClientComponentClient()
    const { theme, setTheme } = useTheme()

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        toast( "Signed out", {
            description: "You have been signed out successfully",
        })
        router.push("/login")
        router.refresh()
    }

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <nav className="border-b border-border bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/boards" className="flex-shrink-0 flex items-center">
                            <span className="text-xl font-bold text-primary">
                                TaskBoard
                            </span>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="icon"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        >
                            {theme === "dark" ? <SunIcon size={20} /> :
                            <MoonIcon size={20} />
                            }
                        </Button>
                        {user && (
                            <>
                                <span className="text-sm text-muted-foreground">
                                    {user.email}
                                </span>
                                <Button variant="outline" onClick={handleSignOut}>
                                    Sign Out
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}*/