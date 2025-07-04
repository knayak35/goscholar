
import { CheckCircle } from "lucide-react";

const TrustBar = () => {
  const trustPoints = [
    "100+ students taught",
    "Cambridge & Edexcel Syllabus",
    "Flexible scheduling",
    "Proven grade improvements"
  ];

  return (
    <section className="bg-white py-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-center space-x-2 text-gray-700">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="font-medium">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
