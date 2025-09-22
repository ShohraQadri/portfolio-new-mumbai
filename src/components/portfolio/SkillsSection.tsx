import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface Skill {
  name: string;
  percentage: number;
  category: 'frontend' | 'tools' | 'frameworks';
}

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills: Skill[] = [
    // Frontend Technologies
    { name: 'React.js', percentage: 90, category: 'frontend' },
    { name: 'JavaScript', percentage: 88, category: 'frontend' },
    { name: 'HTML5', percentage: 95, category: 'frontend' },
    { name: 'CSS3', percentage: 92, category: 'frontend' },
    { name: 'TypeScript', percentage: 80, category: 'frontend' },
    
    // Frameworks & Libraries
    { name: 'Tailwind CSS', percentage: 90, category: 'frameworks' },
    { name: 'Bootstrap', percentage: 85, category: 'frameworks' },
    { name: 'Angular', percentage: 75, category: 'frameworks' },
    { name: 'Ionic Framework', percentage: 70, category: 'frameworks' },
    
    // Tools & Technologies
    { name: 'Git/GitHub', percentage: 88, category: 'tools' },
    { name: 'Node.js', percentage: 70, category: 'tools' },
    { name: 'REST APIs', percentage: 85, category: 'tools' },
    { name: 'Responsive Design', percentage: 95, category: 'tools' },
  ];

  const skillCategories = {
    frontend: { title: 'Frontend Technologies', icon: '💻' },
    frameworks: { title: 'Frameworks & Libraries', icon: '⚛️' },
    tools: { title: 'Tools & Technologies', icon: '🛠️' },
  };

  const groupedSkills = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    frameworks: skills.filter(skill => skill.category === 'frameworks'),
    tools: skills.filter(skill => skill.category === 'tools'),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const SkillBar = ({ skill, delay = 0 }: { skill: Skill; delay?: number }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          setProgress(skill.percentage);
        }, delay);
        return () => clearTimeout(timer);
      }
    }, [isVisible, skill.percentage, delay]);

    return (
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="font-medium text-foreground">{skill.name}</span>
          <span className="text-sm text-muted-foreground">{skill.percentage}%</span>
        </div>
        <div className="relative">
          <Progress
            value={progress}
            className="h-3 bg-secondary"
          />
          <div 
            className="absolute top-0 left-0 h-3 bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
            style={{
              width: isVisible ? `${skill.percentage}%` : '0%',
              transitionDelay: `${delay}ms`
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="hero-text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expertise in modern web technologies and development tools
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
            <Card 
              key={category}
              className="card-elegant p-8 animate-fade-up"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-3xl">
                    {skillCategories[category as keyof typeof skillCategories].icon}
                  </span>
                  <h3 className="text-xl font-bold text-foreground">
                    {skillCategories[category as keyof typeof skillCategories].title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {categorySkills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      delay={categoryIndex * 200 + skillIndex * 100}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <Card className="card-elegant p-8 mt-12 animate-fade-up">
          <CardContent className="p-0">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">
              Additional Expertise
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'UI/UX Design', desc: 'User-centered design principles' },
                { title: 'Agile/Scrum', desc: 'Project management methodologies' },
                { title: 'Performance Optimization', desc: '30-40% faster load times' },
                { title: 'Cross-browser Compatibility', desc: 'Consistent experience across platforms' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-gradient-subtle rounded-lg hover:bg-gradient-primary hover:text-white transition-all duration-300 group"
                >
                  <h4 className="font-semibold text-foreground group-hover:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground group-hover:text-white/80">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Learning Journey */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-card p-6 rounded-2xl shadow-medium">
            <span className="text-4xl">🎯</span>
            <div className="text-left">
              <p className="font-semibold text-foreground">Always Learning</p>
              <p className="text-sm text-muted-foreground">
                Staying updated with the latest technologies and best practices
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;