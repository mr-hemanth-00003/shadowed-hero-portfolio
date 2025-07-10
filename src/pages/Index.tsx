
import { ArrowRight, Download, Github, Linkedin, Mail, Code, Palette, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  const skills = [
    { icon: Code, title: "Development", description: "Full-stack web development with modern technologies" },
    { icon: Palette, title: "Design", description: "UI/UX design with focus on user experience" },
    { icon: Zap, title: "Performance", description: "Optimized solutions for fast, scalable applications" },
  ];

  const quickStats = [
    { number: "50+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
              Creative Developer
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
              Building Digital Experiences
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              I craft beautiful, functional, and user-centered digital experiences. 
              Let's bring your ideas to life with cutting-edge technology and creative design.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Link to="/projects">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                View My Work
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2" size={20} />
              Download CV
            </Button>
          </div>

          <div className="flex justify-center space-x-6 animate-fade-in">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Linkedin size={24} />
            </a>
            <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
              <Mail size={24} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickStats.map((stat, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What I Do Best
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I specialize in creating comprehensive digital solutions that combine technical expertise with creative vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                      <skill.icon size={32} className="text-purple-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{skill.title}</h3>
                  <p className="text-gray-400">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-white/20 backdrop-blur-sm">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Work Together?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                I'm always excited to take on new challenges and create something amazing. 
                Let's discuss your project and bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                    Get In Touch
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                    Learn More About Me
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
