import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';
import { projects, coursework, achievements } from '@/data/portfolioData';

const PortfolioPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Encode the message for mailto link
    const subject = `Message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:anaghapai675@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sections = [
    { title: 'Projects', data: projects, type: 'projects', horizontal: true },
    { title: 'Coursework', data: coursework, type: 'coursework', horizontal: false },
    { title: 'Achievements', data: achievements, type: 'achievements', horizontal: false }
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          style={{ backgroundSize: '200% 200%' }}
        />
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="relative py-12 md:py-16 lg:py-24 border-b border-border/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                  Anagha A Pai
                </h1>
                <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
                  Technology researcher and full-stack developer focused on building thoughtful, impactful software. Explore my projects, coursework, and achievements below.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col sm:flex-row gap-2 justify-start md:justify-end flex-wrap"
              >
                <button
                  onClick={() => scrollToSection('projects-section')}
                  className="px-4 py-2.5 rounded-lg bg-primary/20 hover:bg-primary/30 border border-primary/50 text-primary transition text-sm md:text-base font-medium"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection('coursework-section')}
                  className="px-4 py-2.5 rounded-lg bg-primary/20 hover:bg-primary/30 border border-primary/50 text-primary transition text-sm md:text-base font-medium"
                >
                  Coursework
                </button>
                <button
                  onClick={() => scrollToSection('achievements-section')}
                  className="px-4 py-2.5 rounded-lg bg-primary/20 hover:bg-primary/30 border border-primary/50 text-primary transition text-sm md:text-base font-medium"
                >
                  Achievements
                </button>
                <button
                  onClick={() => scrollToSection('contact-section')}
                  className="px-4 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition text-sm md:text-base font-medium"
                >
                  Contact
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
          {sections.map((section, idx) => (
            <motion.section
              key={section.type}
              id={`${section.type}-section`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16 md:mb-20"
            >
              {/* Section Header */}
              <div className="mb-8 md:mb-10">
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white capitalize">
                  {section.title}
                </h2>
                <div className="h-1.5 w-12 bg-gradient-to-r from-primary to-blue-500 mt-3 rounded-full" />
              </div>

              {/* Cards Container */}
              {section.horizontal ? (
                // Horizontal scrolling for projects
                <div className="overflow-x-auto pb-4 -mx-4 px-4 md:-mx-6 md:px-6 scrollbar-hide">
                  <div className="flex gap-4 md:gap-6 min-w-min">
                    {section.data.map((item, i) => (
                      <motion.article
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        viewport={{ once: true }}
                        className="flex-shrink-0 w-80 sm:w-96 md:w-[420px] bg-card/40 backdrop-blur-md border border-border rounded-xl p-5 md:p-6 neon-border hover:border-primary/50 transition hover:bg-card/60 flex flex-col h-full"
                      >
                        <div className="flex items-start gap-3 mb-4">
                          <div className="p-3 rounded-lg bg-primary/20 flex-shrink-0">
                            <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-display text-base md:text-lg font-bold text-white break-words">
                              {item.title}
                            </h3>
                            <p className="text-white/70 text-xs md:text-sm mt-1">
                              {item.content}
                            </p>
                          </div>
                        </div>

                        <ul className="space-y-2 mb-4 flex-1">
                          {item.details.map((d, i) => (
                            <li key={i} className="text-xs md:text-sm text-white/80 flex items-start gap-2">
                              <span className="text-primary flex-shrink-0 mt-0.5">•</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>

                        {/* GitHub Link for Projects */}
                        {'githubLink' in item && item.githubLink && (
                          <a
                            href={item.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/20 hover:bg-primary/30 text-primary transition text-sm font-medium cursor-pointer w-full justify-center"
                            title="View on GitHub"
                          >
                            <Github className="w-4 h-4" />
                            View on GitHub
                          </a>
                        )}
                      </motion.article>
                    ))}
                  </div>
                </div>
              ) : (
                // Grid layout for coursework and achievements
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {section.data.map((item, i) => (
                    <motion.article
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className="bg-card/40 backdrop-blur-md border border-border rounded-xl p-4 md:p-6 neon-border hover:border-primary/50 transition hover:bg-card/60"
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <div className="p-2.5 rounded-lg bg-primary/20 flex-shrink-0">
                          <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-display text-base md:text-lg font-bold text-white break-words">
                            {item.title}
                          </h3>
                          <p className="text-white/70 text-xs md:text-sm mt-1">
                            {item.content}
                          </p>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {item.details.map((d, i) => (
                          <li key={i} className="text-xs md:text-sm text-white/80 flex items-start gap-2">
                            <span className="text-primary flex-shrink-0 mt-0.5">•</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.article>
                  ))}
                </div>
              )}
            </motion.section>
          ))}

          {/* Contact Section */}
          <motion.section
            id="contact-section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 md:mt-28"
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Get in Touch
                </h2>
                <p className="text-white/80 text-base md:text-lg mb-8 leading-relaxed">
                  Have a project in mind or want to collaborate? I'd love to hear from you. Feel free to reach out through any of these channels.
                </p>

                {/* Contact Links */}
                <div className="space-y-4">
                  {/* Email */}
                  <a
                    href="mailto:anaghapai675@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-lg bg-card/40 hover:bg-card/60 border border-border hover:border-primary/50 transition group"
                  >
                    <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition">
                      <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Email</p>
                      <p className="text-white font-medium">anaghapai675@gmail.com</p>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/anagha-pai-b216b8342/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-card/40 hover:bg-card/60 border border-border hover:border-primary/50 transition group"
                  >
                    <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition">
                      <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">LinkedIn</p>
                      <p className="text-white font-medium">linkedin.com/in/anagha-pai-b216b8342</p>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/anaghapai-03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-card/40 hover:bg-card/60 border border-border hover:border-primary/50 transition group"
                  >
                    <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition">
                      <Github className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">GitHub</p>
                      <p className="text-white font-medium">github.com/anaghapai-03</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <motion.form
                onSubmit={handleSubmit}
                className="bg-card/40 backdrop-blur-md border border-border rounded-xl p-6 md:p-8 neon-border"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="font-display text-2xl font-bold text-white mb-6">Send me a Message</h3>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-sm"
                  >
                    ✓ Thanks for your message! I'll get back to you soon.
                  </motion.div>
                )}

                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-primary transition"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-primary transition"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={4}
                      className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-primary transition resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-blue-500 text-white font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 mt-6"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </div>
              </motion.form>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
