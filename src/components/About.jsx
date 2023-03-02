import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Abdi Fatah Hersi, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p>
              Greetings! I'm a passionate junior web-developer with all things
              full-stack, especially the backend. My fascination with coding
              began when I witnessed the incredible transformation of code into
              something tangible. 
            </p>
            <p>
              In March 2022, I had the opportunity to embark
              on the enlightening journey that is "Kodehode." Throughout the
              course, I acquired knowledge of HTML/CSS, JavaScript, and React.
              Most recently, I've been working with Node.js, and I'm absolutely
              thrilled with the power and flexibility it offers for the backend.
              As an organized problem-solver, I take pride in delivering quality
              work with attention to detail. 
            </p>
            <p>
              When I'm not hard at work, you'll
              find me immersed in MMORPG games or indulging my passion for
              sci-fi and adventure movies. My family is my foundation, and I
              cherish every moment spent with them. If you're looking to
              collaborate on something truly remarkable, let's team up and
              create something that will leave a lasting impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
