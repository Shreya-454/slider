import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { SLIDER_LIST } from '../utils/helper';

const Slide = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sliderRef = useRef(null);

  const handleTabClick = (index) => {
    setActiveTab(index);
    sliderRef.current.slickGoTo(index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    dots:false,
    beforeChange: (current, next) => setActiveTab(next),
  };

  return (
    <div className="container max-w-[1140px] mx-auto relative px-6">
      <h1 className="text-5xl text-center text-blue-700 mb-5 font-semibold">Slider</h1>
      
      {/* Slider */}
      <div className="w-full h-[400px] mb-4">
        <Slider ref={sliderRef} {...settings}>
          {SLIDER_LIST.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: activeTab === index ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={item}
                alt={`Slide ${index + 1}`}
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </motion.div>
          ))}
        </Slider>
      </div>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 w-full overflow-x-scroll" id='tabs'>
        {SLIDER_LIST.map((item, index) => (
          <div
            key={index}
            onClick={() => handleTabClick(index)}
            className={`cursor-pointer border-4 border-solid rounded duration-300 ${
              activeTab === index
                ? 'border-purple-900 opacity-100'
                : 'border-black opacity-60'
            }`}
          >
            <img src={item} alt={`Tab ${index}`} className="w-[200px] h-[100px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slide;
