import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  websiteUrl?: string; // Optional
  moreUrl?: string;    // Optional
}

// Updated experience data based on golddev.space analysis and common developer roles
const experiences: ExperienceItem[] = [
  {
    title: "Lead Developer & Designer",
    company: "MrGoldTech (Personal Projects)",
    period: "2020 - Present",
    description: "Spearheaded the design and development of various projects under the MrGoldTech banner. Focused on creating modern, responsive websites using Next.js, React, and Tailwind CSS. Developed custom Discord bots with Node.js, integrating external APIs and managing deployment on platforms like Vercel and Cloudflare Pages.",
    websiteUrl: "https://github.com/MrGolddev", // Link to GitHub as primary showcase
    // moreUrl: "#" // No specific 'more' link available
  },
  {
    title: "Freelance Web Developer",
    company: "Various Clients",
    period: "2021 - Present",
    description: "Collaborated with clients on diverse projects, including building portfolio sites (like Solarise's bio) and setting up project funding organizations. Utilized frontend technologies (HTML5, CSS3, JavaScript, React) and backend skills (Node.js, basic API integration) to deliver functional and aesthetically pleasing web solutions.",
    // websiteUrl: "#", // No single representative link
    // moreUrl: "#"
  },
  // Add more specific project examples if available or desired
];

export function Experience() { // Removed props, using static data for now
  return (
    <section id="experience" className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-heading-text sm:text-4xl md:text-5xl text-center mb-8 md:mb-12">
          Experience
        </h2>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-surface border-border backdrop-blur supports-[backdrop-filter]:bg-surface/60 flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl text-heading-text">{exp.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{exp.company} | {exp.period}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-primary-text">{exp.description}</p>
              </CardContent>
              {(exp.websiteUrl || exp.moreUrl) && (
                <div className="flex gap-4 p-6 pt-0">
                  {exp.websiteUrl && (
                    <Button variant="outline" asChild className="border-accent-green text-accent-green hover:bg-accent-green/10 hover:text-accent-green">
                      <Link href={exp.websiteUrl} target="_blank" rel="noreferrer">
                        {exp.company.includes("Personal") ? "View GitHub" : "Visit Website"} <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                  {exp.moreUrl && (
                    <Button variant="outline" asChild className="border-accent-blue text-accent-blue hover:bg-accent-blue/10 hover:text-accent-blue">
                      <Link href={exp.moreUrl} target="_blank" rel="noreferrer">
                        View More <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

