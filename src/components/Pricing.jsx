import styles from "../styles";
import { checkmark } from "../assets";

const Prices = () => {
  return (

<div class={`${styles.sectionBox} bg-lightWhite`}>

    <div class={`${styles.contentBox}`}>


        <div class="flex gap-8 mx-auto justify-center">

            <div class="flex flex-col items-center bg-white px-8 py-8 rounded-lg drop-shadow-md">
                <div  class="bg-darkBlue text-primary px-6 py-2 rounded-full font-semibold w-fit"><h5>Basic</h5></div>

                <div class="flex flex-row mt-8 gap-2 items-center pb-4">
                    
                    <span class="text-darkBlue font-semibold text-2xl">$</span>
                    
                    <h2 class="text-darkBlue text-6xl">45</h2>
                    
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

            <div class="flex flex-col items-center bg-white px-8 py-8 rounded-lg drop-shadow-md">
                <div  class="bg-darkBlue text-primary px-6 py-2 rounded-full font-semibold w-fit"><h5>Enterprise</h5></div>

                <div class="flex flex-row mt-8 gap-2 items-center pb-4">
                    
                    <span class="text-darkBlue font-semibold text-2xl">$</span>
                    
                    <h2 class="text-darkBlue text-6xl">45</h2>
                    
                    <div class="flex flex-col">
                        <span class="text-darkBlue font-semibold">per</span>
                        <span class="text-darkBlue font-semibold">month</span>
                    </div>

                </div>

                <div class="h-[2px] w-full bg-gray rounded-full"></div>

                <div class="flex flex-col gap-2 mt-8">

                    <div class="flex flex-row gap-4"> <img src={checkmark} alt="Checkmark"/> <p class="text-darkBlue">Frequent flyer numbers</p></div>
                    <div class="flex flex-row gap-4"> <img src={checkmark} alt="Checkmark"/> <p class="text-darkBlue">Passport Information</p></div>
                    <div class="flex flex-row gap-4"> <img src={checkmark} alt="Checkmark"/> <p class="text-darkBlue">Hotel Reward Numbers</p></div>
                    <div class="flex flex-row gap-4"> <img src={checkmark} alt="Checkmark"/> <p class="text-darkBlue">Passport Information</p></div>
                    <div class="flex flex-row gap-4"> <img src={checkmark} alt="Checkmark"/> <p class="text-darkBlue">Hotel Reward Numbers</p></div>

                </div>

            </div>

        </div>





    </div>

</div>

    
  )
}

export default Prices