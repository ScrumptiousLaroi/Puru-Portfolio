import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, ChevronDown } from 'lucide-react';

function App() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Puru Thakur
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            App Developer & Video Editor
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <a href="https://github.com/ScrumptiousLaroi" className="p-2 hover:text-blue-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/puruthakur/" className="p-2 hover:text-blue-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:puruthakur262@gmail.com" className="p-2 hover:text-blue-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <User className="text-blue-600" size={28} />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
                alt="Profile"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm a passionate app developer with expertise in building mobile and web applications.
                I also specialize in video editing and content creation. When I'm not coding,
                you can find me working on creative video projects or exploring new technologies.
              </p>
              <a 
                 href="/resume.pdf"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
              >
  View Resume <ExternalLink size={16} />
</a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-12">
            <Code2 className="text-blue-600" size={28} />
            <h2 className="text-3xl font-bold">Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "React Native", "SwiftUI", "iOS Development",
              "Android Development", "Adobe Photoshop", "DaVinci Resolve",
              "React.js", "SQL Alchemy"
            ].map((skill) => (
              <div 
                key={skill}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="font-medium text-gray-800">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-12">
            <Briefcase className="text-blue-600" size={28} />
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Mobile App",
                description: "Mobile application for waste management detects waste and its estimated decomposition time, environmental impacts and alternatives",
                image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80",
                link: "https://github.com/ScrumptiousLaroi/DecompositionAnalyzer/tree/main"
              },
              {
                title: "Video Production",
                description: "My Portfolio for Video Editing and Production",
                image: "https://plus.unsplash.com/premium_photo-1663040316559-8684ca45d7e9?q=80&w=2940?auto=format&fit=crop&q=80",
                link: "https://drive.google.com/drive/folders/1cryC0c6n128fYMJeyog2T_Hi_6d0efUp?usp=drive_link"
              },
              {
                title: "Predicting Drug dosage to reduce cancer cells by 50%",
                description : "The primary purpose of this website is to enable medical professionals to upload data pertaining to cancer drug treatments administered to patients",
                image: "https://images.unsplash.com/photo-1513224502586-d1e602410265?q=80&w=2831?auto=format&fit=crop&q=80",
                link: "https://github.com/ScrumptiousLaroi/CS50-Final-Project"
              }
            ].map((project) => (
              <div key={project.title} className="group">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a 
                      href={project.link}
                      className="text-white flex items-center gap-2"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            I'm always open to new opportunities and interesting projects.
          </p>
          <a 
            href="mailto:puruthakur262@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Me <Mail size={16} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Puru Thakur. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;