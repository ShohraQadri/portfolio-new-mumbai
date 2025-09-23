import React, { useEffect, useState } from "react";
import { ChevronDown, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import techBg from "@/assets/tech-bg.jpg";
import portrait from "@/assets/shohra.jpg";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Front-End Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--surface)) 50%, hsl(var(--background)) 100%), url(${techBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-48 h-48 bg-accent-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-up">
            <div className="mb-6">
              <p className="text-lg text-muted-foreground mb-2">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
                Shohra
                <span className="hero-text-gradient block">Qadri</span>
              </h1>
              <div className="text-2xl md:text-3xl font-semibold text-muted-dark h-12">
                <span className="border-r-3 border-primary pr-1 animate-blink">
                  {displayText}
                </span>
              </div>
            </div>

            <div className="mb-8 space-y-2 text-lg text-muted-foreground">
              <p className="flex items-center justify-center lg:justify-start gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Mumbai, India
              </p>
              <p>3+ Years of Experience</p>
              <p>Specialized in React.js & Modern Web Development</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToAbout()}
                className="btn-gradient px-8 py-6 text-lg font-semibold rounded-xl hover:scale-105 transition-transform duration-200"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                className="btn-outline-gradient px-8 py-6 text-lg font-semibold rounded-xl hover:scale-105 transition-transform duration-200"
                asChild
              >
                <a
                  className="flex items-center gap-2"
                  href="/resume/Qadri_Resume.pdf"
                  download="Qadri_Resume.pdf"
                >
                  <Download className="h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-3xl font-bold hero-text-gradient">3+</div>
                <p className="text-sm text-muted-foreground">
                  Years Experience
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold hero-text-gradient">10+</div>
                <p className="text-sm text-muted-foreground">
                  Projects Completed
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold hero-text-gradient">5+</div>
                <p className="text-sm text-muted-foreground">Technologies</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-right lg:animate-fade-up">
            <div className="relative z-10">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-3xl rotate-6 animate-glow-pulse"></div>
                <img
                  src={portrait}
                  alt="Shohra Qadri - Front-End Developer"
                  className="relative z-10 w-full h-full object-cover rounded-3xl shadow-large"
                />
              </div>
            </div>

            {/* Floating Tech Icons */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-card rounded-xl shadow-medium flex items-center justify-center animate-float">
              <span className="text-2xl">⚛️</span>
            </div>
            <div
              className="absolute bottom-10 left-0 w-16 h-16 bg-card rounded-xl shadow-medium flex items-center justify-center animate-float"
              style={{ animationDelay: "1s" }}
            >
              <span className="text-2xl">💻</span>
            </div>
            <div
              className="absolute top-1/2 -right-4 w-16 h-16 bg-card rounded-xl shadow-medium flex items-center justify-center animate-float"
              style={{ animationDelay: "2s" }}
            >
              <span className="text-2xl">🚀</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
