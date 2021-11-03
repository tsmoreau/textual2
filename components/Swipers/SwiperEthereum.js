import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";
import "swiper/css/navigation";

import RecycleBin from "../Machines/recyclebin";
import ShiftySharks from "../Machines/shiftysharks";
import DepictSoup from "../Machines/depictsoup";

// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
  Keyboard,
  Scrollbar,
  Mousewheel,
  FreeMode
} from "swiper/core";

// install Swiper modules
SwiperCore.use([
  EffectCoverflow,
  Mousewheel,
  Pagination,
  Navigation,
  Keyboard,
  Scrollbar,
  FreeMode
]);

export default function App() {
  return (
    <div className="w-full ">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        navigation={true}
        centeredSlides={true}
        spaceBetween={0}
        loop={false}
        coverflowEffect={{
          rotate: 4,
          stretch: 0,
          depth: 120,
          modifier: 1,
          slideShadows: false
        }}
        freeMode={{
          enabled: false,
          sticky: true,
          momentum: false
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: false
        }}
        mousewheel={{
          invert: true,
          releaseOnEdges: true,
          forceToAxis: true
        }}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          // when window width is >= 320px
          50: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 480px
          600: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          // when window width is >= 640px
          1000: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        }}
        className="flex mx-auto justify-center pb-36 -mt-8"
      >
        <SwiperSlide className="mb-8 pl-2 pr-3 -mt-2">
          <ShiftySharks />
        </SwiperSlide>

        <SwiperSlide className="-mt-8 px-2">
          <DepictSoup />
        </SwiperSlide>
        <SwiperSlide className="pl-10 pr-9 mt-20 transform  translate-x-12">
          <RecycleBin />
        </SwiperSlide>
      </Swiper>

      <style>{`
        

        .swiper-button-prev {
          color: #FFFFFF;
          
        }

        .swiper-button-next {
          color: #FFFFFF;
            
        }
        
        
        
        
        
        
        
           
          .swiper-pagination-bullet {
                background-color: transparent;
                border: 1px solid #FFFFFF;
                border-radius: 50%;
                width: 12px;
                height: 12px;
                opacity: 1;
            }
        
            .swiper-pagination-bullet-active {
                background-color: #FFFFFF;
            }
        }
        }
        
        .swiper1-wrapper {
          height: 500px;
        }
          
        .swiper-container {
          width: 100%;
          padding-bottom: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: "white";
          background-color: transparent;
        }
        
        .swiper-slide {
          background-position: center;
          
          width: 550px;
          
          
          overflow: hidden;
        }
        
        
        
      `}</style>
    </div>
  );
}
