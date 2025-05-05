import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Photography } from "@/components/Photography";
import { Footer } from "@/components/Footer";

export default function Home() {
  // Data fetched from golddev_analysis.md (currently hardcoded)
  const portfolioData = {
    name: "MrGolddev",
    tagline: "I'm a 13 years old designer and developer in Thailand",
    socials: [
      { name: "GitHub", url: "https://github.com/MrGolddev", icon: "Github" }, // Assuming icon names match lucide-react
      { name: "YouTube", url: "#", icon: "Youtube" }, // Placeholder URL
      { name: "Twitter", url: "#", icon: "Twitter" }, // Placeholder URL
      { name: "Discord", url: "#", icon: "Discord" } // Placeholder URL, assuming Discord icon exists
    ],
    about: {
      description: "Hello! I'm MrGolddev (aka gold), a designer with a knack for coding. With many years of experience, I've worked on diverse projects, including Solarise's bio and MrGoldTech's organization for project funding. I specialize in creating custom bots, modern websites, and innovative solutions with sleek designs and robust functionality.",
      skills: {
        frontend: [
          { name: "HTML5", icon: "Html5" },
          { name: "CSS3", icon: "Css3" },
          { name: "JavaScript", icon: "Javascript" }
        ],
        backend: [
          { name: "Cloudflare", icon: "Cloudflare" },
          { name: "Vercel", icon: "Vercel" },
          { name: "GitHub", icon: "Github" }
        ]
      }
    },
    experience: [
      {
        title: "Founder/Designer",
        company: "Solarise.lol",
        period: "April 2024 - Present",
        description: "A personal bio website with clean, minimal design",
        websiteUrl: "#", // Placeholder
        moreUrl: "#" // Placeholder
      },
      {
        title: "Co-Founder/Designer",
        company: "Voxium.xyz",
        period: "November 2024 - Present",
        description: "Voice chatting with ease and integrations. Soon 2025.",
        websiteUrl: "#", // Placeholder
        moreUrl: "#" // Placeholder
      }
    ]
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8 lg:p-12">
      <div className="w-full max-w-5xl space-y-16">
        <Header githubUrl={portfolioData.socials.find(s => s.name === 'GitHub')?.url || '#'} />
        <Hero name={portfolioData.name} tagline={portfolioData.tagline} socials={portfolioData.socials} />
        <About description={portfolioData.about.description} skills={portfolioData.about.skills} />
        <Experience experiences={portfolioData.experience} />
        <Photography />
        <Footer githubUrl={portfolioData.socials.find(s => s.name === 'GitHub')?.url || '#'} name={portfolioData.name} />
      </div>
    </main>
  );
}

