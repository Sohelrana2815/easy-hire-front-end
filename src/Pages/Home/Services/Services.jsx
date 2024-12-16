import { useEffect, useState } from "react";
import "./card.css";
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
        <h2 className="text-3xl lg:text-5xl font-EbGaramond text-[#005025] font-medium pb-10 p-4 ">
          Trending Services
        </h2>
      </div>
      {/* Responsive Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-3 max-w-screen-2xl mx-auto gap-6 p-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="card-container shadow-2xl cursor-pointer group"
          >
            {" "}
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 group-hover:scale-105">
              {" "}
              {/* Image */}{" "}
              <img
                src={service.image}
                alt="Card Background"
                className="w-full h-full object-cover"
              />{" "}
              {/* Overlay */}{" "}
              <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-50"></div>{" "}
              {/* Text */}{" "}
              <div className="absolute bottom-4 left-4 right-4 bg-opacity-75 bg-black text-white px-4 py-2 rounded-md transition-transform duration-300 transform group-hover:translate-y-0">
                {" "}
                <h3 className="text-lg md:text-xl font-semibold">
                  {" "}
                  {service.title}{" "}
                </h3>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
