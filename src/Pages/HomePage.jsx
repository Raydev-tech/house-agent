import { motion } from "framer-motion";
import React, { useState } from "react";
import Properties from "./Properties";
import ReadyToFindHome from "./Cta";
import AOS from "aos";
import "aos/dist/aos.css";
import { Phone, Mail, MapPin } from "lucide-react";

const testimonials = [
    {
      id: 1,
      name: "John Smith",
      image: "https://i.pinimg.com/236x/c9/ca/61/c9ca6182b305f405169ff02ced65cb5b.jpg?height=100&width=100",
      testimonial:
        "Jane was incredible throughout the entire process. Her knowledge of the market and negotiation skills helped us secure our dream home.",
      rating: 5,
      apartmentImage: "https://i.pinimg.com/236x/74/c8/a7/74c8a72db3c43efa8dd620c58f8879e9.jpg", // Apartment image
      apartmentLink: "/apartments/john-smith",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      image: "https://i.pinimg.com/236x/78/3b/99/783b994e475f6c0b9df1c863047334a4.jpg?height=100&width=100",
      testimonial:
        "Working with Jane was a pleasure. She was always available to answer our questions and made selling our home stress-free.",
      rating: 5,
      apartmentImage: "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15",
      apartmentLink: "/apartments/sarah-johnson",
    },
    {
      id: 3,
      name: "Jessica Alexander",
      image: "https://i.pinimg.com/236x/90/08/b3/9008b389409ea2ac4f572fb1fcf3c7d4.jpg?height=100&width=100",
      testimonial:
        "Jane's expertise in luxury properties is unmatched. She found us the perfect penthouse with stunning views of the city.",
      rating: 5,
      apartmentImage: "https://i.pinimg.com/236x/e6/22/d9/e622d95ade1979bffb5af0501a7961b3.jpg",
      apartmentLink: "/apartments/jessica-alexander",
    },
];
export function Testimonials() {
    useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);
}
export function AgentProfile() {
    useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);
}

const HomePage = () => {
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gray-100">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
      {/* Left Side: Text & Filters */}
      <div className="text-center md:text-left" data-aos="fade-right">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Let's Find a Home That's Perfect for You
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Search confidently with our expert-verified property listings.
        </p>

        {/* Search Filters */}
        <div 
          className="mx-auto mt-10 max-w-3xl" 
          data-aos="fade-up" 
          data-aos-delay="300"
        >
          <div className="grid gap-4 rounded-lg bg-white p-4 shadow-lg md:grid-cols-4">
            <select className="p-2 border rounded" value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
              <option value="">Property Type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
            </select>
            <select className="p-2 border rounded" value={location} onChange={(e) => setLocation(e.target.value)}>
              <option value="">Location</option>
              <option value="ny">New York</option>
              <option value="la">Los Angeles</option>
              <option value="ch">Chicago</option>
            </select>
            <select className="p-2 border rounded" value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
              <option value="">Price Range</option>
              <option value="100k">$100k - $200k</option>
              <option value="200k">$200k - $300k</option>
              <option value="300k">$300k+</option>
            </select>
            <button className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Right Side: Bigger Image */}
      <div className="hidden md:flex justify-center" data-aos="fade-left">
        <img
          src="https://i.pinimg.com/236x/4f/fe/25/4ffe251ce55ca9863d45e56a75ccb65f.jpg"
          alt="Luxury Home"
          className="rounded-lg shadow-lg w-[400px] h-auto md:w-[500px]"
        />
      </div>
    </div>
  </div>
</section>


      {/* Features Section */}
