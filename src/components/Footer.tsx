
const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-cta-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">G</span>
              </div>
              <span className="text-xl font-bold text-gray-900">GoScholar</span>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-md">
              Expert IGCSE and A Level STEM tutoring with personalized 1-on-1 sessions. 
              Your path to academic excellence starts here.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#subjects" className="text-gray-600 hover:text-primary transition-colors">Subjects</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">Reviews</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600">
            © 2024 GoScholar. All rights reserved. | Empowering students to achieve their academic dreams.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
