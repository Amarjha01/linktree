import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Twitter, 
  Globe, 
  Mail, 
  ExternalLink,
  Code,
  UserCircle,
  PenTool,
  Terminal,
  Cpu,
  Layout,
  LucideArrowRight,
  Braces,
  ChevronRight
} from 'lucide-react';

export default function EnhancedFuturisticLinkTree() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [activeSection, setActiveSection] = useState('links');
  const containerRef = useRef(null);
  const [cursorVariant, setCursorVariant] = useState("default");
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const links = [
    { 
      id: 1, 
      title: 'Portfolio', 
      url: 'https://amarjha.tech/', 
      icon: <Globe className="text-cyan-300" size={20} />, 
      color: 'bg-gradient-to-r from-cyan-500 to-blue-500',
      description: 'Check out my latest web development projects'
    },
    { 
      id: 2, 
      title: 'GitHub', 
      url: 'https://github.com/Amarjha01/', 
      icon: <Github className="text-violet-300" size={20} />, 
      color: 'bg-gradient-to-r from-violet-500 to-fuchsia-500',
      description: 'Explore my code repositories and contributions'
    },
    { 
      id: 3, 
      title: 'LinkedIn', 
      url: '#', 
      icon: <Linkedin className="text-blue-300" size={20} />, 
      color: 'bg-gradient-to-r from-blue-500 to-indigo-500',
      description: 'Connect with me professionally'
    },
    { 
      id: 4, 
      title: 'Twitter', 
      url: '#', 
      icon: <Twitter className="text-sky-300" size={20} />, 
      color: 'bg-gradient-to-r from-sky-500 to-blue-500',
      description: 'Follow me for tech updates and insights'
    },
    { 
      id: 5, 
      title: 'Instagram', 
      url: '#', 
      icon: <Instagram className="text-rose-300" size={20} />, 
      color: 'bg-gradient-to-r from-pink-500 to-rose-500',
      description: 'Behind the scenes and personal projects'
    },
    { 
      id: 6, 
      title: 'Contact Me', 
      url: 'mailto:contact@example.com', 
      icon: <Mail className="text-emerald-300" size={20} />, 
      color: 'bg-gradient-to-r from-emerald-500 to-teal-500',
      description: 'Get in touch for collaborations and opportunities'
    },
  ];
  
  const skills = [
    { name: 'Web Development', icon: <Globe size={16} /> },
    { name: 'Full Stack', icon: <Code size={16} /> },
    { name: 'UI/UX Design', icon: <PenTool size={16} /> },
    { name: 'DevOps', icon: <Terminal size={16} /> },
    { name: 'Machine Learning', icon: <Cpu size={16} /> },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js and MongoDB',
      url: '#',
      image: '/api/placeholder/400/200',
      tags: ['React', 'Node.js', 'MongoDB'],
      color: 'bg-gradient-to-r from-indigo-500 to-purple-500'
    },
    {
      id: 2,
      title: 'AI Image Generator',
      description: 'Generate unique images using machine learning algorithms',
      url: '#',
      image: '/api/placeholder/400/200',
      tags: ['Python', 'TensorFlow', 'React'],
      color: 'bg-gradient-to-r from-amber-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Smart Home Dashboard',
      description: 'IoT dashboard for monitoring and controlling smart home devices',
      url: '#',
      image: '/api/placeholder/400/200',
      tags: ['React', 'Node.js', 'IoT'],
      color: 'bg-gradient-to-r from-emerald-500 to-cyan-500'
    }
  ];

  const cursorVariants = {
    default: {
      height: 32,
      width: 32,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "rgba(75, 85, 99, 0.2)",
      mixBlendMode: "difference"
    },
    hover: {
      height: 64,
      width: 64,
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      backgroundColor: "rgba(59, 130, 246, 0.5)",
      mixBlendMode: "difference"
    }
  };

  const tabVariants = {
    active: {
      color: "#ffffff",
      borderColor: "#3b82f6",
      backgroundColor: "rgba(59, 130, 246, 0.2)"
    },
    inactive: {
      color: "#9ca3af",
      borderColor: "transparent",
      backgroundColor: "transparent"
    }
  };

  const enterHover = () => setCursorVariant("hover");
  const leaveHover = () => setCursorVariant("default");

  return (
    <div 
      className="min-h-screen bg-black text-white flex flex-col items-center justify-start py-12 px-4 overflow-hidden relative"
      ref={containerRef}
    >
      {/* Custom cursor */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 border border-blue-500"
        variants={cursorVariants}
        animate={cursorVariant}
      />

      {/* Futuristic grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px), 
                                linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>

      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-10"
          animate={{
            x: [0, 50, -20, 0],
            y: [0, -30, 50, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute top-0 -right-20 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-10"
          animate={{
            x: [0, -70, 30, 0],
            y: [0, 40, -40, 0],
            scale: [1, 0.9, 1.1, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 left-20 w-80 h-80 bg-teal-500 rounded-full filter blur-3xl opacity-10"
          animate={{
            x: [0, 40, -60, 0],
            y: [0, -50, 20, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      {/* Futuristic scanning line effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-5 z-0"
        animate={{
          y: [-1000, 2000]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Profile section */}
      <motion.div 
        className="z-10 mb-8 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="relative w-24 h-24 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1"
          whileHover={{ scale: 1.05 }}
          onMouseEnter={enterHover}
          onMouseLeave={leaveHover}
        >
          <div className="absolute inset-0 rounded-full overflow-hidden flex items-center justify-center bg-gray-900">
            <UserCircle size={60} className="text-blue-400" />
          </div>
          <motion.div 
            className="absolute -inset-2 rounded-full opacity-70"
            animate={{ 
              background: [
                "linear-gradient(0deg, #3b82f6, #8b5cf6)",
                "linear-gradient(90deg, #8b5cf6, #ec4899)",
                "linear-gradient(180deg, #ec4899, #3b82f6)",
                "linear-gradient(270deg, #3b82f6, #8b5cf6)"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            style={{ filter: "blur(10px)" }}
          />
          <div className="absolute inset-0 rounded-full border border-blue-400 opacity-50"></div>
        </motion.div>
        
        <motion.h1 
          className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Amar Jha
        </motion.h1>
        
        <motion.div 
          className="text-sm text-blue-400 mb-2 flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <Code size={14} className="mr-1" />
          <span className="mr-2">Full Stack Developer</span>
          <span className="mx-2 text-gray-600">|</span>
          <PenTool size={14} className="mr-1" />
          <span>UI/UX Designer</span>
        </motion.div>
        
        <motion.div 
          className="text-xs text-gray-400 mb-4 max-w-xs text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          Building incredible web experiences with modern technologies
        </motion.div>
        
        {/* Skills tags */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-6 max-w-xs"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="px-3 py-1 rounded-full bg-gray-900 border border-gray-800 text-xs flex items-center gap-1 hover:border-blue-500 transition-all"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(59, 130, 246, 0.2)",
                borderColor: "#3b82f6" 
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + (index * 0.1), duration: 0.4 }}
              onMouseEnter={enterHover}
              onMouseLeave={leaveHover}
            >
              {skill.icon}
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Navigation Tabs */}
      <motion.div 
        className="z-10 max-w-md w-full mb-6 flex justify-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <motion.button
          className="px-4 py-2 rounded-lg text-sm border-2 flex items-center gap-1"
          variants={tabVariants}
          animate={activeSection === 'links' ? 'active' : 'inactive'}
          onClick={() => setActiveSection('links')}
          whileHover={{ scale: 1.03 }}
          onMouseEnter={enterHover}
          onMouseLeave={leaveHover}
        >
          <Globe size={14} />
          <span>Links</span>
        </motion.button>
        
        <motion.button
          className="px-4 py-2 rounded-lg text-sm border-2 flex items-center gap-1"
          variants={tabVariants}
          animate={activeSection === 'projects' ? 'active' : 'inactive'}
          onClick={() => setActiveSection('projects')}
          whileHover={{ scale: 1.03 }}
          onMouseEnter={enterHover}
          onMouseLeave={leaveHover}
        >
          <Layout size={14} />
          <span>Projects</span>
        </motion.button>
      </motion.div>

      {/* Content Container */}
      <AnimatePresence mode="wait">
        {activeSection === 'links' && (
          <motion.div 
            key="links"
            className="z-10 max-w-md w-full space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((link, index) => (
              <motion.a 
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                onMouseEnter={() => {
                  setIsHovering(true);
                  setActiveLink(link.id);
                  enterHover();
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                  setActiveLink(null);
                  leaveHover();
                }}
              >
                <motion.div 
                  className="relative rounded-lg p-px overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Animated border */}
                  <motion.div 
                    className={`absolute inset-0 ${link.color}`}
                    animate={{ 
                      opacity: activeLink === link.id ? 1 : 0.6,
                      background: activeLink === link.id ? 
                        [
                          link.color,
                          "linear-gradient(90deg, " + link.color.replace('from-', '').replace('to-', '') + ")",
                          link.color
                        ] : link.color
                    }}
                    transition={{ duration: 2, repeat: activeLink === link.id ? Infinity : 0 }}
                  ></motion.div>
                  
                  {/* Futuristic scanner effect on hover */}
                  {activeLink === link.id && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                      animate={{ x: [-200, 500] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                    />
                  )}
                  
                  {/* Inner content */}
                  <div className="relative bg-gray-900 backdrop-blur-sm rounded-lg p-4 flex items-center justify-between group hover:bg-gray-800/80 transition-all">
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center"
                        whileHover={{ rotate: 5 }}
                      >
                        {link.icon}
                      </motion.div>
                      <div>
                        <h3 className="font-medium text-white">{link.title}</h3>
                        <p className="text-xs text-gray-400">{link.description}</p>
                      </div>
                    </div>
                    <motion.div 
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <ExternalLink className="text-gray-500 group-hover:text-white transition-colors" size={16} />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        )}

        {activeSection === 'projects' && (
          <motion.div 
            key="projects"
            className="z-10 max-w-md w-full space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {projects.map((project, index) => (
              <motion.a 
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                onMouseEnter={enterHover}
                onMouseLeave={leaveHover}
              >
                <motion.div 
                  className="relative rounded-lg p-px overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Animated border */}
                  <motion.div 
                    className={`absolute inset-0 ${project.color}`}
                    animate={{ 
                      background: [
                        project.color,
                        "linear-gradient(90deg, " + project.color.replace('from-', '').replace('to-', '') + ")",
                        project.color
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  ></motion.div>
                  
                  {/* Inner content */}
                  <div className="relative bg-gray-900 backdrop-blur-sm rounded-lg overflow-hidden">
                    <div className="aspect-video relative overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <h3 className="font-bold text-lg text-white">{project.title}</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-300 mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-gray-800 rounded-md text-xs text-gray-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <motion.div 
                        className="flex items-center text-blue-400 text-sm font-medium"
                        whileHover={{ x: 5 }}
                      >
                        <span>View Project</span>
                        <ChevronRight size={16} className="ml-1" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <motion.div 
        className="mt-12 text-center text-xs text-gray-500 z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.5 }}
      >
        <p>© 2025 Amar Jha · All rights reserved</p>
        <p className="mt-1 text-blue-500/70">Built with React, Tailwind CSS & Framer Motion</p>
      </motion.div>

      <style jsx>{`
        /* For the blob animations that might not be covered by Framer Motion */
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>
    </div>
  );
}