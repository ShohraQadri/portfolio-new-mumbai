import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2 } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  duration: string;
  type: "current" | "past";
  achievements: string[];
  technologies: string[];
}

const ExperienceSection = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Front-End Developer",
      company: "Pie Flow Tech (Mafatlal Group)",
      location: "Navi Mumbai",
      duration: "March 2025 – Present",
      type: "current",
      achievements: [
        "Developed dynamic web applications using React.js for Project Management, Group-Campus Relations, and Content Verification modules",
        "Designed reusable React components with conditional rendering and state management",
        "Integrated REST APIs for CRUD operations ensuring seamless UI-backend communication",
        "Enhanced UX with dynamic routing and component-level conditional views",
        "Ensured cross-browser compatibility using CSS3, SCSS modules, and Material UI",
      ],
      technologies: [
        "React.js",
        "JavaScript",
        "Material UI",
        "SCSS",
        "REST APIs",
        "State Management",
      ],
    },
    {
      title: "Front-End Developer",
      company: "Times Internet",
      location: "Noida",
      duration: "June 2024 – March 2025",
      type: "past",
      achievements: [
        "Developed and launched multiple websites with implemented SEO strategies",
        "Enhanced website visibility and performance resulting in increased organic traffic",
        "Integrated IzooTo for user engagement with analytics tracking",
        "Contributed as Full Stack Developer managing React.js frontend and Node.js backend",
        "Analyzed data trends using Google Analytics and Excel for business decisions",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "SEO Optimization",
        "Google Analytics",
        "IzooTo",
      ],
    },
    {
      title: "Front-End Developer",
      company: "Paavu Technology Pvt. Ltd.",
      location: "Gurugram",
      duration: "February 2023 – 2024",
      type: "past",
      achievements: [
        "Developed web and mobile projects including e-commerce solutions",
        "Designed and optimized HTML books from PDF documents improving loading time",
        "Customized web applications using Ionic framework for mobile platforms",
        "Converted XHTML to responsive HTML using CSS3 and Bootstrap",
        "Ensured cross-browser compatibility and mobile responsiveness",
      ],
      technologies: [
        "Angular",
        "Ionic Framework",
        "Bootstrap",
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
    },
    {
      title: "UI/UX Designer & Front-End Developer",
      company: "Skybreeze Institute",
      location: "Gurugram",
      duration: "March 2022 – November 2022",
      type: "past",
      achievements: [
        "Designed responsive websites optimized for multiple devices using React.js and Tailwind CSS",
        "Improved page speed and performance optimization",
        "Developed clean, maintainable front-end code enhancing user interface",
        "Conducted UI/UX design analysis increasing user engagement",
        "Collaborated on data-driven insights for design improvements",
      ],
      technologies: [
        "React.js",
        "Tailwind CSS",
        "UI/UX Design",
        "Performance Optimization",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Work <span className="hero-text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional journey and achievements in front-end development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative animate-fade-up ${
                  index % 2 === 0 ? "md:ml-20" : "md:ml-20"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-12 top-6 w-6 h-6 bg-primary rounded-full shadow-glow border-4 border-background hidden md:block">
                  {experience.type === "current" && (
                    <div className="absolute -inset-2 bg-primary/20 rounded-full animate-ping"></div>
                  )}
                </div>

                <Card className="card-elegant card-hover">
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {experience.title}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <Building2 className="h-4 w-4" />
                          <span className="font-semibold">
                            {experience.company}
                          </span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{experience.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>

                      {experience.type === "current" && (
                        <Badge className="bg-success text-white self-start md:self-center">
                          Current Position
                        </Badge>
                      )}
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map(
                          (achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="flex items-start gap-3 text-muted-foreground"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="leading-relaxed">
                                {achievement}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <Card className="card-elegant p-8 mt-16 bg-gradient-primary text-white animate-fade-up">
          <CardContent className="p-0">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Career Highlights</h3>
              <p className="opacity-90">Professional achievements and impact</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">3+</div>
                <p className="opacity-90">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">4</div>
                <p className="opacity-90">Companies</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">40%</div>
                <p className="opacity-90">Performance Boost</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">10+</div>
                <p className="opacity-90">Technologies</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ExperienceSection;
