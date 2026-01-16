"use client";

import { useState, useEffect } from "react";
import { FaBolt, FaTag, FaFire } from "react-icons/fa";

const ComingSoon = ({
  eventName = "Flash Sale",
  eventDate = "2025-02-01T00:00:00",
  eventType = "flash", // "flash", "blackfriday", "sale"
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(eventDate).getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  const getEventIcon = () => {
    switch (eventType) {
      case "flash":
        return <FaBolt className="text-yellow-400 text-4xl" />;
      case "blackfriday":
        return <FaTag className="text-red-500 text-4xl" />;
      default:
        return <FaFire className="text-orange-500 text-4xl" />;
    }
  };

  const getGradient = () => {
    switch (eventType) {
      case "flash":
        return "from-yellow-400 via-orange-500 to-red-500";
      case "blackfriday":
        return "from-gray-900 via-red-600 to-black";
      default:
        return "from-purple-500 via-pink-500 to-red-500";
    }
  };

  return (
    <main className="min-h-screen bg-[#f7f1e8] text-[#4a4741] flex items-center justify-center px-4 py-10">
      <div className="max-w-4xl w-full">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Animated gradient header */}
          <div
            className={`relative h-2 bg-linear-to-r ${getGradient()} animate-pulse`}
          ></div>

          <div className="p-8 md:p-12 text-center">
            {/* Icon */}
            <div className="flex justify-center mb-6 animate-bounce">
              {getEventIcon()}
            </div>

            {/* Event Name */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-linear-to-r from-[#4a4741] to-[#6b6560] bg-clip-text text-transparent">
              {eventName}
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Something Exciting is Coming Soon!
            </p>

            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-4 md:gap-6 max-w-2xl mx-auto mb-8">
              {/* Days */}
              <div className="bg-[#f7f1e8] rounded-2xl p-4 md:p-6 transform hover:scale-105 transition-transform">
                <div className="text-3xl md:text-5xl font-bold text-[#4a4741] mb-2">
                  {String(timeLeft.days).padStart(2, "0")}
                </div>
                <div className="text-xs md:text-sm text-gray-600 uppercase tracking-wider">
                  Days
                </div>
              </div>

              {/* Hours */}
              <div className="bg-[#f7f1e8] rounded-2xl p-4 md:p-6 transform hover:scale-105 transition-transform">
                <div className="text-3xl md:text-5xl font-bold text-[#4a4741] mb-2">
                  {String(timeLeft.hours).padStart(2, "0")}
                </div>
                <div className="text-xs md:text-sm text-gray-600 uppercase tracking-wider">
                  Hours
                </div>
              </div>

              {/* Minutes */}
              <div className="bg-[#f7f1e8] rounded-2xl p-4 md:p-6 transform hover:scale-105 transition-transform">
                <div className="text-3xl md:text-5xl font-bold text-[#4a4741] mb-2">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </div>
                <div className="text-xs md:text-sm text-gray-600 uppercase tracking-wider">
                  Minutes
                </div>
              </div>

              {/* Seconds */}
              <div className="bg-[#f7f1e8] rounded-2xl p-4 md:p-6 transform hover:scale-105 transition-transform">
                <div className="text-3xl md:text-5xl font-bold text-[#4a4741] mb-2">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </div>
                <div className="text-xs md:text-sm text-gray-600 uppercase tracking-wider">
                  Seconds
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-[#f7f1e8] rounded-xl p-6 mb-6 max-w-2xl mx-auto">
              <p className="text-gray-700 text-lg">
                Get ready for incredible deals and exclusive offers! Mark your
                calendar and be the first to shop when we go live.
              </p>
            </div>

            {/* Notify Me Section */}
            <div className="max-w-md mx-auto">
              <form
                className="flex gap-3 flex-col sm:flex-row"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! We'll notify you when the sale starts.");
                  e.target.reset();
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 border-2 border-[#4a4741] rounded-lg focus:outline-none focus:border-[#3b3934] bg-white"
                />
                <button
                  type="submit"
                  className="bg-[#4a4741] text-white px-6 py-3 rounded-lg hover:bg-[#3b3934] transition-all font-semibold whitespace-nowrap"
                >
                  Notify Me
                </button>
              </form>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-3xl mx-auto">
              <div className="bg-[#f7f1e8] rounded-lg p-4">
                <div className="text-2xl mb-2">🎁</div>
                <h3 className="font-semibold text-[#4a4741] mb-1">
                  Exclusive Deals
                </h3>
                <p className="text-sm text-gray-600">
                  Up to 70% off on selected items
                </p>
              </div>

              <div className="bg-[#f7f1e8] rounded-lg p-4">
                <div className="text-2xl mb-2">🚚</div>
                <h3 className="font-semibold text-[#4a4741] mb-1">
                  Free Shipping
                </h3>
                <p className="text-sm text-gray-600">
                  On all orders during the sale
                </p>
              </div>

              <div className="bg-[#f7f1e8] rounded-lg p-4">
                <div className="text-2xl mb-2">⚡</div>
                <h3 className="font-semibold text-[#4a4741] mb-1">
                  Limited Time
                </h3>
                <p className="text-sm text-gray-600">
                  Don't miss out on amazing offers
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="text-center text-gray-600 mt-6 text-sm">
          Follow us on social media for sneak peeks and exclusive updates!
        </p>
      </div>
    </main>
  );
};

export default ComingSoon;
