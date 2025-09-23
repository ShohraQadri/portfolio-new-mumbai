import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Zap, Users, Award } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and efficient code following best practices.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Optimizing applications for speed, achieving 30-40% faster load times.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Excellent team player with experience in Agile/Scrum environments.",
    },
    {
      icon: Award,
      title: "Quality",
      description:
        "Delivering pixel-perfect, responsive designs that exceed expectations.",
    },
  ];

  const certifications = [
    "Full Stack Java Developer (2022)",
    "Advanced Diploma in Computer Applications (ADCA)",
    "B.Tech in Computer Science Engineering",
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="hero-text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate Front-End Developer with expertise in creating
            exceptional user experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Professional Summary */}
          <div className="animate-slide-right">
            <Card className="card-elegant p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Professional Summary
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a dedicated{" "}
                    <strong className="text-primary">
                      Front-End Developer
                    </strong>{" "}
                    with over{" "}
                    <strong className="text-primary">
                      3+ years of experience
                    </strong>{" "}
                    building scalable, responsive web and mobile applications
                    using React.js, JavaScript, HTML5, and CSS3.
                  </p>
                  <p>
                    My expertise lies in creating reusable components, improving
                    user experience, and optimizing UI performance. I have
                    consistently delivered projects with{" "}
                    <strong className="text-accent">
                      30–40% faster load times
                    </strong>
                    , making applications more efficient and user-friendly.
                  </p>
                  <p>
                    Beyond development, I am passionate about turning ideas into
                    real projects. I’m exploring opportunities in AI-driven
                    solutions and small-scale ventures, and I enjoy
                    collaborating with like-minded individuals to build
                    innovative products that solve real-world problems.
                  </p>
                  <p>
                    I excel at cross-functional collaboration, API integration,
                    and version control via Git/GitHub. With a strong
                    understanding of UI/UX best practices, I thrive in
                    Agile/Scrum environments and am committed to delivering
                    clean, maintainable code that aligns with both technical and
                    business goals.
                  </p>
                </div>

                {/* Location & Contact */}
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-foreground">Location</p>
                      <p className="text-muted-foreground">Mumbai, India</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <p className="text-muted-foreground">+91 9027302188</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="card-elegant p-6 mt-6">
              <CardContent className="p-0">
                <h4 className="text-lg font-bold text-foreground mb-4">
                  Certifications & Education
                </h4>
                <div className="space-y-2">
                  {certifications.map((cert, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="mr-2 mb-2 px-3 py-1"
                    >
                      {cert}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Highlights */}
          <div className="animate-fade-up">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              What I Bring
            </h3>
            <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="card-elegant card-hover p-6 group">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <highlight.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {highlight.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Fun Fact */}
            <Card className="card-elegant p-6 mt-8 bg-gradient-primary text-white">
              <CardContent className="p-0">
                <h4 className="text-lg font-bold mb-2">💡 Fun Fact</h4>
                <p>
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or
                  designing user interfaces that make people's lives easier and
                  more enjoyable!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
