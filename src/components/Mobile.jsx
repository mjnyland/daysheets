import React, { useState } from 'react';
import styles from "../styles";
import { notes, hotels, checkmark, checkmark_white, iPhoneMockup, iPhoneMockup2, iPhoneMockup3, lightGradient } from "../assets";

const Mobile = () => {
  const options = [
    {
      image: iPhoneMockup,
      title: "Edit events & reservations",
      text: "Has sound check changed? Adding a last minute hotel? Make adjustments on the fly, regardless of where your computer is.",
      backgroundColor: "bg-white",
    },
    {
      image: iPhoneMockup2,
      title: "Send alerts to the team",
      text: "Push notifications add an extra layer of communication. If doors get held, alert the folks on your team who need to know.",
      backgroundColor: "bg-white"
    },
    {
      image: iPhoneMockup3,
      title: "Create new tours",
      text: "Don’t want to pull out your laptop? Feel free to build your entire tour, invite the team, and send a guest list, right from the phone.",
      backgroundColor: "bg-white"
    }
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleClick = (option) => {
    setSelectedOption(option);
    console.log(selectedOption);
    console.log(option);
    if (selectedOption === option) {
        console.log("same");
    } else {
        console.log("different");
    }
  };

  return (
    <div className={`relative ${styles.sectionBox} bg-darkBlue`}>
      
        <div className={`${styles.contentBox} lg:pt-[160px] relative`}>
        
            
            {/* Heading */}
            <div className={`${styles.h2Box} `}>
                <div  class="bg-dimWhite text-white px-6 py-2 rounded-full font-semibold w-fit mx-auto"><h5>Mobile</h5></div>
                <h2 className={`${styles.h2} text-center text-white pt-[32px]`}>Experience data entry in <span className='text-blue'>minutes</span>, not hours.</h2>
                <div>
                    <p className={`text-white ${styles.h2Body}`}>Daysheets introduces a new era of efficiency to tour management, with easy tabbing, speedy imports, and time-saving shortcuts.</p>
                </div>
            </div>


            { /*Mobile */ }

            <div className="flex flex-col items-center w-full gap-8 bg-dimWhite px-8 py-8 rounded-2xl md:hidden">
                <div className="relative flex flex-col xs:flex-row w-full items-center justify-center">
                    {options.map((option, index) => (
                    <h5
                        key={index}
                        className={`text-base sm:text-xl text-center rounded-lg cursor-pointer px-4 py-4 w-full h-full leading-tight font-normal ${
                        selectedOption.title === option.title ? "bg-white text-blue font-semibold" : "bg-none hover:bg-dimWhite"
                        }`}
                        onClick={() => handleClick(option)}
                    >
                        {option.title}
                    </h5>
                    ))}
                </div>

            <div>
                <p className="text-center max-w-[640px]">{selectedOption.text}</p>
            </div>

            <div class="w-full max-w-full">
                <img src={selectedOption.image} alt="" className="w-full h-auto inline" />
            </div>
            </div>

            { /* Desktop */ }

            <div className="hidden flex-row items-start px-8 pb-4 rounded-2xl stroke-2 stroke-white md:flex ">

                <div class="flex flex-col gap-4 mt-16 w-1/2 lg:w-2/3 z-10">

                    {options.map((option, index) => (

                        <div
                        
                        key={index}
                        className={`flex flex-col items-start gap-2 text-xl text-left px-6 py-6 rounded-lg cursor-pointer leading-tight font-medium ${
                        selectedOption.title === option.title ? "bg-dimWhite text-white border-dimWhite border-[1px]" : "bg-none hover:bg-dimWhite border-blank border-[1px]"
                        }`}
                        onClick={() => handleClick(option)}
                        >

                        <h5 className={`${styles.h5} text-white`}> {option.title} </h5>

                        <p className={`${styles.body} text-white`}>{option.text}</p>

                    </div>

                    ))}

                </div>



                <div class="flex w-1/2 lg:w-1/3 z-10">
                    <img src={selectedOption.image} alt="" className="inline object-cover flex-start" />
                </div>

            </div>


            <div className='bg-blue h-[640px] w-[640px] absolute top-[400px] left-[320px] rounded-full blur-[320px] z-0 opacity-30'></div>

        </div>


    </div>
  );
};

export default Mobile;