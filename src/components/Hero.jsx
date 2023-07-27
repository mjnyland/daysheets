import React, {useRef, useEffect} from 'react';
import styles from "../styles";
import { mockup, wave } from "../assets";

import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const daysheetsUrl = 'https://www.daysheets.com'; // Replace this with the URL to your daysheets file

  const [ ref1, inView1 ] = useInView();

  return (


    <section className={`${styles.sectionBox} bg-white relative z-10`}>

      <div className={`${styles.contentBox} flex flex-col items-center pt-[80px] px-4`}>

        <div className="flex flex-col items-center"> {/* Hero text content*/}

          <div className="max-w-[900px]">
            <h1 className={`${styles.h1} ${inView1 ? styles.fadeUp1 : styles.hidden} text-darkBlue pb-[40px]`} ref={ref1}>The modern solution for touring and <span className="text-blue">production management.</span></h1>
          </div>

          <div className="max-w-[800px] pb-[40px]">
            <p className={`text-darkBlue text-center text-lg sm:text-2xl ${inView1 ? styles.fadeUp2 : styles.hidden}`}>Eliminate tedious time spent on data entry.  We’ve re-imagined how to organize tours.  Daysheets allows you to enjoy your day off.  Doesn’t that sound nice? </p>
          </div>

          <a href={daysheetsUrl} className={`${styles.heroButton} w-full sm:w-fit`}>Download Daysheets</a>

        </div>

        <div className="max-w-[1200px] pt-[80px] z-10 relative">
          <img src={mockup} alt="Daysheets UI Mobile and Desktop Mockup" className="" />
        </div>

      </div>

      <img src={wave} alt="Soundwave illustration" className="absolute bottom-[100px] lg:bottom-[10px] w-full z-0" />

    </section>
  );
};

export default Hero;