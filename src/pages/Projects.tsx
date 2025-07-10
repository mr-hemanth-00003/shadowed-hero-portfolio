
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Filter } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and payment processing.",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg",
      tags: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
      category: "frontend",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current weather conditions and forecasts using external APIs with beautiful visualizations.",
      image: "/placeholder.svg",
      tags: ["JavaScript", "Chart.js", "OpenWeather API"],
      category: "frontend",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Blog CMS",
      description: "A content management system for bloggers with rich text editing, image uploads, and SEO optimization features.",
      image: "/placeholder.svg",
      tags: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS"],
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A responsive portfolio website with modern design, smooth animations, and optimized performance.",
      image: "/placeholder.svg",
      tags: ["React", "Framer Motion", "TailwindCSS"],
      category: "frontend",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "API Gateway Service",
      description: "A scalable API gateway service with authentication, rate limiting, and request/response transformation capabilities.",
      image: "/placeholder.svg",
      tags: ["Node.js", "Express", "Redis", "Docker"],
      category: "backend",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "fullstack", label: "Full Stack" },
    { id: "backend", label: "Backend" }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen pt-24 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of projects I've worked on, showcasing my skills in web development and design.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 group overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                  <div className="text-white/50 text-lg">Project Preview</div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge 
                        key={index}
                        variant="secondary" 
                        className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border-white/10"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Filter */}
        <div className="flex items-center gap-4 mb-8">
          <Filter size={20} className="text-purple-400" />
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(category.id)}
                className={filter === category.id 
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" 
                  : "border-white/20 text-white hover:bg-white/10"
                }
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 group overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                <div className="text-white/50 text-sm">Project Preview</div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <Badge 
                      key={index}
                      variant="secondary" 
                      className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border-white/10 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="secondary" className="bg-white/10 text-white border-white/10 text-xs">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white flex-1 text-xs">
                    <ExternalLink size={14} className="mr-1" />
                    Live
                  </Button>
                  <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10 flex-1 text-xs">
                    <Github size={14} className="mr-1" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-20">
          <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-white/20 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Like What You See?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                These are just a few examples of my work. I'm always working on new projects and learning new technologies.
              </p>
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                Let's Work Together
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Projects;