<section id="features" className="border-t bg-gray-50/50 py-20">
  <div className="container">
    <div className="grid gap-8 md:grid-cols-4">
      {[
        { icon: "🏠", title: "Wide Range of Properties", description: "Browse through thousands of properties that match your needs" },
        { icon: "📍", title: "Prime Locations", description: "Find properties in the most sought-after neighborhoods" },
        { icon: "🏢", title: "Property Management", description: "Professional property management services available" },
        { icon: "🛡️", title: "Trusted Platform", description: "Verified listings and secure transactions guaranteed" }
      ].map((feature, index) => (
        <div 
          key={index} 
          className="text-center"
          data-aos="fade-up"
          data-aos-delay={index * 200} // Staggered animation
        >
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <span className="text-xl">{feature.icon}</span>
          </div>
          <h3 className="mb-2 font-semibold">{feature.title}</h3>
          <p className="text-sm text-muted-foreground">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Featured Properties Section */}
<section id="properties" className="ml-10 py-20">
  <div className="container">
    <div className="mb-12">
      <h2 className="text-3xl font-bold">Featured Properties</h2>
      <p className="mt-4 text-muted-foreground">Handpicked properties that you might love</p>
    </div>
    
    <div className="grid gap-6 md:grid-cols-3">
      {[
        { 
          img: "https://i.pinimg.com/236x/3a/42/dc/3a42dcfa155606be36eae0a7eb5f4b5f.jpg", 
          title: "Modern Apartment", 
          location: "New York, NY", 
          price: "$299,000" 
        },
        { 
          img: "https://i.pinimg.com/236x/26/6b/1c/266b1c84cb81fcb1b0f5803d27d56298.jpg", 
          title: "Luxury Condo", 
          location: "Los Angeles, CA", 
          price: "$450,000" 
        },
        { 
          img: "https://i.pinimg.com/236x/15/cf/b0/15cfb0bda1cf040528cba5f2f32da57e.jpg", 
          title: "Cozy House", 
          location: "Chicago, IL", 
          price: "$350,000" 
        }
      ].map((property, index) => (
        <div 
          key={index} 
          className="overflow-hidden border rounded-lg shadow-lg"
          data-aos="fade-up"
          data-aos-delay={index * 200} // Staggered animation
        >
          <div className="w-full h-48 flex items-center justify-center">
            <img src={property.img} alt={property.title} className="w-full h-full object-cover" />
          </div>
          <div className="p-4">
            <h3 className="font-semibold">{property.title}</h3>
            <p className="text-sm text-muted-foreground">{property.location}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-bold text-primary">{property.price}</span>
              <button className="px-4 py-2 border rounded text-primary hover:bg-primary/10 transition">View Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    <Properties />
    <ReadyToFindHome />
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              data-aos="fade-up"
              data-aos-delay={index * 200} // Staggered animation
              className="bg-white p-6 rounded-lg shadow-md"
            >
              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-yellow-500">{"★".repeat(testimonial.rating)}</p>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="mt-4 text-gray-600">{testimonial.testimonial}</p>

              {/* Apartment Image with Link */}
              <a href={testimonial.apartmentLink} target="_blank" rel="noopener noreferrer">
                <img
                  src={testimonial.apartmentImage}
                  alt={`Apartment of ${testimonial.name}`}
                  className="w-full h-48 object-cover rounded-lg shadow-lg mt-4 transition transform hover:scale-105"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
    <div
  className="bg-white p-6 rounded-lg shadow-md"
  data-aos="fade-up" // Animation on scroll
>
  <div className="grid md:grid-cols-2 gap-8">
    {/* Left Side: Agent Details */}
    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
      <img
        src="https://i.pinimg.com/236x/23/5c/f1/235cf199f0bba25ebd438ad0f68054bf.jpg"
        alt="Jane Doe"
        className="w-40 h-40 rounded-full object-cover shadow-lg"
      />
      <div>
        <h1 className="text-3xl font-bold mb-2">Jane Doe</h1>
        <p className="text-gray-600 mb-4">Luxury Real Estate Specialist</p>

        {/* Contact Info */}
        <div className="space-y-2">
          <div className="flex items-center">
            <Phone className="w-5 h-5 mr-2 text-blue-600" />
            <span>(123) 456-7890</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-5 h-5 mr-2 text-blue-600" />
            <span>jane.doe@realestate.com</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-blue-600" />
            <span>New York City, NY</span>
          </div>
        </div>
      </div>
    </div>

    {/* Right Side: Contact Form */}
    <div className="bg-gray-100 p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
      <h2 className="text-xl font-semibold mb-4">Contact Jane</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full p-2 border rounded"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>

  {/* About Section */}
  <div className="mt-6" data-aos="fade-up" data-aos-delay="300">
    <h2 className="text-xl font-semibold mb-2">About Me</h2>
    <p className="text-gray-700">
      With over 15 years of experience in the luxury real estate market, I specialize in helping clients find
      their dream homes in the most prestigious neighborhoods of New York City. My dedication to personalized
      service and attention to detail ensures a smooth and successful transaction for every client.
    </p>
  </div>
</div>

    </main>
  );
};

export default HomePage;
