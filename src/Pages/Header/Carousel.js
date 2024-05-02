import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Client } from './Data';


const TestimonialCarousel = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 600,
    draggable: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <main className='w-full'>
      <section>
        <div className="testimonial">
          <div className="container">
            <div className="testimonial__inner">
              <Slider {...settings}>
                {
                  Client.map(n=> (
                    <div className="testimonial-slide p-[20px]" key={n.id}>
                      <span className='font-semibold text-[18px] m-[20px]'>
                        <p className='text-[48px] '>&#10078;</p>
                        <p className='text-gray-800'>{n.feedback}&#10078;</p>&nbsp;
                        <p className='flex items-center'>
                          <div className="h-[2px] w-[50px] bg-gray-800 mr-[15px] "></div>
                          <label className='font-bold'>{n.name}</label>
                        </p>
                      </span>
                    </div>
                  ))
                }
                
                
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TestimonialCarousel;
