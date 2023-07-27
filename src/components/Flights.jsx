import React from 'react'
import styles from "../styles";
import { checkmark, dragAndDropFlight, flightGrid } from "../assets";

const Flights = () => {
  return (
    <div className={`${styles.SectionBox} bg-gradient-to-t from-darkBlue to-blue py-[0] lg:py-[160px] `}>
        
        <div className={`${styles.contentBox} bg-white lg:px-[64px] lg:py-[64px] px-[8px] py-[64px] rounded-none lg:rounded-2xl`}> {/* Content Box */}

            <div className={`${styles.h2BoxFlat}`}>
                <div  class="bg-dimBlue text-blue px-6 py-2 rounded-full font-semibold w-fit mx-auto"><h5>Coming soon</h5></div>
                <h2 className={`${styles.h2} pb-[32px] text-center text-darkBlue pt-[32px]`}>Never enter a <span className="text-blue">flight</span> again, or build a grid.</h2>
            </div>

            {/* Mobile */}

            <div className='flex flex-col gap-[32px] lg:hidden'>

                <div className="">
                            <div className="h-[2px] w-full bg-gray"></div>
                            <h5 class={`${styles.tag} pt-[16px]`}>Step 1</h5>
                            <h5 class={`${styles.h5} text-darkBlue`}>Upload Tickets.</h5>
                            <p class={`${styles.body} text-darkBlue`}>View, sort and filter every flight across a tour, and export them as a spreadsheet.  Daysheets eliminates the risk involved in manually creating flight grids.</p>
                    </div>

                    <div className=' bg-blue border-[1px] border-gray rounded-xl'>
                        <img src={dragAndDropFlight} alt="Plane tickets being uploaded to Daysheets" className="" />
                    </div>

                    <div>
                        <h5 class={`${styles.tag} pt-[16px]`}>Step 2</h5>
                        <h5 class={`${styles.h5} text-darkBlue`}>Build flight grids, & export with complete customization.</h5>
                        <p class={`${styles.body} text-darkBlue`}>View, sort and filter every flight across a tour, and export them as a spreadsheet.  Daysheets eliminates the risk involved in manually creating flight grids.</p>
                    </div>

                    <div className='bg-lightWhite py-[32px] border-[1px] border-gray rounded-xl'>
                            <img src={flightGrid} alt="A Flight grid in Daysheets" className="h-[400px] pl-[16px] object-cover object-left-top"/>
                    </div>



            </div>
            
            
            {/* Desktop */}
            
            <div className='gap-[32px] pt-[32px] hidden lg:grid lg:grid-cols-2 lg:grid-rows-[300px,480px]'>

                <div className="pb-16">
                        <div className="h-[2px] w-full bg-gray"></div>
                        <h5 class={`${styles.tag} pt-[16px]`}>Step 1</h5>
                        <h5 class={`${styles.h5} text-darkBlue`}>Upload Tickets.</h5>
                        <p class={`${styles.body} text-darkBlue`}>View, sort and filter every flight across a tour, and export them as a spreadsheet.  Daysheets eliminates the risk involved in manually creating flight grids.</p>
                </div>

                <div className=' bg-blue border-[1px] border-gray rounded-xl'>
                    <img src={dragAndDropFlight} alt="Plane tickets being uploaded to Daysheets" className="h-full object-cover object-right" />
                </div>

                <div>
                    <div className="h-[2px] w-full bg-gray"></div>
                    <h5 class={`${styles.tag} pt-[16px]`}>Step 2</h5>
                    <h5 class={`${styles.h5} text-darkBlue`}>Build flight grids, & export with complete customization.</h5>
                    <p class={`${styles.body} text-darkBlue`}>View, sort and filter every flight across a tour, and export them as a spreadsheet.  Daysheets eliminates the risk involved in manually creating flight grids.</p>
                </div>

                <div className='overflow-hidden bg-lightWhite border-[1px] border-gray rounded-xl pt-[32px]'>
                    <img src={flightGrid} alt="A Flight grid in Daysheets" className="w-[1000px] max-w-none"/>
                </div>

            </div>

        </div>
    
    
    </div>
  )
}

export default Flights