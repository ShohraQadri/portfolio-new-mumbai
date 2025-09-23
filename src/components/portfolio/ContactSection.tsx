import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Download,
  MessageCircle,
  Clock,
  CheckCircle,
} from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_onip9f4",
        "template_eh9cs45",
        formData,
        "wVCXo-HLPxMNAhaf5"
      )
      .then(
        (result) => {
          console.log("Message sent", result.text);
        },
        (error) => {
          console.log("Error", error.text);
        }
      );
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "qadrishohra@gmail.com",
      href: "mailto:qadrishohra@gmail.com",
      description: "Send me an email anytime",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9027302188",
      href: "tel:+919027302188",
      description: "Available All Days",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mumbai, India",
      href: "https://maps.google.com/?q=Mumbai,India",
      description: "Open to remote opportunities",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ShohraQadri",
      description: "View my code repositories",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/shohra-qadri-7b2982224",
      description: "Connect professionally",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="hero-text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate? Let's discuss your project and bring your
            ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Quick Actions */}
            <Card className="card-elegant p-6 bg-gradient-primary text-white">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Let's Connect
                </h3>
                <p className="mb-6 opacity-90">
                  Available for freelance projects and full-time opportunities
                </p>
                <div className="flex flex-col gap-3">
                  <Button
                    variant="secondary"
                    asChild
                    className="bg-white text-primary hover:bg-white/90 justify-start"
                  >
                    <a
                      href="mailto:qadrishohra@gmail.com"
                      className="flex items-center gap-2"
                    >
                      <Mail className="h-4 w-4" />
                      Send Email
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    asChild
                    className="text-white hover:bg-white/20 justify-start"
                  >
                    <a
                      href="/resume/Qadri_Resume.pdf"
                      download="Qadri_Resume.pdf"
                      className="flex items-center gap-2"
                    >
                      <Download className="h-4 w-4" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="card-elegant card-hover p-4 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-0">
                    <a
                      href={info.href}
                      className="flex items-start gap-4 group"
                      target={
                        info.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {info.label}
                        </h4>
                        <p className="text-foreground font-medium">
                          {info.value}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <Card className="card-elegant p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Follow Me
                </h3>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                    >
                      <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <div>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {social.label}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {social.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="card-elegant p-6 border-success/50">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <h3 className="text-lg font-bold text-foreground">
                    Available for Work
                  </h3>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Response time: Within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Open to new opportunities</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-elegant p-8 animate-fade-up">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Send Me a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={6}
                      className="w-full resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gradient w-full py-6 text-lg font-semibold"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending Message...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-5 w-5" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>

                {/* Additional Info */}
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center">
                    Prefer email? Reach me directly at{" "}
                    <a
                      href="mailto:qadrishohra@gmail.com"
                      className="text-primary hover:underline font-medium"
                    >
                      qadrishohra@gmail.com
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2025 Shohra Qadri. Built with React.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
