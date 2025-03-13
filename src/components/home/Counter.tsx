import React from "react";
import CompanyOverviewBg from "../../../public/images/company-overview-bg.svg";
import Event1 from "../../../public/images/event1.svg";
import Event2 from "../../../public/images/event2.svg";
import Image from "next/image";

const Counter = () => {
  return (
    <div
      style={{ backgroundImage: "url('/images/company-overview-bg.svg')" }}
      className="relative bg-cover bg-center min-h-screen py-28 overflow-hidden"
    >
      <div className="relative z-10 max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-[80px] xs:text-[42px] sm:text-[52px] md:text-[36px] lg:text-[60px] xl:text-[80px]  2xl:text-[70px] 3xl:text-[100px] 4xl:text-[80px] font-semibold leading-tight text-white">
              You imagine it, we bring it to life.
            </h2>
            <p className="mt-4 text-white xs:text-[18px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] 3xl:text-[18px] 4xl:text-[18px]">
              <span className=" font-medium">8 Point Entertainment</span>'s
              events are conceptualized to become one of Singapore’s most
              premier brand events, offering a breakthrough platform not just
              for designers but also for the brands associated with them.
            </p>
            <p className="mt-2 text-white xs:text-[18px] sm:text-[18px] md:text-[18px] lg:text-[18px] xl:text-[18px] 2xl:text-[18px] 3xl:text-[18px] 4xl:text-[18px]">
              We create targeted strategies so your video content speaks to the
              right audience in the right way, through the right channel.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-8 text-lg font-semibold text-[14px] text-white">
              <div>
                <span className="block text-[46px] mb-2 ">15+</span>
                Years of experience
              </div>
              <div>
                <span className="block text-[46px] mb-2">200+</span>
                Projects delivered per year
              </div>
              <div>
                <span className="block text-[46px]  mb-2">220</span>
                Happy employees
              </div>
              <div>
                <span className="block text-[46px] mb-2">32,000 sqm</span>
                Production & Logistic facilities
              </div>
            </div>
          </div>

          <div className="relative left-[61px]">
            <Image
              src={Event1}
              alt="Event lighting"
              className="rounded-lg shadow-lg w-[80%] object-cover"
            />

            <Image
              src={Event2}
              alt="Event show"
              className="absolute bottom-[-80px] right-[75px] w-[60%] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
