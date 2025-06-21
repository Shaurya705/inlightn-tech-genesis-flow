
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    program: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', program: '', message: '' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50/10 dark:from-slate-900/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            <MessageCircle size={16} />
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Begin Your
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Transformation?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Take the first step towards your tech career. Our team is here to guide you through 
            every aspect of your journey with Inlighn Tech.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="reveal bg-card/80 dark:bg-card/60 backdrop-blur-sm border border-border/30 dark:border-border/40 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background dark:bg-background/80 border border-border dark:border-border/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background dark:bg-background/80 border border-border dark:border-border/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="program" className="block text-sm font-medium text-foreground mb-2">
                  Program of Interest
                </label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background dark:bg-background/80 border border-border dark:border-border/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-foreground"
                >
                  <option value="">Select a program...</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="fullstack">Full Stack Development</option>
                  <option value="datascience">Data Science</option>
                  <option value="dataanalysis">Data Analysis</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background dark:bg-background/80 border border-border dark:border-border/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-foreground placeholder:text-muted-foreground"
                  placeholder="Tell us about your goals and how we can help you achieve them..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="reveal bg-card/80 dark:bg-card/60 backdrop-blur-sm border border-border/30 dark:border-border/40 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                    <p className="text-muted-foreground">info@inlighntech.com</p>
                    <p className="text-muted-foreground">admissions@inlighntech.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Visit Us</h4>
                    <p className="text-muted-foreground">123 Innovation Drive</p>
                    <p className="text-muted-foreground">Tech Valley, CA 94000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Office Hours</h4>
                    <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Sat: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="reveal bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-8 border border-border/20 dark:border-border/30">
              <h3 className="text-xl font-bold text-foreground mb-4">Quick Answers</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-foreground">Program duration: 4-10 months</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-foreground">Flexible payment plans available</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-foreground">24/7 student support</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-foreground">Job placement assistance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
