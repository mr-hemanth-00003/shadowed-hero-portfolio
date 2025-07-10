
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Heart, Coffee } from "lucide-react";

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "Next.js", "Tailwind CSS",
    "PostgreSQL", "MongoDB", "AWS", "Docker", "Git", "Figma"
  ];

  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovation Co.",
      period: "2022 - Present",
      description: "Leading development of scalable web applications and mentoring junior developers."
    },
    {
      title: "Frontend Developer",
      company: "Creative Digital Agency",
      period: "2020 - 2022",
      description: "Built responsive web applications and collaborated with design teams on user experience."
    },
    {
      title: "Junior Developer",
      company: "Startup Ventures",
      period: "2019 - 2020",
      description: "Developed web applications and gained experience in full-stack development."
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate developer with a love for creating beautiful, functional digital experiences that make a difference.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Bio */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-white mb-6">My Story</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    With over 3 years of experience in web development, I've had the privilege of working 
                    with diverse teams and clients to bring innovative digital solutions to life. My journey 
                    began with a fascination for how technology can solve real-world problems.
                  </p>
                  <p>
                    I specialize in full-stack development, with expertise in modern frameworks like React, 
                    Node.js, and TypeScript. I believe in writing clean, maintainable code and creating 
                    user experiences that are both beautiful and functional.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                    projects, or enjoying a good cup of coffee while brainstorming the next big idea.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-white mb-6">Experience</h2>
                <div className="space-y-6">
                  {experience.map((job, index) => (
                    <div key={index} className="border-l-2 border-purple-500/30 pl-6 pb-6 last:pb-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar size={16} className="text-purple-400" />
                        <span className="text-purple-300 text-sm">{job.period}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                      <p className="text-purple-300 mb-2">{job.company}</p>
                      <p className="text-gray-400 text-sm">{job.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Quick Info */}
          <div className="space-y-8">
            {/* Personal Info */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-white mb-6">Quick Info</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin size={20} className="text-purple-400" />
                    <span className="text-gray-300">New York, USA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart size={20} className="text-pink-400" />
                    <span className="text-gray-300">Available for hire</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Coffee size={20} className="text-yellow-400" />
                    <span className="text-gray-300">Coffee enthusiast</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-white mb-6">Skills & Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border-white/10 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fun Facts */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-white mb-6">Fun Facts</h2>
                <div className="space-y-3 text-gray-300">
                  <p>☕ I drink 4+ cups of coffee daily</p>
                  <p>🌙 I do my best work at night</p>
                  <p>📚 Always learning new technologies</p>
                  <p>🎮 Gamer in my free time</p>
                  <p>🎵 Music lover - it helps me code</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
