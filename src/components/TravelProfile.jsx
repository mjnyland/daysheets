import React from 'react'
import styles from "../styles";
import { avatar, profileExport, profileRequest, iPhoneMock, profileExportM, profileRequestM  } from "../assets";

const TravelProfile = () => {
  return (
    <div className={`${styles.sectionBox} bg-lightWhite pb-[64px] px-[8px]`}>

        <div className={`${styles.contentBox}`}>
            {/* Heading */}
            <div className={`${styles.h2Box}`}>
                <div  class="bg-dimBlue text-blue px-6 py-2 rounded-full font-semibold w-fit mx-auto"><h5>Coming soon</h5></div>
                <h2 className={`${styles.h2} pb-[16px] text-center text-darkBlue pt-[16px]`}>Introducing <span className="text-blue">Travel Profiles</span>.</h2>
                <div>
                    <p className={`text-darkBlue ${styles.h2Body}`}>Daysheets introduces a new era of efficiency to tour management, with easy tabbing, speedy imports, and time-saving shortcuts.</p>
                </div>
            </div>
            {/* Grid */}
            <div className='grid grid-cols-1 lg:grid-cols-3 items-center gap-y-[64px] gap-x-[32px]'>

                <div>
                    <img src={ profileRequest } alt="Profile Requests" className='hidden md:inline'/>
                    <img src={ profileRequestM } alt="Profile Requests" className='md:hidden'/>
                </div>


                <div class="relative">
                    <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-lightWhite to-blank"></div>
                    <img src={ iPhoneMock } alt="Profile Requests" />
                </div>


                <div>
                    <img src={ profileExport } alt="Profile Requests" className='hidden md:inline'/>
                    <img src={ profileExportM } alt="Profile Requests" className='md:hidden'/>
                </div>



                <div className='flex flex-col justify-start mb-auto'>

                    <div className='my-auto'>
                        <h5 class={`${styles.tag} pt-[16px]`}>Request details</h5>
                        <h5 className={`${styles.h5} text-darkBlue`}>Request  travel profiles as team members join the tour.</h5>
                        <p class={`${styles.body} text-darkBlue`}>Choose the details you require and let Daysheets handle the rest. Your team will be guided to share all necessary information, right through the app.</p>
                    </div>

                </div>

                <div className='flex flex-col justify-start mb-auto' >

                    <div className='my-auto'>
                        <h5 class={`${styles.tag} pt-[16px]`}>Approve the request</h5>
                        <h5 className={`${styles.h5} text-darkBlue`}>Your team adds the missing details, and taps share. </h5>
                        <p class={`${styles.body} text-darkBlue`}>Members can store key details like passport and flyer numbers to share with any Daysheets tour.  Profiles can also be exported as a PDF for tours not as hip. </p>
                    </div>

                </div>

                <div className='flex flex-col justify-start mb-auto'>

                    <div className='my-auto'>
                        <h5 class={`${styles.tag} pt-[16px]`}>Export the details</h5>
                        <h5 className={`${styles.h5} text-darkBlue`}>Check missing details and export once all are submitted.</h5>
                        <p class={`${styles.body} text-darkBlue`}>Monitor travel profile statuses live. Spot a missing passport? Send a push alert.  Ready?  Export as a spreadsheet for travel agents or border crossings.</p>
                    </div>

                </div>
            
            
            
            </div>
        </div>

    </div>
  )
}

export default TravelProfile