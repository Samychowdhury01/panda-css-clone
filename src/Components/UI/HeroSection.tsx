import Navbar from "./Navbar";
import Container from "../../utils/Container";
import panda from "../../assets/panda.png";

const HeroSection = () => {
  return (
    <>
      <div className="bg-[#FDE047] pb-20">
        <Container>
          {/* navigation section */}
          <section className="pt-5">
            <Navbar />
          </section>

          {/*  Hero  Content Section  */}
          <section className="mt-14">
            <p className="text-xl font-medium w-1/2 hidden md:block">
              CSS-in-JS with build time generated styles, RSC compatible,
              multi-variant support, and best-in-class developer experience
            </p>
            <div className="mt-0 md:mt-20 flex flex-col md:flex-row ">
              {/* text container */}
              <div>
                <div>
                  <h2 className="text-black text-[34px] md:text-[44px] font-bold">
                    Write type-safe styles with ease using
                  </h2>
                  <h2 className="text-black text-[100px] md:text-[209px] font-bold -mt-5 md:-mt-16">
                    panda
                  </h2>
                </div>
                {/* buttons */}
                <div className="flex flex-col md:flex-row gap-5">
                  <button className="hero-btn border-4 border-black">
                    Get Started
                  </button>
                  <button className="bg-black text-white hero-btn-size">
                    Learn Panda
                  </button>
                </div>

                <p className="mt-10">
                  <code className="opacity-30">$</code>
                  <span className="text-black text-lg font-medium -tracking-tight ml-2">
                    npm i -D @pandacss/dev
                  </span>
                </p>
              </div>
              {/* image container */}
              <div className="hidden md:block">
                <img src={panda} alt="panda-image" />
              </div>
            </div>
          </section>
        </Container>
      </div>
    </>
  );
};

export default HeroSection;
