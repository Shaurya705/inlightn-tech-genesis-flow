
import React from 'react';
import { Target, Users, Award, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "Precision Learning",
      description: "Our curriculum is laser-focused on industry-relevant skills that employers actually need."
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Learn from seasoned professionals who've walked the path you're about to embark on."
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description: "Our track record speaks for itself - with graduates now leading at top tech companies."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We don't just teach technology; we cultivate the mindset to innovate and shape the future."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-blue-50/10 dark:to-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            The Foundation of Excellence
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why Inlighn Tech Is Your
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Gateway to Success
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We don't just teach technology - we transform lives. Our mission is to bridge the gap between 
            ambition and achievement, turning aspiring minds into industry leaders.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="reveal">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Crafting the Next Generation of Tech Innovators
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Inlighn Tech, we believe that every great technological breakthrough starts with 
              a single curious mind. Our approach goes beyond traditional education - we create 
              immersive experiences that simulate real-world challenges and opportunities.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Through our carefully crafted programs in Cybersecurity, Full Stack Development, 
              Data Science, and Data Analysis, we guide you through a transformative journey 
              from curiosity to mastery, from dreamer to innovator.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-border/20 dark:border-border/30">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+ Years</div>
                <div className="text-sm text-muted-foreground">Industry Experience</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-border/20 dark:border-border/30">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">Global</div>
                <div className="text-sm text-muted-foreground">Recognition</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="reveal perspective-1000">
            <div className="relative transform-3d hover:rotate-y-12 transition-transform duration-500">
              <div className="bg-gradient-to-br from-blue-100 via-cyan-100 to-purple-100 dark:from-blue-900/30 dark:via-cyan-900/30 dark:to-purple-900/30 rounded-2xl p-8 shadow-2xl border border-border/20 dark:border-border/30 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Target className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Mission-Driven</h4>
                      <p className="text-sm text-muted-foreground">Purpose-built for success</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Lightbulb className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Innovation Focus</h4>
                      <p className="text-sm text-muted-foreground">Cutting-edge methodologies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Award className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Proven Results</h4>
                      <p className="text-sm text-muted-foreground">Measurable outcomes</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-float opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-float opacity-60" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="reveal text-center p-6 bg-card/80 dark:bg-card/60 backdrop-blur-sm rounded-xl border border-border/20 dark:border-border/30 hover:shadow-lg hover:bg-card/90 dark:hover:bg-card/70 transition-all duration-300 group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 glow-azure">
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
