import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center flex-col gap-4 px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-primary to-purple-600 bg-clip-text">
        404 - Page Not Found
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground text-center max-w-lg">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/">
        <Button
          className="mt-4 px-6 py-2 text-lg"
          size="lg"
        >
          Return Home
        </Button>
      </Link>
    </div>
  )
}