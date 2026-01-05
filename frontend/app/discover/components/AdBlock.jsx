// AdBlock.jsx - Enhanced with better responsiveness
import MyBtn from "@/app/components/MyBtn";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AdBlock = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const Ads = [
    {
      id: 1,
      title: "Flash Sales",
      description: "Get up to 90% off",
      image: "/ad1.png",
    },
    {
      id: 2,
      title: "Awesome Deals",
      description: "Get the chance to win a Bag",
      image: "/ad3.jpg",
    },
    {
      id: 3,
      title: "Don't miss out",
      description: "₦500 off your first order",
      image: "/ad2.jpg",
    },
    {
      id: 4,
      title: "Fast Delivery",
      description: "Get your order delivered in 24 hours",
      image: "/delivery.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % Ads.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setSelectedIndex(index);
  };

  const goToPrevious = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? Ads.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % Ads.length);
  };

  return (
    <>
      {/* Mobile Version */}
      <div className="w-full px-3 sm:px-4 py-4 sm:py-6 md:hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg group">
            <div className="relative h-48 sm:h-64">
              {Ads.map((ad, idx) => (
                <div
                  key={ad.id}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    selectedIndex === idx ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    backgroundImage: `url(${ad.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent flex flex-col justify-center px-6 sm:px-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">
                      {ad.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/90 mb-4 sm:mb-6 max-w-md">
                      {ad.description}
                    </p>
                    <MyBtn
                      to={"/flash-sales"}
                      classname="bg-white text-[#4a4741] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full w-fit font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base shadow-lg"
                    >
                      Shop Now
                    </MyBtn>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
              {Ads.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                    selectedIndex === idx
                      ? "w-6 sm:w-8 bg-white"
                      : "w-1.5 sm:w-2 bg-white/50 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden md:block w-full px-6 py-6 lg:py-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <div className="relative h-80 lg:h-96">
              {Ads.map((ad, idx) => (
                <div
                  key={ad.id}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    selectedIndex === idx
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105"
                  }`}
                  style={{
                    backgroundImage: `url(${ad.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent flex flex-col justify-center px-12 lg:px-16">
                    <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 transform transition-all duration-700 delay-100">
                      {ad.title}
                    </h3>
                    <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-lg transform transition-all duration-700 delay-200">
                      {ad.description}
                    </p>
                    <MyBtn
                      to={"/flash-sales"}
                      classname="bg-white text-[#4a4741] px-8 py-3.5 rounded-full w-fit font-semibold hover:bg-gray-100 hover:shadow-2xl transition-all transform hover:scale-105 text-base shadow-xl"
                    >
                      Shop Now
                    </MyBtn>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {Ads.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    selectedIndex === idx
                      ? "w-12 bg-white shadow-lg"
                      : "w-2 bg-white/50 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdBlock;
