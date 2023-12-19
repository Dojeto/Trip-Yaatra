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
        <img src="/assets/AboutUs/aboutus1.png" alt="" className="w-full h-full" />
        <h1 className="absolute inset-0 flex items-center justify-center text-black text-5xl font-bold">
          ABOUT US
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center mt-[35px]">
        <div className=" max-w-3xl">
          <h1 className="text-3xl text-center font-bold">
            What principles do we embody, and what path led us to embrace them?
          </h1>
          <div className="mt-[50px] text-[17px]">
            <p>
              Recall the era when our slam-books were filled with dreams of becoming scientists, teachers, or doctors. Back then, the idea of a career in Traveling or being a travelpreneur seemed unimaginable. However, life unfolds in unexpected ways, revealing that a career can encompass anything where one becomes a problem-solver for society.
            </p>
            <p className="mt-[10px]">

              A collective of forward-thinking individuals identified a gap in India's travel industry that called for a new direction. The prevalent need was to transition from a fragmented agent-based model to a more accessible, transparent, and inclusive platform for Indian travelers - thus, Trip Yaatra came into existence. Now, let's explore the stories of these passionate individuals dedicated to enriching people's lives with remarkable experiences
            </p>
          </div>
        </div>
        <h1 className="text-3xl mt-[40px] text-center font-bold">

          Here's to the PRINCIPLES we uphold and aspire to.
        </h1>
        <div className=" max-w-3xl mt-[20px]">
          <p>

            Throughout their formative years, individuals often nurture a unique set of values and aspirations that are not commonly cultivated. These guiding principles brought together a team of engineers, motivating them to embark on the mission of transforming the Indian Travel Industry. The result? The establishment of a vibrant travel community that strongly resonates with the youth. Explore the values we ardently uphold.
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
                <span className="font-bold"> Shared Ethos</span>
              </div>
              <span
                className={`text-[25px] transform ${isOpen1 ? "rotate-90" : "rotate-0"
                  }`}
              >
                <FaAngleRight />
              </span>
            </summary>
            <div className="mt-[10px]">
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                ● Throughout a lifetime, it's estimated that one connects with around 150 individuals. How much do you reckon these connections contribute to enriching your time? We're crafting a community where the people you encounter add substantial value to your life, sharing experiences, crafting memories, and everything in between.
              </p>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                ● Hence, our community includes everyone who embarks on a journey with us, engages through our social channels, or simply crosses paths with us in daily life. The objective is to foster a positive and joyful influence on every individual you encounter.
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
                <span className="font-bold">Client Delight</span>
              </div>
              <span
                className={`text-[25px] transform ${isOpen2 ? "rotate-90" : "rotate-0"
                  }`}
              >
                <FaAngleRight />
              </span>
            </summary>
            <div className="mt-[10px]">
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                ● At the genesis of our journey, the founders, having navigated the early phases of their careers, intimately comprehended the constraints of a conventional 9-5 routine.
              </p>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                ● Understanding the challenges akin to our customers has become our guiding force. This deep empathy propels Trip Yaatra's commitment to not only meet but exceed their expectations. This dedication has propelled us to gather over 3000 reviews across various social platforms, consistently holding an exceptional 4.9/5 rating. It stands as a testament to our unwavering resolve to offer unparalleled experiences.
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
                <span className="font-bold">Openness</span>
              </div>
              <span
                className={`text-[25px] transform ${isOpen3 ? "rotate-90" : "rotate-0"
                  }`}
              >
                <FaAngleRight />
              </span>
            </summary>
            <div className="mt-[10px]">
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                ● Ironically, the hidden truth behind running a prosperous business is the unwavering commitment to transparency.
              </p>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                ●
                Within Trip Yaatra, the collaboration among our teams, vendors, and clients thrives on absolute clarity. This synergy fosters a shared objective: nurturing the travel community towards collective growth and enrichment.
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
                <span className="font-bold">Innovative Perspective</span>
              </div>
              <span
                className={`text-[25px] transform ${isOpen4 ? "rotate-90" : "rotate-0"
                  }`}
              >
                <FaAngleRight />
              </span>
            </summary>
            <div className="mt-[10px]">
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                ● In a realm where novelty defines each day's endeavors, conventional approaches are viewed as obstacles rather than norms. Thus, at Trip Yaatra, creativity isn't just encouraged; it's an indispensable element fuelling our endeavors.
              </p>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                ● Our marketing squad sets the pace, but this innovative spirit permeates throughout our teams, including our team leaders and sales executives. We firmly believe in the boundless potential of creative minds, and it vividly manifests in the seamless functioning and distinctive approach adopted at Trip Yaatra.
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
                <span className="font-bold">Freedom from Troubles</span>
              </div>
              <span
                className={`text-[25px] transform ${isOpen5 ? "rotate-90" : "rotate-0"
                  }`}
              >
                <FaAngleRight />
              </span>
            </summary>
            <div className="mt-[10px]">
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                ● Contemplating life, one might realize the scarcity of authentic freedom in our experiences. Lost within the confines of societal and professional expectations, the true essence of liberation often remains elusive.
              </p>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                ● Trip Yaatra is dedicated to reintroducing the raw essence of freedom. Whether through our services or the ethos within our workspace, our aim is to redefine norms and exemplify that freedom isn't an exception but rather a fundamental principle we champion.
              </p>
            </div>
          </details>
        </div>
        <h1 className="text-[30px] mt-[40px] text-center font-bold">
          The remarkable individuals who've contributed to shaping this comprehensive community
        </h1>
        <div className="mt-[30px] flex flex-row ">
          <div className="max-w-sm rounded bg-white flex flex-col items-center justify-center h-[400px]">
            <img
              src="/assets/AboutUs/usp0.png"
              alt="Card"
              className="w-[100px] h-[100px]"
            />
            <div className="px-6 py-4 text-center">
              <h1 className="font-bold text-[30px] mb-2">Journey Leaders</h1>
              <div className="bg-highlight w-[120px] h-[3px] mx-auto mb-3"></div>
              <p className="text-gray-700 text-base">
                Our expedition leaders are akin to trailblazers. Fearless, versatile, and exceptional leaders, they are the driving force behind our community adventures. Handpicked from premier travel backgrounds in India, they possess a wealth of expertise to skillfully orchestrate various trips, from thrilling biking escapades to challenging trekking expeditions.
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded bg-white flex flex-col items-center justify-center h-[400px]">
            <img
              src="/assets/AboutUs/usp1.png"
              alt="Card"
              className="w-[100px] h-[100px]"
            />
            <div className="px-6 py-4 text-center">
              <h1 className="font-bold text-[30px] mb-2">Regional Suppliers</h1>
              <div className="bg-highlight w-[120px] h-[3px] mx-auto mb-3"></div>
              <p className="text-gray-700 text-base">
                Acting as the intermediary between regional suppliers and our customers, we maintain a stringent selection process for the former. Through thorough assessments, we've discovered the most gracious and welcoming suppliers, ensuring that our travelers feel at ease, even when they're far from home. Over time, we've nurtured familial bonds with our suppliers, allowing us to contribute meaningfully to the local community in every conceivable way!
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded bg-white flex flex-col items-center justify-center h-[400px]">
            <img
              src="/assets/AboutUs/usp2.png"
              alt="Card"
              className="w-[100px] h-[100px]"
            />
            <div className="px-6 py-4 text-center">
              <h1 className="font-bold text-[30px] mb-2">Travel Guides</h1>
              <div className="bg-highlight w-[120px] h-[3px] mx-auto mb-3"></div>
              <p className="text-gray-700 text-base">
                We acknowledge the paramount importance of ensuring our travelers' safety, especially when navigating the country's most challenging terrains. The expertise of our drivers is crucial in this regard. Each driver at Trip Yaatra is a seasoned local professional, boasting years of experience. Rest assured, they possess an intimate knowledge of every twist and turn of the roads, ensuring a secure and memorable journey for our travelers!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
