import { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/service.json")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl mx-auto mt-40">
        <h2 className="text-3xl lg:text-5xl font-EbGaramond text-[#31795A] font-medium pb-10">
          Trending Services
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-3 max-w-screen-2xl mx-auto gap-6">
        {services.map((service) => (
          <div key={service.id} className="">
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              {/* Image */}
              <img
                src={service.image}
                alt="Card Background"
                className="w-full h-full object-cover"
              />
              {/* Text */}
              <div className="absolute bottom-4 left-4 right-4 bg-opacity-75 bg-black text-white px-4 py-2 rounded-md">
                <h3 className="text-lg md:text-xl font-semibold">
                  {service.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
