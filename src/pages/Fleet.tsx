
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import cadillacEscalade from '@/assets/Cadillac-Escalade(5).jpg';
import chevroletSuburban from '@/assets/CHEVROLET_Suburban(3).jpg';

const vehicles = [
  {
    id: 1,
    name: 'Cadillac Escalade',
    image: cadillacEscalade,
    description: 'Dynamic 6.2-liter V8 engine with Dynamic Fuel Control System. 22-inch 14-spoke aluminum wheels with a glossy silver finish. Electrically adjustable 10-way driver and passenger front seats with heating feature.',
    capacity: '7 passengers',
    features: [
      'Premium Leather Interior',
      'Heated and Ventilated Seats',
      'Panoramic Sunroof',
      'Premium Sound System',
      'WiFi Hotspot',
      'Advanced Safety Features',
      'LED Ambient Lighting',
      'Power-Folding Third Row'
    ]
  },
  {
    id: 2,
    name: 'Chevrolet Suburban',
    image: chevroletSuburban,
    description: 'A powerful SUV designed to take your driving experience to new heights. Equipped with a 6.2-liter V8 engine with 420 horsepower. Experience confidence in every maneuver with advanced features.',
    capacity: '8 passengers',
    features: [
      'Spacious Interior',
      'Powerful V8 Engine',
      'Entertainment System with Multiple Screens',
      'Smart Storage Solutions',
      'Tri-Zone Climate Control',
      'Head-Up Display',
      'Wireless Phone Charging',
      'Apple CarPlay & Android Auto'
    ]
  }
];

const Fleet = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-luxury-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">
              Our <span className="gold-text">Luxury Fleet</span>
            </h1>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Experience exceptional comfort and style with our premium vehicles. Each car is meticulously maintained and equipped with top-of-the-line features.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {vehicles.map((vehicle, index) => (
              <div 
                key={vehicle.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-xl">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-serif font-bold mb-4">{vehicle.name}</h2>
                  <p className="text-gray-700 mb-6">{vehicle.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <svg className="h-6 w-6 text-luxury-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="font-medium">Capacity: {vehicle.capacity}</span>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4 gold-text">Features:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {vehicle.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-luxury-primary mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    className="bg-luxury-primary hover:bg-luxury-primary/90 text-black"
                    asChild
                  >
                    <Link to="/book">Book This Vehicle</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Ready to Experience <span className="gold-text">Luxury Travel</span>?
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Book one of our premium vehicles for your next trip and enjoy the comfort, style, and professional service that LIMO MO is known for.
          </p>
          <Button 
            size="lg"
            className="bg-luxury-primary hover:bg-luxury-primary/90 text-black font-medium"
            asChild
          >
            <Link to="/book">Book Now</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Fleet;
