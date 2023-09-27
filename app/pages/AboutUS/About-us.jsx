"use client";
import { useState } from "react";

import { FaAngleRight } from "react-icons/fa";

const About = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  const toggleDetails1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleDetails2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleDetails3 = () => {
    setIsOpen3(!isOpen3);
  };

  const toggleDetails4 = () => {
    setIsOpen4(!isOpen4);
  };

  const toggleDetails5 = () => {
    setIsOpen5(!isOpen5);
  };
  return (
    <div>
      <div className="w-[100%] h-[400px] relative">
        <img src="/assets/aboutus1.png" alt="" className="w-full h-full" />
        <h1 className="absolute inset-0 flex items-center justify-center text-black text-5xl font-bold">
          ABOUT US
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center mt-[35px]">
        <div className=" max-w-3xl">
          <h1 className="text-2xl text-center font-semibold">
            What do we stand for and how did we reach to it?
          </h1>
          <div className="mt-[50px] text-[17px]">
            <p>
              Remember the days when we used to fill our slam-books with career
              aspirations like scientist, teacher and doctor? Nobody at that
              time thought there could’ve been a career in Travelling, let alone
              being a travelpreneur! But as life happens, you understand that a
              career could be anything where you can be a problem-solver for the
              society.
            </p>
            <p className="mt-[10px]">
              And that’s how a few engineers from NIT Kurukshetra found that the
              travel industry in India needed a fresh burst of young energy! The
              need of the hour was to convert a dispersed agent based model to a
              more friendly ,transparent and an accessible community for Indian
              travellers, and hence WanderOn. Let’s have a closer look at the
              hustlers who’re on a mission to stir up people’s life with
              memorable experiences.
            </p>
          </div>
        </div>
        <h1 className="text-4xl mt-[40px] text-center font-bold">
          Here’s to the VALUES we strive for
        </h1>
        <div className=" max-w-3xl mt-[20px]">
          <p>
            There are a whole lot of values and visions that one develops during
            their college days, which are otherwise rare to cultivate. It is
            these values that brought together a few engineers from NIT
            Kurukshetra, who took upon themselves the task to revolutionize the
            Indian Travel Industry. The result? A successful establishment of a
            travel community that the youth can identify with. Have a look at
            the values we swear by
          </p>
        </div>
        <div className=" mt-[30px]">
          <details className={`w-[800px] ${isOpen1 ? "open" : ""}`}>
            <summary
              className="px-4 py-2 text-[25px] flex items-center justify-between cursor-pointer"
              onClick={toggleDetails1}
            >
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">01</span>
                <span className="font-bold">Community Experience</span>
              </div>
              <span
                className={`text-[25px] transform ${
                  isOpen1 ? "rotate-90" : "rotate-0"
                }`}
              >
                <FaAngleRight />
              </span>
            </summary>
            <div className="mt-[10px]">
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                ● It is believed that you make connection with an average of 150
                people in a lifespan. How much do you think these people offer
                you to make your time worthy? We’re curating a community where
                the people you meet add value to your life, through experiences,
                memories and everything in between.
              </p>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                ● That’s why our community comprise of every person who takes a
                trip with us, is connected with us on social media, and those
                who meet us in our everyday lives. The goal is to create a happy
                impact on whosoever you come across.
              </p>
            </div>
          </details>
          <details className={`w-[800px] ${isOpen2 ? "open" : ""}`}>
            <summary
              className="px-4 py-2 text-[25px] flex items-center justify-between cursor-pointer"
              onClick={toggleDetails2}
            >
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">02</span>
                <span className="font-bold">Customer Satisfaction</span>
              </div>
              <span
                className={`text-[25px] transform ${
                  isOpen2 ? "rotate-90" : "rotate-0"
                }`}
              >
                <FaAngleRight />
              </span>
            </summary>
            <div className="mt-[10px]">
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                ● It is believed that you make connection with an average of 150
                people in a lifespan. How much do you think these people offer
                you to make your time worthy? We’re curating a community where
                the people you meet add value to your life, through experiences,
                memories and everything in between.
              </p>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                ● That’s why our community comprise of every person who takes a
                trip with us, is connected with us on social media, and those
                who meet us in our everyday lives. The goal is to create a happy
                impact on whosoever you come across.
              </p>
            </div>
          </details>
          <details className={`w-[800px] ${isOpen3 ? "open" : ""}`}>
            <summary
              className="px-4 py-2 text-[25px] flex items-center justify-between cursor-pointer"
              onClick={toggleDetails3}
            >
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">03</span>
                <span className="font-bold">Transparency</span>
              </div>
              <span
                className={`text-[25px] transform ${
                  isOpen3 ? "rotate-90" : "rotate-0"
                }`}
              >
                <FaAngleRight />
              </span>
            </summary>
            <div className="mt-[10px]">
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                ● It is believed that you make connection with an average of 150
                people in a lifespan. How much do you think these people offer
                you to make your time worthy? We’re curating a community where
                the people you meet add value to your life, through experiences,
                memories and everything in between.
              </p>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                ● That’s why our community comprise of every person who takes a
                trip with us, is connected with us on social media, and those
                who meet us in our everyday lives. The goal is to create a happy
                impact on whosoever you come across.
              </p>
            </div>
          </details>
          <details className={`w-[800px] ${isOpen4 ? "open" : ""}`}>
            <summary
              className="px-4 py-2 text-[25px] flex items-center justify-between cursor-pointer"
              onClick={toggleDetails4}
            >
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">04</span>
                <span className="font-bold">Creative Mindset</span>
              </div>
              <span
                className={`text-[25px] transform ${
                  isOpen4 ? "rotate-90" : "rotate-0"
                }`}
              >
                <FaAngleRight />
              </span>
            </summary>
            <div className="mt-[10px]">
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                ● It is believed that you make connection with an average of 150
                people in a lifespan. How much do you think these people offer
                you to make your time worthy? We’re curating a community where
                the people you meet add value to your life, through experiences,
                memories and everything in between.
              </p>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                ● That’s why our community comprise of every person who takes a
                trip with us, is connected with us on social media, and those
                who meet us in our everyday lives. The goal is to create a happy
                impact on whosoever you come across.
              </p>
            </div>
          </details>
          <details className={`w-[800px] ${isOpen5 ? "open" : ""}`}>
            <summary
              className="px-4 py-2 text-[25px] flex items-center justify-between cursor-pointer"
              onClick={toggleDetails5}
            >
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">05</span>
                <span className="font-bold">Freedom From Hassles</span>
              </div>
              <span
                className={`text-[25px] transform ${
                  isOpen5 ? "rotate-90" : "rotate-0"
                }`}
              >
                <FaAngleRight />
              </span>
            </summary>
            <div className="mt-[10px]">
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                ● It is believed that you make connection with an average of 150
                people in a lifespan. How much do you think these people offer
                you to make your time worthy? We’re curating a community where
                the people you meet add value to your life, through experiences,
                memories and everything in between.
              </p>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                ● That’s why our community comprise of every person who takes a
                trip with us, is connected with us on social media, and those
                who meet us in our everyday lives. The goal is to create a happy
                impact on whosoever you come across.
              </p>
            </div>
          </details>
        </div>
        <h1 className="text-[30px] mt-[40px] text-center font-bold">
          Our WARRIORS who have helped us build this holistic community
        </h1>
        <div className="mt-[30px] flex flex-row ">
          <div className="max-w-sm rounded bg-white flex flex-col items-center justify-center h-[400px]">
            <img
              src="/assets/usp0.png"
              alt="Card"
              className="w-[100px] h-[100px]"
            />
            <div className="px-6 py-4 text-center">
              <h1 className="font-bold text-[30px] mb-2">Trip Captains</h1>
              <div className="bg-highlight w-[120px] h-[3px] mx-auto mb-3"></div>
              <p className="text-gray-700 text-base">
                Our trip captains are nothing short of heroes. Brave, dynamic,
                and great leaders, they’re certainly the showrunners of the
                community trips. They’ve been handpicked from India’s best
                travel institutes, and know all tricks of trade to lead and
                manage all kinds of trips, including biking and trekking
                expeditions.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded bg-white flex flex-col items-center justify-center h-[400px]">
            <img
              src="/assets/usp1.png"
              alt="Card"
              className="w-[100px] h-[100px]"
            />
            <div className="px-6 py-4 text-center">
              <h1 className="font-bold text-[30px] mb-2">Local Vendors</h1>
              <div className="bg-highlight w-[120px] h-[3px] mx-auto mb-3"></div>
              <p className="text-gray-700 text-base">
                Being the bridge between the local vendors and the customers,
                we’re very selective about the former. After a rigorous recci,
                we’ve found the most kind and hospitable vendors, who make our
                travelers feel at home, even when they might be miles away from
                it. Over the period of time, we’ve managed to make a family-like
                relationship with our vendors, thus giving back to the local
                community in every way possible!
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded bg-white flex flex-col items-center justify-center h-[400px]">
            <img
              src="/assets/usp2.png"
              alt="Card"
              className="w-[100px] h-[100px]"
            />
            <div className="px-6 py-4 text-center">
              <h1 className="font-bold text-[30px] mb-2">Transport Drivers</h1>
              <div className="bg-highlight w-[120px] h-[3px] mx-auto mb-3"></div>
              <p className="text-gray-700 text-base">
                We understand the responsibility of taking utmost care of our
                travelers when they’re off to experience the toughest terrains
                of the country. Hence everything depends on the competency of
                our drivers. All the drivers at WanderOn are local
                professionals, who’ve been in practice since years, and we
                assure that they know all nooks and corners of the roads by
                heart!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
