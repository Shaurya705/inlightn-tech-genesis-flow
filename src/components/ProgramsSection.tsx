
import React from 'react';
import { Shield, Code, BarChart3, Database, ArrowRight, Zap } from 'lucide-react';

const ProgramsSection = () => {
  const programs = [
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      subtitle: 'Digital Guardian',
      description: 'Master the art of digital defense. Learn to protect systems, networks, and data from evolving cyber threats while building a career in one of today\'s most critical fields.',
      icon: Shield,
      gradient: 'bg-cyber-gradient',
      features: ['Ethical Hacking', 'Network Security', 'Incident Response', 'Compliance & Risk'],
      duration: '6 Months',
      level: 'Beginner to Advanced'
    },
    {
      id: 'fullstack',
      title: 'Full Stack Development',
      subtitle: 'Digital Architect',
      description: 'Build complete web applications from scratch. Master both frontend and backend technologies to create seamless, scalable digital experiences.',
      icon: Code,
      gradient: 'bg-fullstack-gradient',
      features: ['React & Node.js', 'Database Design', 'API Development', 'Cloud Deployment'],
      duration: '8 Months',
      level: 'Beginner to Professional'
    },
    {
      id: 'datascience',
      title: 'Data Science',
      subtitle: 'Insight Alchemist',
      description: 'Transform raw data into actionable insights. Master machine learning, statistical analysis, and predictive modeling to drive business decisions.',
      icon: BarChart3,
      gradient: 'bg-data-gradient',
      features: ['Machine Learning', 'Python & R', 'Statistical Analysis', 'AI Models'],
      duration: '10 Months',
      level: 'Intermediate to Expert'
    },
    {
      id: 'dataanalysis',
      title: 'Data Analysis',
      subtitle: 'Pattern Detective',
      description: 'Uncover hidden patterns and trends in data. Learn to visualize, interpret, and communicate data-driven stories that influence strategic decisions.',
      icon: Database,
      gradient: 'bg-data-gradient',
      features: ['SQL & Excel', 'Data Visualization', 'Business Intelligence', 'Reporting'],
      duration: '4 Months',
      level: 'Beginner to Intermediate'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-b from-blue-50/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full text-blue-700 text-sm font-medium mb-6">
            <Zap size={16} />
            Program Portals
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your Path to
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
              Tech Mastery
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each program is a carefully crafted journey designed to transform you from curious learner 
            to industry expert. Step through your chosen portal and begin your transformation.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className="portal-card group bg-white/70 backdrop-blur-sm border border-white/30 p-8 h-full"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 ${program.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 glow-azure`}>
                    <program.icon className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-blue-600 transition-colors duration-300">
                      {program.title}
                    </h3>
                    <p className="text-blue-600 font-medium">{program.subtitle}</p>
                  </div>
                </div>
                <ArrowRight className="text-muted-foreground group-hover:text-blue-600 group-hover:translate-x-2 transition-all duration-300" size={24} />
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {program.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {program.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Program Info */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <div>
                  <div className="text-sm text-muted-foreground">Duration</div>
                  <div className="font-semibold text-foreground">{program.duration}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Level</div>
                  <div className="font-semibold text-foreground">{program.level}</div>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold group-hover:shadow-lg transform group-hover:scale-[1.02] transition-all duration-300">
                Enter Portal
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center reveal bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Not Sure Which Path to Choose?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our expert counselors will help you identify the perfect program based on your interests, 
            goals, and current skill level.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            Get Personalized Guidance
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
