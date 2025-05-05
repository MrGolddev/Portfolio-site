import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Assuming shadcn/ui components are available
import { Badge } from "@/components/ui/badge";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

// Dynamically get Lucide icons
const DynamicIcon = ({ name }: { name: string }) => {
  const IconComponent = (LucideIcons as any)[name];

  if (!IconComponent) {
    // Return a default icon or null if not found
    return <LucideIcons.Code className="mr-2 h-4 w-4" />;
  }

  return <IconComponent className="mr-2 h-4 w-4" />;
};

interface Skill {
  name: string;
  icon: string;
}

interface Skills {
  frontend: Skill[];
  backend: Skill[];
}

interface AboutProps {
  description: string;
  skills: Skills;
}

export function About({ description, skills }: AboutProps) {
  return (
    <section id="about" className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-heading-text sm:text-4xl md:text-5xl text-center mb-8 md:mb-12">
          About Me
        </h2>
        <Card className="bg-surface border-border backdrop-blur supports-[backdrop-filter]:bg-surface/60">
          <CardHeader>
            <CardTitle className="text-xl text-heading-text">Overall</CardTitle>
          </CardHeader>
          <CardContent className="text-primary-text">
            <p>{description}</p>
          </CardContent>
        </Card>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <Card className="bg-surface border-border backdrop-blur supports-[backdrop-filter]:bg-surface/60">
            <CardHeader>
              <CardTitle className="text-xl text-heading-text">Frontend</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skills.frontend.map((skill) => (
                <Badge key={skill.name} variant="secondary" className="bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                  <DynamicIcon name={skill.icon} />
                  {skill.name}
                </Badge>
              ))}
            </CardContent>
          </Card>
          <Card className="bg-surface border-border backdrop-blur supports-[backdrop-filter]:bg-surface/60">
            <CardHeader>
              <CardTitle className="text-xl text-heading-text">Backend</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skills.backend.map((skill) => (
                <Badge key={skill.name} variant="secondary" className="bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                  <DynamicIcon name={skill.icon} />
                  {skill.name}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

