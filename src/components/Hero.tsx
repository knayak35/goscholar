
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-hero-gradient section-padding overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Master Your <span className="text-primary">IGCSE & A Levels</span> with Expert 1-on-1 Tutoring
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Personalized lessons. International curriculum. Proven results. 
              Join 100+ students who've achieved their dream grades with GoScholar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-primary animate-glow">
                Book a Free Trial
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4 rounded-xl transition-all duration-300">
                View Subjects
              </Button>
            </div>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
                alt="Student learning online"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple rounded-full animate-bounce opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full animate-pulse opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
