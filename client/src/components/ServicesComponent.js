import geyser from "../assets/geyser.png";
import waterpurifer from "../assets/waterpurifer.png";
import airpurifer from "../assets/airpurifer.png";
import carpenter from "../assets/carpenter.jpeg";
import eletrician from "../assets/electrician.jpeg";
import plumber from "../assets/plumber.jpeg";
import ceiling from "../assets/ceilingpainting.jpeg";
import door from "../assets/doorpainting.jpeg";
import wall from "../assets/wallpainting.jpeg";
const ServiceCard = ({ image, title, price, alt }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className="p-4">
      <div className="overflow-hidden rounded-lg mb-4">
        <img
          src={image}
          alt={alt}
          className="w-full h-48 object-cover rounded-lg transform transition-transform hover:scale-105"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      {price && <p className="text-sm text-gray-600">Starts from ₹{price}</p>}
    </div>
  </div>
);

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-8">
    <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
    {subtitle && <p className="text-gray-600">{subtitle}</p>}
  </div>
);

const ServicesComponent = () => {
  const appliances = [
    {
      image: geyser,
      title: "Geyser Repair",
      price: "249",
      alt: "Geyser Repair",
    },
    {
      image: waterpurifer,
      title: "Water Purifier Repair",
      price: "349",
      alt: "Water Purifier Repair",
    },
    {
      image: airpurifer,
      title: "Air Purifier Repair",
      price: "449",
      alt: "Air Purifier Repair",
    },
  ];

  const paintingServices = [
    { image: wall, title: "Wall Painting", alt: "Wall Painting" },
    { image: door, title: "Door Painting", alt: "Door Painting" },
    { image: ceiling, title: "Ceiling Painting", alt: "Ceiling Painting" },
  ];

  const repairServices = [
    { image: carpenter, title: "Carpenter", alt: "Carpenter Services" },
    { image: eletrician, title: "Electrician", alt: "Electrical Services" },
    { image: plumber, title: "Plumber", alt: "Plumbing Services" },
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Services Provided
        </h1>

        <div className="space-y-16">
          {/* Appliances Section */}
          <section>
            <SectionHeader
              title="Appliances"
              subtitle="Servicing, Repair, Installation & Uninstallation"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {appliances.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </section>

          {/* Painting Section */}
          <section>
            <SectionHeader
              title="Home Painting"
              subtitle="Paint your Home, offices"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paintingServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </section>

          {/* Repair Section */}
          <section>
            <SectionHeader
              title="Home Repair"
              subtitle="Repair any sort of building Destruction"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repairServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
