"use client";
import Explore from "./components/Explore";
import Featured from "./components/Featured";
import FFIDisplay from "./components/FFIDisplay";
import Hero from "./components/Hero";
import StyleGuide from "./components/StyleGuide";
import StyleMoments from "./components/StyleMoments";
import Testimonial from "./components/Testimonial";
import TopBar from "./components/TopBar";

const HomePage = () => {
  // const { loading } = useContext(PreloaderContext);

  return (
    <>
      {/* {!loading && ( */}
      <div className="relative text-white overflow-hidden">
        {/* <TopBar /> */}

        <Hero />
        <Explore />
        <FFIDisplay />
        <StyleMoments />
        <Featured />
        <StyleGuide />
        <Testimonial />
        {/* -------------------- */}
        {/* <Newsletter /> */}
        {/* <Social /> */}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default HomePage;
