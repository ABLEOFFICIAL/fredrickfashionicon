"use client";

import AdBlock from "./components/AdBlock";
import Category from "./components/Category";
import DisplayProducts from "./components/DisplayProducts";
import FilterBlock from "./components/FilterBlock";
import Sidebar from "./components/Sidebar";

const DiscoveryPage = () => {
  // const { loading } = useContext(PreloaderContext);
  return (
    <>
      <div>
        {/* <NavBarMd /> */}
        <div className="md:flex md:min-h-screen">
          <div className="hidden md:block">
            <Category />
          </div>
          <div className="md:flex-1">
            <Sidebar />
            <AdBlock />
            <FilterBlock />
            <DisplayProducts />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default DiscoveryPage;
