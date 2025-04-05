// Carosoul.jsx
import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

import { carsoul } from "../../Data";
import { FiArrowRight } from "react-icons/fi";

const Carosoul = () => {

  const error = "";
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="w-full  h-auto text-white ">
      <div className="">
       
        <div className="flex gap-3 ">
         
          
        </div>
      </div>
      <Swiper
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        
        navigation={true}
        centeredSlides={true}
        allowTouchMove={true}
        lazy={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
       
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {carsoul?.map((items, idx) => {
          return (
            <>
              <SwiperSlide
              className="mt-4"
                
               
              >
                {error ? (
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "auto",
                      color: "red",
                    }}
                  >
                    <span> {error}</span>
                  </p>
                ) : (
                  <img src={items.img} className="w-full h-[580px]" alt="" srcset="" />
                )}
              </SwiperSlide>
            </>
          );
        })}
        <div className="hidden lg:flex">
          <button
            ref={prevRef}
            className="bg-primary text-black border  rounded-full p-4 flex items-center justify-center absolute top-72 left-9 z-50"
          >
            <FiArrowRight size={20} className="rotate-180"/>
          </button>
          <button
            ref={nextRef}
            className="bg-primary text-black border  p-4 rounded-full flex items-center justify-center absolute top-72 right-14  z-50"
          >
            {/* <IoIosArrowForward size={20} /> */}
            <FiArrowRight size={20}/>
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default Carosoul;
