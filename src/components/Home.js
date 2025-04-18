
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Home = () => {
 
  const isDesktop = window.innerWidth >= 768; // example threshold for mobile screens

  useEffect(() => {
    if (isDesktop) {
      AOS.init();
    }
  }, [isDesktop]);

  const scrollToSection = (name) => {
  
    const element=document.getElementById(name);
    if(element){
      element.scrollIntoView({behavior:'smooth'})
    }
  };

  const Click=(url)=>{
    window.location.href=url;
  }
  
  useEffect(() => {
    const emailButton = document.getElementById("emailButton");
    if (emailButton) {
      emailButton.addEventListener("click", function () {
        window.location.href = "mailto:karthikeyana281104@gmail.com?subject=Subject%20Here&body=Hello%20Karthikeyan,";
      });
    }
});

  useEffect(() => {
    const text = document.querySelector(".second-text");
    const textload = () => {
      setTimeout(() => {
        text.textContent = "Karthikeyan A";
      }, 0);
      setTimeout(() => {
        text.textContent = "Web Developer";
      }, 4000);
      setTimeout(() => {
        text.textContent = "Backend Developer";
      }, 8000);
      setTimeout(() => {
        text.textContent = "Cloud";
      }, 12000);
    };

    if (text) {
      textload();
      setInterval(textload, 16000);
    }
  }, []);

  return (
    <div id="home">
      <div className="container">
         <span className="text first-text">Hi, I am </span>
         <span className="text second-text"></span>
       </div>




      <div className="home-content">
        <p>
          Passionate web developer with a keen interest in Backend and
          Cloud. Constantly learning and exploring the latest technologies
        </p>

        <p>
          This is my place for
          <span class="highlighted-text">
            {" "}
            thoughts, reflections &amp; everything&nbsp;
          </span>
          in between. Have a good read!
        </p>
      </div>
      <div className="social-button">
        <button 
          onClick={()=>{Click("https://github.com/karthi281104");}}
          >
          <i className="fa-brands fa-github" style={{ color: "#74C0FC" }}></i>
        </button>
        <button   onClick={()=>{Click("www.linkedin.com/in/karthikeyana220801098/");}}
        >
          <i
            className="fa-brands fa-linkedin-in"
            style={{ color: "#74C0FC" }}
          ></i>
        </button>
        <button     onClick={()=>{Click("www.linkedin.com/in/karthikeyana220801098/");}}  >
          <i className="fa-solid fa-code" style={{ color: "#74C0FC" }}></i>
        </button>
        <button id="emailButton">
          <i
            className="fa-regular fa-envelope"
            style={{ color: "#74C0FC" }}
          ></i>
        </button>
        <button
          onClick={()=>{Click("https://www.instagram.com/_.itsmekarthi/");}}
          >
          <i
            className="fa-brands fa-instagram"
            style={{ color: "#74C0FC" }}
          ></i>
        </button>
      </div>
      <div className="home-button">
        
      <button  onClick={() => scrollToSection('about')}
      data-aos={isDesktop?"fade-down":undefined}  data-aos-duration="1200"
      >
          <i className="fa-solid fa-book-open" style={{ color: "#74C0FC" }}></i>
          read my story<p>|</p>
          <p>About</p>
          <i class="fa-solid fa-arrow-right"></i>
        </button>


        <button  onClick={() => scrollToSection('projects')}
        data-aos={isDesktop?"fade-left":undefined}  data-aos-duration="1200"
        >
          <i className="fa-solid fa-code" style={{ color: "#74C0FC" }}></i>
          <p>what i built</p>
          <p>|</p> <p>projects</p>
          <i class="fa-solid fa-arrow-right"></i>
        </button>

        
        <button
         onClick={()=>{Click("https://drive.google.com/file/d/1hMrjICgDwj1wRK88AiYyNMcICUUQKEKe/view?usp=sharing");
          scrollToSection('contact')
          } 
        }
        >
          <i
            className="fa-solid fa-user-group"
            style={{ color: "#74C0FC" }}
          ></i>{" "}
          hire me<p>|</p>
          <p>resume</p>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div className="arrow-down">
      <button  onClick={() => scrollToSection('about')} >
           <i className="fa-solid fa-angles-down" style={{ color: "#74C0FC" }}></i>
      </button>
      </div>
    </div>
  );
};


