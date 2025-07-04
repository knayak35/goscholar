
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-section-gradient section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transparent, Affordable Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quality education shouldn't break the bank. Choose the package that works best for you.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border-0 shadow-2xl rounded-3xl overflow-hidden">
            <CardHeader className="bg-cta-gradient text-white text-center py-8">
              <CardTitle className="text-3xl font-bold mb-2">
                1-on-1 Tutoring Sessions
              </CardTitle>
              <CardDescription className="text-white/90 text-lg">
                Personalized learning at competitive rates
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-100">
                      <th className="text-left py-4 px-4 font-semibold text-gray-900">Subject Level</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900">Per Hour</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900">4-Session Package</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900">8-Session Package</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                      <td className="py-6 px-4 font-medium">IGCSE</td>
                      <td className="text-center py-6 px-4 text-2xl font-bold text-primary">$25</td>
                      <td className="text-center py-6 px-4">
                        <span className="text-xl font-semibold">$90</span>
                        <span className="block text-sm text-green-600">Save $10</span>
                      </td>
                      <td className="text-center py-6 px-4">
                        <span className="text-xl font-semibold">$170</span>
                        <span className="block text-sm text-green-600">Save $30</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-6 px-4 font-medium">A Level</td>
                      <td className="text-center py-6 px-4 text-2xl font-bold text-primary">$30</td>
                      <td className="text-center py-6 px-4">
                        <span className="text-xl font-semibold">$110</span>
                        <span className="block text-sm text-green-600">Save $10</span>
                      </td>
                      <td className="text-center py-6 px-4">
                        <span className="text-xl font-semibold">$210</span>
                        <span className="block text-sm text-green-600">Save $30</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-6">
                  No hidden fees • Flexible scheduling • Cancel anytime
                </p>
                <Button className="btn-primary">
                  Start with Free Trial
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
