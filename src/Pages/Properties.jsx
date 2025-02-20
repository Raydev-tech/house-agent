import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa"; // Import ArrowRight from react-icons

const Properties = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const properties = [
    {
      id: 1,
      image: "https://i.pinimg.com/236x/72/e0/41/72e041cdc97711fd10e5352551fe7d7d.jpg", 
      name: "Luxury Villa",
      location: "Los Angeles, CA",
      price: "$599,000",
      details: ["4 Bedrooms", "3 Bathrooms", "2 Car Garage"],
      href: "https://i.pinimg.com/236x/72/e0/41/72e041cdc97711fd10e5352551fe7d7d.jpg",
    },
    {
      id: 2,
      image: "https://i.pinimg.com/474x/53/53/cb/5353cbcb1d11d9b9260e6df131206cff.jpg",
      name: "Modern Apartment",
      location: "New York, NY",
      price: "$899,000",
      details: ["3 Bedrooms", "2 Bathrooms", "1 Car Garage"],
      href: "https://i.pinimg.com/474x/53/53/cb/5353cbcb1d11d9b9260e6df131206cff.jpg",
    },
    {
      id: 3,
      image: "https://i.pinimg.com/236x/eb/ba/71/ebba71bef20faff44dc791e91e410808.jpg",
      name: "Beach House",
      location: "Miami, FL",
      price: "$1,200,000",
      details: ["5 Bedrooms", "4 Bathrooms", "3 Car Garage"],
      href: "https://i.pinimg.com/236x/eb/ba/71/ebba71bef20faff44dc791e91e410808.jpg",
    },
    {
      id: 4,
      image: "https://i.pinimg.com/474x/07/f7/ad/07f7ad27fe1712f233e23e76142bfdb9.jpg",
      name: "City Loft",
      location: "Chicago, IL",
      price: "$750,000",
      details: ["2 Bedrooms", "1 Bathroom", "1 Car Garage"],
      href: "https://i.pinimg.com/474x/07/f7/ad/07f7ad27fe1712f233e23e76142bfdb9.jpg",
    },
    {
        id: 5,
        image: "https://i.pinimg.com/236x/d2/6e/ec/d26eec38e588b85ae7b68042aeb4f993.jpg",
        name: "Waterfront Condo",
        location: "456 Ocean Drive, Miami, FL",
        price: "$1,800,000",
        details: ["3 Bedrooms", "2 Bathroom", "2 Car Garage"],
        href: "https://i.pinimg.com/236x/d2/6e/ec/d26eec38e588b85ae7b68042aeb4f993.jpg",
    },
    {
        id: 6,
        image: "https://i.pinimg.com/236x/e6/22/d9/e622d95ade1979bffb5af0501a7961b3.jpg",
        name: "Luxury Penthouse",
        location: "123 Park Avenue, New York, NY",
        price: "$2,500,000",
        details: ["6 Bedrooms", "4 Bathroom", "3 Car Garage"],
        href: "https://i.pinimg.com/236x/e6/22/d9/e622d95ade1979bffb5af0501a7961b3.jpg",
    },
  ];

  return (
    <section className="ml-8 border-t bg-gray-50/50 py-20">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-3xl font-bold">Recent Properties</h2>
          <p className="mt-2 text-muted-foreground">Browse our latest property listings</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {properties.map((property) => (
            <a href={property.href} key={property.id} className="group">
              <div
                data-aos="fade-up"
                data-aos-delay={`${property.id * 100}`}
                className="overflow-hidden border rounded-lg shadow-lg"
              >
                <div className="grid md:grid-cols-2">
                  <div className="aspect-[4/3] relative">
                    <img
                      src={property.image}
                      alt={property.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{property.name}</h3>
                    <p className="text-sm text-muted-foreground">{property.location}</p>
                    <div className="mt-4">
                      <span className="text-lg font-bold text-primary">{property.price}</span>
                      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                        {property.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded flex items-center justify-center">
                        View Details
                        <FaArrowRight className="ml-2 h-4 w-4" /> {/* Using the ArrowRight icon here */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
