import React from "react";
// import HeroBg from "../../../public/images/hero-bg.svg";
import classes from "./MainBanner.module.css";

const MainBanner = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex justify-start items-center"
      style={{ backgroundImage: "url('/images/hero-bg.svg')" }}
    >
      <div className="relative z-10 max-w-screen-xl mx-auto ">
        <div className="text-white flex justify-center items-start flex-col p-16 xs:px-5 sm:px-5">
          {/* <h1 className={classes.heading1}> */}
          <h1 className="text-[#fff] font-semibold xs:text-[44px] sm:text-[50px] md:text-[36px] lg:text-[60px] xl:text-[80px]  2xl:text-[70px] 3xl:text-[100px] 4xl:text-[80px]">
            We build premium <span className="text-[#E2A750]">events</span>,
            <span className="text-[#E2A750]"> exhibitions </span>, and{" "}
            <span className="text-[#E2A750]">branded</span> environments.
          </h1>

          <p className="mt-4 max-w-2xl text-lg xs:text-[16px] sm:text-[30px] md:text-[16px] lg:text-[20px] xl:text-[22px]  2xl:text-[22px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* CTA Button */}
          <button className="mt-6 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
