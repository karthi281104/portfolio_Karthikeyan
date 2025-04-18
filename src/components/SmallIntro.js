import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const SmallIntro = () => {
  const isDesktop = window.innerWidth >= 768; // example threshold for mobile screens

  useEffect(() => {
    if (isDesktop) {
      AOS.init();
    }
  }, [isDesktop]);

  return (
    <div data-aos={isDesktop ? "fade-right" : undefined}
      data-aos-anchor-placement="top-center"
      data-aos-duration="1500"
      className='smallintro t'>
      <div className='small'>
        Hey there! I'm a Final year Electronics and Communication Engineering student at Rajalakshmi Engineering College with a passion for IT. I've dived into projects ranging from  web development and Clous with some pretty cool electronics. Whether it's coding up a storm or tinkering with circuits, I'm always on the lookout for new things to learn and explore. I'm driven by curiosity and the joy of making things that can have a real impact. Let's create something awesome together!
      </div>
    </div>
  );
};
