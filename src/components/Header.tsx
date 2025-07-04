
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-cta-gradient rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="text-2xl font-bold text-primary-dark">GoScholar</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('subjects')}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Subjects
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Reviews
            </button>
            <Button className="btn-primary">
              Book Free Trial
            </Button>
          </nav>
          
          <div className="md:hidden">
            <Button className="btn-primary text-sm px-4 py-2">
              Book Trial
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
