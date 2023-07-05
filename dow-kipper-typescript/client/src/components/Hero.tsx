import React from "react";
import { Carousel } from "antd";

const Hero: React.FC = () => {
  return (
    /* Implement Carousel of Pokemon Cards */
    // AntD library perhaps
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1616196334218-caffdc9b2317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        alt="Hero"
        className="object-cover w-full h-64 sm:h-96"
        data-aos="fade-right"
        data-aos-delay="600"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex justify-center">
        <h1 className="text-white mt-12 text-4xl font-bold" data-aos="fade up">
          Discover Trading Cards by Category
        </h1>
        {/* AntD Carousel. Please install the library first to use */}
        <div
          style={{ width: "300px", height: "300px", backgroundColor: "blue" }}
        >
          <Carousel>
            <div>
              <h1 style={{ color: "white", lineHeight: "300px" }}>Slide 1</h1>
            </div>
            <div>
              <h1 style={{ color: "white", lineHeight: "300px" }}>Slide 2</h1>
            </div>
            <div>
              <h1 style={{ color: "white", lineHeight: "300px" }}>Slide 3</h1>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Hero;
