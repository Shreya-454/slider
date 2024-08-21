import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { SLIDER_LIST } from '../utils/helper';

const Slide = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);
  
    useEffect(() => {
      setNav1(sliderRef1);
      setNav2(sliderRef2);
    }, []);
    return (
      <div className="container max-w-[1140px] mx-auto relative px-6">
        <div className="slider-for">
        <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}
                    arrows={false}   slidesToShow={1}>
        {
            SLIDER_LIST.map((item,i) =>(
<div key={i}>
    <img src={item} alt={i} className=" w-full mx-auto h-[300px]  md:h-[400px] object-cover rounded-xl"/>
</div>
            ))
        }
      </Slider>
        </div>
        <div className="slider-nav mt-10">
        <Slider 
  asNavFor={nav1}
  ref={slider => (sliderRef2 = slider)}
  slidesToShow={3}
  swipeToSlide={true}
  focusOnSelect={true}
  centerMode={true}
  arrows={true}
  responsive={[
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
        infinite: true,
        centerMode:true,
        arrows:false,
        dots: true
      }
    },
    {
        breakpoint:800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerMode:true,
          dots: true,
          arrows:false,
        }
      },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode:true,
        arrows:false,
        dots: true
      }
    },

    
  ]}
>
  {
    SLIDER_LIST.map((item, i) => (
      <div key={i}>
        <img src={item} alt={`Slide ${i}`} className="max-w-[300px] max-md:max-w-[250px] max-sm:max-w-[400px] mx-auto h-[200px] w-full object-cover rounded-lg"/>
      </div>
    ))
  }
</Slider>

      
        </div>
      </div>
    );
  };

export default Slide
