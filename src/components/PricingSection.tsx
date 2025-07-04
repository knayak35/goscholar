
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const PricingSection = () => {
  const pricingData = [
    { examBoard: "IGCSE", subject: "Extended Mathematics", priceUSD: 12 },
    { examBoard: "IGCSE", subject: "Additional Mathematics", priceUSD: 12 },
    { examBoard: "IGCSE", subject: "Physics", priceUSD: 12 },
    { examBoard: "IGCSE", subject: "Computer Science", priceUSD: 12 },
    { examBoard: "AS & A Level", subject: "Pure Mathematics", priceUSD: 13 },
    { examBoard: "AS & A Level", subject: "Physics", priceUSD: 13 },
    { examBoard: "AS & A Level", subject: "Computer Science", priceUSD: 13 },
    { examBoard: "AS & A Level", subject: "Further Mathematics", priceUSD: 17 },
  ];

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
        
        <div className="max-w-5xl mx-auto">
          <Card className="bg-white border-0 shadow-2xl rounded-3xl overflow-hidden">
            <CardHeader className="bg-cta-gradient text-white text-center py-8">
              <CardTitle className="text-3xl font-bold mb-2">
                1-on-1 Tutoring Sessions
              </CardTitle>
              <CardDescription className="text-white/90 text-lg">
                Expert tutoring for IGCSE and A Level STEM subjects
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold text-gray-900">Exam Board</TableHead>
                    <TableHead className="font-semibold text-gray-900">Subject</TableHead>
                    <TableHead className="text-center font-semibold text-gray-900">Price per Hour</TableHead>
                    <TableHead className="text-center font-semibold text-gray-900">4-Session Package</TableHead>
                    <TableHead className="text-center font-semibold text-gray-900">8-Session Package</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pricingData.map((item, index) => (
                    <TableRow key={index} className="hover:bg-gray-50/50">
                      <TableCell className="font-medium">{item.examBoard}</TableCell>
                      <TableCell>{item.subject}</TableCell>
                      <TableCell className="text-center">
                        <span className="text-2xl font-bold text-primary">${item.priceUSD}</span>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="text-xl font-semibold">${item.priceUSD * 4 - 5}</span>
                        <span className="block text-sm text-green-600">Save $5</span>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="text-xl font-semibold">${item.priceUSD * 8 - 15}</span>
                        <span className="block text-sm text-green-600">Save $15</span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
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
