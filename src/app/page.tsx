import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  // Check if environment variables are set
  // const isSupabaseConfigured = process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  /*if (!isSupabaseConfigured) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              Environment Setup Required
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    )
  }*/

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">TaskBoard</CardTitle>
          <CardDescription className="text-center">
            A modern task management application
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-muted-foreground">
            Organize your tasks with our intuitive drag-and-drop interface.
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild variant="outline">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild variant="outline" className="bg-blue-500">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}