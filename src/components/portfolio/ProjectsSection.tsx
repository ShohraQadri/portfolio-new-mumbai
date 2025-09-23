import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Sparkles,
  Brain,
  Heart,
  Code2,
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  category: "live" | "personal";
  status: "live" | "completed" | "in-progress";
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Al-Infaq Trust",
      description:
        "Modern charity platform with donation management and community features",
      longDescription:
        "A comprehensive charity and donation platform built with React.js, featuring user authentication, donation tracking, campaign management, and community engagement tools. Currently in active development; features are being gradually deployed live.",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Express.js",
        "JWT",
      ],
      features: [
        "Secure donation processing (in progress)",
        "Campaign management system (in progress)",
        "User authentication & profiles",
        "Real-time donation tracking (partial)",
        "Responsive design",
        "Admin dashboard (in progress)",
      ],
      liveUrl: "https://al-infaq-trust.vercel.app/",
      image: "🕌",
      category: "live",
      status: "in-progress",
    },
    {
      title: "AI Resume Builder",
      description:
        "Intelligent resume platform with AI content suggestions and ATS optimization",
      longDescription:
        "An AI-powered resume builder helping users create professional resumes with ATS optimization, templates, and content suggestions. Currently in development; features are being rolled out incrementally.",
      technologies: [
        "React.js",
        "AI/ML Integration",
        "Tailwind CSS",
        "Node.js",
        "PDF Generation",
      ],
      features: [
        "AI-powered content suggestions (in progress)",
        "ATS optimization scoring (partial)",
        "Multiple resume templates",
        "Real-time preview",
        "PDF export functionality (planned)",
        "Career guidance tools (in progress)",
      ],
      liveUrl: "https://ai-resume-project-72rl.vercel.app/",
      image: "🤖",
      category: "live",
      status: "in-progress",
    },
    {
      title: "Instagram Clone",
      description: "Full-stack social media application with modern features",
      longDescription:
        "A complete Instagram clone built with the MERN stack, featuring photo sharing, real-time chat, stories, likes, comments, and follow system.",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Socket.io",
        "Cloudinary",
      ],
      features: [
        "Photo upload & sharing",
        "Real-time messaging",
        "Stories functionality",
        "Like & comment system",
        "User following system",
        "Image filters & editing",
      ],
      image: "📸",
      category: "personal",
      status: "completed",
    },
    {
      title: "Book Management System",
      description: "Java Swing-based library management application",
      longDescription:
        "A desktop application for library management with features for book cataloging, member management, and borrowing system.",
      technologies: ["Java", "Swing", "MySQL", "JDBC", "MVC Architecture"],
      features: [
        "Book catalog management",
        "Member registration",
        "Borrowing & return system",
        "Search functionality",
        "Report generation",
        "Fine calculation",
      ],
      image: "📚",
      category: "personal",
      status: "completed",
    },
    {
      title: "VegeFoods Website",
      description: "Responsive e-commerce platform for organic products",
      longDescription:
        "A fully responsive e-commerce website for organic food products with shopping cart, product catalog, and payment integration.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "PHP",
        "MySQL",
      ],
      features: [
        "Product catalog",
        "Shopping cart functionality",
        "User authentication",
        "Order management",
        "Payment integration",
        "Admin panel",
      ],
      image: "🥬",
      category: "personal",
      status: "completed",
    },
  ];

  const liveProjects = projects.filter((p) => p.category === "live");
  const personalProjects = projects.filter((p) => p.category === "personal");

  const ProjectCard = ({
    project,
    index,
  }: {
    project: Project;
    index: number;
  }) => (
    <Card
      className="card-elegant project-card group h-full"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-0 h-full flex flex-col">
        {/* Project Header */}
        <div className="relative p-8 bg-gradient-subtle">
          <div className="flex items-center justify-between mb-4">
            <div className="text-6xl">{project.image}</div>
            <div className="flex gap-2">
              {project.status === "live" && (
                <Badge className="bg-success text-white">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Live
                </Badge>
              )}
              {project.liveUrl && (
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:text-primary"
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} live`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:text-primary"
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code`}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              )}
            </div>
          </div>

          <h3 className="text-xl font-bold text-foreground mb-2">
            {project.title}
          </h3>
          <p className="text-muted-foreground">{project.description}</p>
          <p>
            <Badge className="bg-success text-white mt-4">
              {project.status}
            </Badge>
          </p>
        </div>

        {/* Project Details */}
        <div className="p-8 flex-grow">
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {project.longDescription}
          </p>

          {/* Features */}
          <div className="mb-6">
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Code2 className="h-4 w-4 text-primary" />
              Key Features
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {project.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  variant="outline"
                  className="px-2 py-1 text-xs border-primary/30 text-primary hover:bg-primary/10"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Project Actions */}
        <div className="p-8 pt-0 border-t border-border/50">
          <div className="flex gap-3">
            {project.liveUrl && (
              <Button asChild className="btn-gradient flex-1">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Live
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="outline"
                asChild
                className="btn-outline-gradient flex-1"
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  Source Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="hero-text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcase of live applications and personal projects demonstrating
            technical expertise
          </p>
        </div>

        {/* Live Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Brain className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">
              Live Projects
            </h3>
            <Badge className="bg-success text-white">Currently Active</Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {liveProjects.map((project, index) => (
              <div key={project.title} className="animate-fade-up">
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Heart className="h-6 w-6 text-accent" />
            <h3 className="text-2xl font-bold text-foreground">
              Personal Projects
            </h3>
            <Badge variant="secondary">Learning & Development</Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalProjects.map((project, index) => (
              <div key={project.title} className="animate-fade-up">
                <ProjectCard
                  project={project}
                  index={index + liveProjects.length}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="card-elegant p-8 mt-16 text-center bg-gradient-primary text-white animate-fade-up">
          <CardContent className="p-0">
            <h3 className="text-2xl font-bold mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Let's collaborate on your next project and bring your ideas to
              life!
            </p>
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="bg-white text-primary hover:bg-white/90"
            >
              <a href="#contact" className="flex items-center gap-2">
                Get In Touch
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProjectsSection;
