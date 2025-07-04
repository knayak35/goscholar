
import { Calculator, Atom, Laptop } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SubjectsSection = () => {
  const subjects = [
    {
      icon: Calculator,
      title: "IGCSE Mathematics",
      description: "Master core and extended mathematics with comprehensive problem-solving techniques.",
      levels: ["Core", "Extended"]
    },
    {
      icon: Calculator,
      title: "A Level Mathematics",
      description: "Advanced calculus, statistics, and mechanics for university preparation.",
      levels: ["AS", "A2"]
    },
    {
      icon: Atom,
      title: "IGCSE Physics",
      description: "Fundamental physics concepts with practical applications and exam strategies.",
      levels: ["Core", "Extended"]
    },
    {
      icon: Atom,
      title: "A Level Physics",
      description: "Advanced physics covering mechanics, electricity, and modern physics.",
      levels: ["AS", "A2"]
    },
    {
      icon: Atom,
      title: "IGCSE Chemistry",
      description: "Chemical principles, reactions, and laboratory techniques for IGCSE success.",
      levels: ["Core", "Extended"]
    },
    {
      icon: Laptop,
      title: "Computer Science",
      description: "Programming, algorithms, and computational thinking for digital excellence.",
      levels: ["IGCSE", "A Level"]
    }
  ];

  return (
    <section id="subjects" className="bg-section-gradient section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Subjects We Cover
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert tutoring across all major IGCSE and A Level STEM subjects, 
            tailored to Cambridge and Edexcel syllabi.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => (
            <Card key={index} className="card-hover bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <subject.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-center text-gray-900">
                  {subject.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4 text-base leading-relaxed">
                  {subject.description}
                </CardDescription>
                <div className="flex justify-center space-x-2">
                  {subject.levels.map((level, idx) => (
                    <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {level}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubjectsSection;
