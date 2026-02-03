import { FaUsers, FaUserTie } from "react-icons/fa6";
import { IoCheckmark } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { LuPyramid } from "react-icons/lu";

const About = () => {
  const images = ["/sit.jpg", "/mood.avif", "/elegant-wig.webp"];

  const ffiData = {
    products: "2,000,000",
    employees: "10",
    years: 1,
  };

  return (
    <>
      <div>
        <div className="max-w-287.5 mx-auto">
          {/* WHO WE ARE */}
          <section id="who-we-are">
            <div className="bg-[url('/feel.avif')] h-[35vh] md:h-[60vh] bg-center bg-cover bg-no-repeat text-[#f7f1e8] flex justify-center items-center text-2xl">
              Our <span className="slant">Mission</span>
            </div>

            <h3 className="text-center my-5 font-light text-2xl">Who We Are</h3>

            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="w-1/2 flex justify-center items-center">
                <img className="w-24 md:w-52" src="/darklogo.png" alt="" />
              </div>

              <p className="text-sm w-[80%] ml-auto md:w-1/2 md:ml-0 leading-6 py-10">
                Fredrick Fashion Icon (FFI) is a unisex fashion brand created
                for modern individuals who value confidence, class, and
                intentional style. We design clothing, footwear, bags, and
                accessories that help people look polished without chasing loud
                or temporary trends. FFI exists to make everyday dressing
                easier, more refined, and empowering — helping individuals
                express growth, maturity, and self-respect through what they
                wear.
              </p>
            </div>
          </section>

          {/* STYLISH */}
          <section id="stylish" className="py-20">
            <div className="bg-[url('/shoot-15.jpeg')] h-[25vh] md:h-[60vh] bg-center bg-cover bg-no-repeat text-[#f7f1e8] flex justify-center items-center text-2xl">
              <span className="slant">Stylish</span>
            </div>

            <p className="text-sm w-[80%] m-auto text-center leading-6 py-10 italic">
              At FFI, style is intentional. Every piece is thoughtfully designed
              to balance simplicity, elegance, and confidence. Our collections
              are made for people who want to feel put together in every space —
              from work and social events to everyday life — without trying too
              hard.
            </p>
          </section>

          {/* DIFFERENCE */}
          <div id="difference" className="px-5">
            <h1 className="text-2xl w-[60%] md:w-[30%]">
              The Iconic{" "}
              <span className="slant block text-right">Difference</span>
            </h1>

            <section className="overflow-auto">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                {images.map((img) => {
                  return (
                    <div
                      key={img}
                      style={{
                        backgroundImage: `url(${img})`,
                        scrollbarWidth: "none",
                      }}
                      className="bg-no-repeat bg-center mx-auto bg-cover h-72 w-72 rounded shadow-md"
                    ></div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* STATS */}
          <section className="py-14 px-5">
            <p className="text-base border-b pt-4 pb-6 leading-7 md:text-xl md:flex md:justify-between md:items-center md:py-14">
              <span className="text-3xl font-light block md:text-7xl">
                {ffiData.employees}+
              </span>{" "}
              Dedicated creatives and production partners
            </p>

            <p className="text-base border-b pt-4 pb-6 leading-7 md:text-xl md:flex md:justify-between md:items-center md:py-14">
              <span className="text-3xl font-light block md:text-7xl">
                {ffiData.years}+
              </span>{" "}
              Years of building intentional fashion experiences
            </p>
          </section>

          {/* STYLISH ICONS */}
          <section className="py-20 px-5">
            <div className="bg-[url('/elegant-jewellry.avif')] h-[25vh] md:h-[40vh] bg-center bg-cover bg-no-repeat text-[#f7f1e8] flex justify-center items-center text-2xl"></div>

            <h3 className="font-light text-2xl pt-10 md:text-3xl md:text-center">
              Stylish Icons
            </h3>

            <p className="text-sm leading-6 py-4 md:w-150 md:mx-auto md:text-center">
              FFI pieces are designed for individuals who lead with confidence
              and purpose. Our customers are not followers of trends — they are
              icons in their own right, expressing elegance, discipline, and
              pride through their personal style.
            </p>
          </section>

          {/* VALUES */}
          <section
            id="our-values"
            className="px-5 bg-white py-16 md:grid md:grid-cols-3 md:gap-16"
          >
            <h2 className="text-2xl font-light pb-6 md:text-5xl">Our Values</h2>

            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <FaUsers className="size-10 border border-neutral-500 rounded p-2" />
                <h4 className="text-lg font-medium">
                  Community & Collaboration
                </h4>
                <p>
                  FFI is built on community. We believe fashion is stronger when
                  people grow together. From creatives to customers, we value
                  shared purpose, collaboration, and mutual respect.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <FaUserTie className="size-10 border border-neutral-500 rounded p-2" />
                <h4 className="text-lg font-medium">
                  Confidence & Self-Respect
                </h4>
                <p>
                  Everything we create is meant to help people feel confident in
                  who they are. Our designs support maturity, self-expression,
                  and intentional living.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <IoCheckmark className="size-10 border border-neutral-500 rounded p-2" />
                <h4 className="text-lg font-medium">Quality & Integrity</h4>
                <p>
                  We are committed to quality in design, fabric, and delivery.
                  What we promise is what we deliver — with honesty, care, and
                  attention to detail.
                </p>
              </div>
            </div>

            <div className="pt-10 md:pt-0 flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <LuPyramid className="size-10 border border-neutral-500 rounded p-2" />
                <h4 className="text-lg font-medium">Purpose-Driven Growth</h4>
                <p>
                  We aim higher than trends. FFI is built for long-term impact —
                  growing into a leading African fashion brand with global
                  relevance.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <FaRegEye className="size-10 border border-neutral-500 rounded p-2" />
                <h4 className="text-lg font-medium">Vision & Innovation</h4>
                <p>
                  We constantly evolve through creativity, storytelling, and
                  design innovation — building fashion experiences that inspire
                  pride and purpose.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
