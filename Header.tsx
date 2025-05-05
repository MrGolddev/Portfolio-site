import Link from "next/link";
import { Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  githubUrl: string;
}

export function Header({ githubUrl }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-5xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {/* Placeholder for a logo if available, otherwise text */}
            <span className="font-bold text-heading-text">MrGolddev</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm text-primary-text">
            {/* Use anchor links for single-page navigation later */}
            <Link
              href="#about" // Placeholder, update with actual section IDs
              className="transition-colors hover:text-accent-green"
            >
              About
            </Link>
            <Link
              href="#experience" // Placeholder
              className="transition-colors hover:text-accent-green"
            >
              Experience
            </Link>
            <Link
              href="#photography" // Placeholder
              className="transition-colors hover:text-accent-green"
            >
              Photography
            </Link>
          </nav>
        </div>
        {/* Add mobile navigation toggle here if needed */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            <Link
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  "inline-flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-md px-0 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                  "text-primary-text hover:text-accent-blue"
                )}
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

