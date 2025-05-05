import { Github, Youtube, Twitter, Disc } from "lucide-react"; // Assuming Disc for Discord, adjust if needed
import { cn } from "@/lib/utils";
import Link from "next/link";
import { MusicPlayer } from "./MusicPlayer"; // Import the music player

// Map icon names to actual Lucide components
const iconMap: { [key: string]: React.ElementType } = {
  Github,
  Youtube,
  Twitter,
  Discord: Disc, // Adjust if the icon name is different
};

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

interface HeroProps {
  name: string;
  tagline: string;
  socials: SocialLink[];
}

export function Hero({ name, tagline, socials }: HeroProps) {
  return (
    <section id="hero" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter text-heading-text sm:text-4xl md:text-5xl lg:text-6xl/none">
              Hey, I&apos;m {name}
            </h1>
            <p className="mx-auto max-w-[700px] text-primary-text md:text-xl">
              {tagline}
            </p>
          </div>
          <div className="flex space-x-4 pt-4">
            {socials.map((social) => {
              const IconComponent = iconMap[social.icon];
              return (
                IconComponent && (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                  >
                    <div
                      className={cn(
                        "inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-lg border border-input bg-surface p-0 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                        "text-primary-text hover:text-accent-blue"
                      )}
                    >
                      <IconComponent className="h-5 w-5" />
                    </div>
                  </Link>
                )
              );
            })}
          </div>
          {/* Integrate Music Player */}
          <div className="pt-8">
            <MusicPlayer />
          </div>
        </div>
      </div>
    </section>
  );
}

