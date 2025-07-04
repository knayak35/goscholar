
import { Button } from "@/components/ui/button";

const CTABanner = () => {
  return (
    <section className="bg-cta-gradient py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to boost your grades?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join hundreds of students who've transformed their academic performance with GoScholar.
        </p>
        <Button className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
          Book Your Free Trial Today
        </Button>
      </div>
    </section>
  );
};

export default CTABanner;
