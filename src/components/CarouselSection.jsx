import { useState } from "react";
import { motion } from "framer-motion";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const destinations = [
  {
    image:
      "https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    country: "UK",
    description: "Strong research & vibrant student life",
  },
  {
    image:
      "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    country: "Australia",
    description: "Laid-back lifestyle & top research facilities",
  },
  {
    image:
      "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    country: "United States",
    description: "Affordable education & multicultural vibe",
  },
  {
    image:
      "https://images.pexels.com/photos/1619311/pexels-photo-1619311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    country: "Canada",
    description: "Friendly environment & great work opportunities",
  },
  {
    image:
      "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    country: "Germany",
    description: "Tuition-free education & strong engineering programs",
  },
  {
    image:
      "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    country: "New Zealand",
    description: "Scenic beauty & relaxed student life",
  },
  {
    image:
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    country: "France",
    description: "Rich culture, food & prestigious universities",
  },
  {
    image:
      "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    country: "Netherlands",
    description: "Innovative teaching & international student friendly",
  },
  {
    image:
      "https://images.pexels.com/photos/356830/pexels-photo-356830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    country: "Japan",
    description: "Technological advancement & cultural immersion",
  },
  {
    image:
      "https://images.pexels.com/photos/3568307/pexels-photo-3568307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    country: "Sweden",
    description: "Progressive society & high-quality education",
  },
];

const CarouselSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevIndex =
    (activeIndex - 1 + destinations.length) % destinations.length;
  const nextIndex = (activeIndex + 1) % destinations.length;

  const handleNext = () => {
    setActiveIndex(nextIndex);
  };

  const handlePrev = () => {
    setActiveIndex(prevIndex);
  };

  return (
    <div className="relative w-full flex flex-col items-center text-center py-6 poppins-semibold ">
      <h2 className="text-3xl font-bold mb-2">
        Find Your <span className="text-red-500">Perfect</span> Destination
      </h2>
      <p className="text-gray-600 mb-6 max-w-xl">
        Consider language, culture, cost of living, climate, and safety to
        choose the right study abroad destination for you.
      </p>

      <div className="relative flex w-[70%] max-lg:w-full justify-center items-center h-[60vh]">
        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="absolute left-5 z-10 bg-white border border-red-500 p-3 rounded-full shadow-lg"
        >
          <IoArrowBack size={24} className="text-red-500" />
        </button>

        <div className="relative w-[100%] h-[60vh] flex justify-center items-center gap-20 overflow-hidden">
          {[prevIndex, activeIndex, nextIndex].map((idx, i) => {
            const isActive = idx === activeIndex;
            const offset = i - 1;
            const isLeft = (idx + 1) % destinations.length === activeIndex;
            const isRight =
              (idx - 1 + destinations.length) % destinations.length ===
              activeIndex;

            return (
              //Card
              <motion.div
                key={idx}
                animate={{
                  x: offset * 360,
                  rotate: isActive ? 0 : isLeft ? -10 : isRight ? 10 : 0,
                  y: isActive ? -28 : 0,
                }}
                transition={{ duration: 0.5 }}
                className="absolute h-[40vh] w-[300px] bg-white rounded-lg shadow-md overflow-hidden p-2"
              >
                <img
                  src={destinations[idx]?.image}
                  alt={destinations[idx]?.country}
                  className="w-full h-[32vh] object-cover rounded-lg"
                />
                <div className="px-4 py-2 h-auto flex flex-col justify-center items-center">
                  <p className="text-lg font-semibold absolute top-[200px] text-white">
                    {destinations[idx]?.country}
                  </p>
                  <p className="text-sm text-gray-600">
                    {destinations[idx]?.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="absolute right-5 z-10 bg-white p-3 border border-red-500 rounded-full shadow-lg"
        >
          <IoArrowForward size={24} className="text-red-500" />
        </button>
      </div>

      <button className="mt-6 px-6 py-2 border-2  border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition">
        Explore All Destinations
      </button>
    </div>
  );
};

export default CarouselSection;
