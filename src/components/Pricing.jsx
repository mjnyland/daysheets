import styles from "../styles";
import { checkmark } from "../assets";

const Prices = () => {
  return (

<div class={`${styles.sectionBox} grow`}>

    <div class={`${styles.contentBox}`}>

        <div className={`${styles.h2Box}`}>
            <h2 className={`${styles.h2} pb-[32px] text-center text-darkBlue pt-[32px]`}>Never enter a <span className="text-blue">flight</span> again, or build a grid.</h2>
            <div>
                <p className={`text-darkBlue ${styles.h2Body}`}>Daysheets introduces a new era of efficiency to tour management, with easy tabbing, speedy imports, and time-saving shortcuts.</p>
            </div>
        </div>


        <div class="flex flex-col lg:flex-row gap-8 mx-auto justify-center px-8 lg:px-0">


            {/* Basic */}
            <div class="flex flex-col items-center bg-white px-16 py-8 rounded-lg border-[2px] border-gray">
                <div  class="bg-darkBlue text-primary px-6 py-2 rounded-full font-semibold w-fit text-white"><h5>Basic</h5></div>

                <div class="flex flex-row mt-8 gap-2 items-center pb-4">
                    
                    <span class="text-darkBlue font-semibold text-2xl">$</span>
                    
                    <h2 class="text-darkBlue text-5xl">45</h2>
                    
                    <div class="flex flex-col">
                        <span class="text-darkBlue font-semibold">per</span>
                        <span class="text-darkBlue font-semibold">month</span>
                    </div>

                </div>

                <div class="h-[2px] w-full bg-gray rounded-full"></div>

                <div class="flex flex-col gap-2 mt-8">

                    <div class="flex flex-row gap-4 items-center"> <img src={checkmark} alt="Checkmark" /> <p class="text-darkBlue">Frequent flyer numbers</p></div>
                    <div class="flex flex-row gap-4"> <img src={checkmark} alt="Checkmark"/> <p class="text-darkBlue">Passport Information</p></div>
                    <div class="flex flex-row gap-4"> <img src={checkmark} alt="Checkmark"/> <p class="text-darkBlue">Hotel Reward Numbers</p></div>
                    <div class="flex flex-row gap-4"> <img src={checkmark} alt="Checkmark"/> <p class="text-darkBlue">Passport Information</p></div>
                    <div class="flex flex-row gap-4"> <img src={checkmark} alt="Checkmark"/> <p class="text-darkBlue">Hotel Reward Numbers</p></div>

                </div>

            </div>

            {/* Enterprise */}
            <div class="flex flex-col items-center bg-white px-16 py-8 rounded-lg  border-[2px] border-gray">
                <div  class="bg-darkBlue text-primary px-6 py-2 rounded-full font-semibold w-fit text-white"><h5>Enterprise</h5></div>

                <div class="flex flex-row mt-8 gap-2 items-center pb-4">
                    
                    
                    <h2 class="text-darkBlue text-5xl">Lets talk</h2>
                    


                </div>

                <div class="h-[2px] w-full bg-gray rounded-full"></div>

                <div class="flex flex-col gap-2 mt-8 pb-[32px]">

                    <div class="flex flex-row gap-4"> <img src={checkmark} alt="Checkmark"/> <p class="text-darkBlue">Frequent flyer numbers</p></div>
                    <div class="flex flex-row gap-4"> <img src={checkmark} alt="Checkmark"/> <p class="text-darkBlue">Passport Information</p></div>
                    <div class="flex flex-row gap-4"> <img src={checkmark} alt="Checkmark"/> <p class="text-darkBlue">Hotel Reward Numbers</p></div>
                    <div class="flex flex-row gap-4"> <img src={checkmark} alt="Checkmark"/> <p class="text-darkBlue">Passport Information</p></div>
                    <div class="flex flex-row gap-4"> <img src={checkmark} alt="Checkmark"/> <p class="text-darkBlue">Hotel Reward Numbers</p></div>

                </div>

                <a href="mailto:hello@daysheets.com" className={`${styles.buttonBlack}`} >Contact Us</a>

            </div>

        </div>





    </div>

</div>

    
  )
}

export default Prices