import Link from "next/link";
import { Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterProps {
  githubUrl: string;
  name: string;
}

export function Footer({ githubUrl, name }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/40 py-6">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:px-6 md:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} {name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <p className="text-sm text-muted-foreground">
            Made with Next.js & Tailwind CSS
          </p>
          <Link
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <div
              className={cn(
                "inline-flex h-8 w-8 items-center justify-center whitespace-nowrap rounded-md p-0 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                "text-muted-foreground hover:text-accent-blue"
              )}
            >
              <Github className="h-4 w-4" />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}

