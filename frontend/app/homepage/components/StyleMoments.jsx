import LightLogo from "@/app/components/LightLogo";
import MyBtn from "@/app/components/MyBtn";
import Image from "next/image";
import { useState } from "react";

const StyleMoments = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [border, setBorder] = useState(0);
  const [moments, setMoments] = useState([
    {
      id: 1,
      title: "Starting Her Day",
      quote:
        "Every outfit from ELEGANCE+ gives me that 'I’m ready to win' energy.",
      author: "Chiamaka B.",
      role: "ELEGANCE+ Woman",
      img: "/start-ur-day.png",
      overlay: "/20260121_223014.png",
    },
    {
      id: 2,
      title: "Stepping Out",
      quote: "Wearing this, I don’t just feel dressed—I feel defined",
      author: "Ugochi M.",
      role: "ELEGANCE+ Muse",
      img: "/shoot-2.png",
      overlay: "/20260121_222103.png",
    },
    {
      id: 3,
      title: "Weathering the Mood",
      quote:
        "The comfort, the fit, the compliments—I never knew clothing could feel like this.",
      author: "Ada O.",
      role: "ELEGANCE+ Loyalist",
      img: "/mood.jpg",
      overlay: "/20260121_223255.png",
    },
    {
      id: 4,
      title: " Power in the Pause",
      quote:
        "It's not just fashion. It's how I reset, recharge, and remind myself who I am..",
      author: "Lena M.",
      role: " ELEGANCE+ Muse",
      img: "/shoot-3.png",
      overlay: "/20260121_223909.png",
    },
  ]);
  const handleclick = (index) => {
    setCurrentIndex(index);
    setBorder(index);
  };
  return (
    <div id="style" className="text-[#4a4741] md:px-28">
      <div className="flex flex-col gap-5 items-start  px-5">
        <p className="font-semibold text-2xl md:text-3xl md:font-normal">
          Form meets Fashion
        </p>
        <div className="flex flex-col gap-5 md:flex md:flex-row md:justify-between md:pb-20">
          <h1 className="text-4xl font-light md:w-[60%] md:text-7xl md:leading-20">
            Effortless elegance, designed to move
            <span className="slant md:ml-5">with you.</span>
          </h1>
          <div className="flex flex-col gap-5 md:w-[40%] md:flex md:flex-col md:items-start md:gap-5">
            <p className="text-sm font-medium md:text-lg md:font-normal md:py-10">
              By your side—day or night—our pieces are tailored to fit your
              story. Feel empowered in outfits that blend timeless design with
              everyday comfort. Your wardrobe should work for you, not the other
              way around.
            </p>
            <MyBtn
              to={"/style-with-us"}
              classname={
                "bg-[#4a4741] text-[#f7f1e8] px-5 py-3 rounded-3xl md:text-lg w-40 text-center "
              }
            >
              How to style
            </MyBtn>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        {moments.map((item) => {
          return (
            <div key={item.id}>
              <h1 className=" px-5 text-3xl font-extralight py-5">
                {item.title}
              </h1>
              <div className="relative h-[90vh]">
                <img src={item.img} className="h-[60vh] object-cover w-full" />
                <img
                  src={item.overlay}
                  className="absolute top-72 left-10 backdrop-blur-3xl bg-black/20 w-[80%] rounded-2xl"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className=" justify-between border-b mb-20 border-neutral-300 pt-5 hidden md:flex">
        {moments.map((item, idx) => {
          return (
            <div
              onClick={() => handleclick(idx)}
              key={item.id}
              className={`text-lg font-medium cursor-pointer ${
                border === idx && "border-b-2 border-[#4a4741] pb-3 px-3"
              }`}
            >
              {item.title}
            </div>
          );
        })}
      </div>
      <div className="mt-10 h-[60vh] relative hidden md:block">
        {moments.map((item, idx) => {
          return (
            idx === currentIndex && (
              <div key={item.id} className="">
                <img
                  src={item.img}
                  className="absolute h-[90%] top-0 left-[14%] rounded-lg"
                />
                <img
                  src={item.overlay}
                  className="absolute top-40 left-[40%] h-80 object-center object-cover"
                />
                {/* <img
                  src="/stretch-legs.avif"
                  className="absolute bg-black/30 backdrop-blur-md top-10 left-[45%] rounded-lg h-24"
                /> */}
                <div className="absolute bg-neutral-400 backdrop-blur-md top-10 left-[45%] rounded-lg h-24 flex justify-center items-center gap-1 px-3">
                  <Image
                    src="/lightlogo-logo.png"
                    alt="ffi_logo"
                    height={100}
                    width={100}
                    className="invert brightness-0 saturate-0 sepia-[1] hue-rotate-320 w-14"
                  />
                  <div>
                    <span className="text-sm font-medium">FFI</span>
                    <p className="text-xs font-light">Fashion Forward Inc.</p>
                  </div>
                </div>
                <div className="absolute bg-transparent border border-[#4a4741] top-[30%] right-[21%] rounded-lg h-72 w-60 text-[#4a4741] px-5 py-7">
                  <h2 className="quote text-2xl font-light pb-5">
                    {item.quote}
                  </h2>
                  <span className="text-sm font-medium">
                    {item.author}, {item.role}
                  </span>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default StyleMoments;
/* f7f1e8 */
/* 4a4741 */
