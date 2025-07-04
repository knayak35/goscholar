
import { Calendar, Users, BookOpen, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Book a Free Trial",
      description: "Schedule your complimentary assessment session at your convenience."
    },
    {
      icon: Users,
      title: "Get Matched",
      description: "We pair you with an expert tutor who specializes in your subjects."
    },
    {
      icon: BookOpen,
      title: "Start Learning",
      description: "Begin personalized 1-on-1 lessons tailored to your learning style."
    },
    {
      icon: TrendingUp,
      title: "Track Progress",
      description: "Monitor your improvement with regular assessments and feedback."
    }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started with GoScholar in four simple steps and begin your journey to academic excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative">
                <div className="w-20 h-20 bg-cta-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
