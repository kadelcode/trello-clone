"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null >(null);
    const router = useRouter();
    const { toast } = useToast()

        // Check if environment variables are set
    const isSupabaseConfigured =
    typeof window !== "undefined" &&
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    // Create supabase client only if environment variables are set
    const supabase = isSupabaseConfigured ?
    createClientComponentClient() : null

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!supabase) {
            setError("Supabase configuration is missing. Please set up your environment variables.")
            return
        }

        setLoading(true)
        setError(null)

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            })

            if (error) {
                throw error
            }

            toast("Login successful", {
                description: "Welcome back!",
            })

            router.push("/boards")
            router.refresh()
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message)
                toast("Login failed", {
                    description: error.message,
                    style: { backgroundColor: "#dc2626", color: "#fff" },
                })
            } else {
                console.error("An unknow error occurred.")
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center">
                        Login
                    </CardTitle>
                    <CardDescription className="text-center">
                        Enter your credentials to access your account
                    </CardDescription>
                </CardHeader>
                {error && (
                    <div className="p-3 mx-6 mt-3 mb-3 bg-destructive/10 border border-destructive/20 rounded-md text-destructive/80 text-sm">
                        {error}
                    </div>
                )}
                <form onSubmit={handleLogin}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="name@example.com"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                              id="password"
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                        <Button type="submit" className="w-full" disabled=
                        {loading}>
                            {loading ? "Logging in..." : "Login"}
                        </Button>
                        <div className="text-center text-sm">
                            Don&apos;t have an account?
                            {" "}
                            <Link href="/signup" className="text-primary hover:underline">
                                Sign up
                            </Link>
                        </div>
                        <div className="text-center text-sm">
                            <Link href="/" className="text-muted-foreground hover:underline">
                                Back to home
                            </Link>
                        </div>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}

