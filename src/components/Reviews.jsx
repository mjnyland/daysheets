import React from 'react'
import styles from "../styles";
import { avatar } from "../assets";

const Reviews = () => {
  return (
    <div className={`${styles.sectionBox} px-4 bg-blue h-[1000px] md:h-[900px] lg:h-[900px] overflow-hidden relative`}>

      <div className={`${styles.contentBox} bg-blue`}>

        {/* Heading */}

        <div className={`${styles.h2Box} pb-[80px]`}>

          <h2 className={`${styles.h2} text-center pt-[16px] text-white`}>Endless exports with complete customization.</h2>
          
          <div>
            <p className={`text-white text-center`}>Daysheets introduces a new era of efficiency to tour management, with easy tabbing, speedy imports, and time-saving shortcuts.</p>
          </div>

        </div>       

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px]">

          {/* Review 1 */}
          <div className="flex flex-col gap-4 bg-white px-[16px] py-[16px] rounded-xl shadow-lg">
            
            <span className={`text-darkBlue text-xl`}>“I LOVE the rooms in this hotel. Artist approved! 👍”</span>

            <div className='h-[1px] w-full bg-gray'></div>
            
            <div className='flex flex-row items-center'>
              <img src={avatar} alt="Profile Image" className='w-[65px] h-[65px]'/>
              <div className='pl-[16px]'>
                <p className={`pb-[0px] text-darkGray font-semibold`}>Christian Russell</p>
                <p className={` text-darkGray`}>Singer</p>
              </div>
            </div>
          </div>
          
                    {/* Review 1 */}
                    <div className="flex flex-col gap-4 bg-white px-[16px] py-[16px] rounded-xl shadow-lg">
            
            <span className={`text-darkBlue text-xl`}>"Easy bus parking in Philly! Shhh, don’t tell anyone!"</span>

            <div className='h-[1px] w-full bg-gray'></div>
            
            <div className='flex flex-row items-center'>
              <img src={avatar} alt="Profile Image" className='w-[65px] h-[65px]'/>
              <div className='pl-[16px]'>
                <p className={`pb-[0px] text-darkGray font-semibold`}>Elwin Sharvill</p>
                <p className={` text-darkGray`}>Driver</p>
              </div>
            </div>
          </div>

                    {/* Review 1 */}
                    <div className="flex flex-col gap-4 bg-white px-[16px] py-[16px] rounded-xl shadow-lg">
            
            <span className={`text-darkBlue text-xl`}>“50 foot push and down 3 stairs for load in.”</span>

            <div className='h-[1px] w-full bg-gray'></div>
            
            <div className='flex flex-row items-center'>
              <img src={avatar} alt="Profile Image" className='w-[65px] h-[65px]'/>
              <div className='pl-[16px]'>
                <p className={`pb-[0px] text-darkGray font-semibold`}>Arlene McCoy</p>
                <p className={` text-darkGray`}>Production Manager</p>
              </div>
            </div>
          </div>

                    {/* Review 1 */}
                    <div className="flex flex-col gap-4 bg-white px-[16px] py-[16px] rounded-xl shadow-lg">
            
            <span className={`text-darkBlue text-xl`}>"Tanya is available from 11/12 - 12/13 for work!"</span>

            <div className='h-[1px] w-full bg-gray'></div>
            
            <div className='flex flex-row items-center'>
              <img src={avatar} alt="Profile Image" className='w-[65px] h-[65px]'/>
              <div className='pl-[16px]'>
                <p className={`pb-[0px] text-darkGray font-semibold`}>Tanya Wilson</p>
                <p className={` text-darkGray`}>Lighting Director</p>
              </div>
            </div>
          </div>

                    {/* Review 1 */}
                    <div className="flex flex-col gap-4 bg-white px-[16px] py-[16px] rounded-xl shadow-lg">
            
            <span className={`text-darkBlue text-xl`}>"Jacob is currently based in Lisbon, Portugal"</span>

            <div className='h-[1px] w-full bg-gray'></div>
            
            <div className='flex flex-row items-center'>
              <img src={avatar} alt="Profile Image" className='w-[65px] h-[65px]'/>
              <div className='pl-[16px]'>
                <p className={`pb-[0px] text-darkGray font-semibold`}>Jacob Jones</p>
                <p className={` text-darkGray`}>Rigger</p>
              </div>
            </div>
          </div>

                    {/* Review 1 */}
                    <div className="flex flex-col gap-4 bg-white px-[16px] py-[16px] rounded-xl shadow-lg">
            
            <span className={`text-darkBlue text-xl`}>“Best place for backline in Chicago, hands down.”</span>

            <div className='h-[1px] w-full bg-gray'></div>
            
            <div className='flex flex-row items-center'>
              <img src={avatar} alt="Profile Image" className='w-[65px] h-[65px]'/>
              <div className='pl-[16px]'>
                <p className={`pb-[0px] text-darkGray font-semibold`}>Gabriel Soares</p>
                <p className={` text-darkGray`}>Sound Technician</p>
              </div>
            </div>
          </div>

                    {/* Review 1 */}
                    <div className="flex flex-col gap-4 bg-white px-[16px] py-[16px] rounded-xl shadow-lg">
            
            <span className={`text-darkBlue text-xl`}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</span>

            <div className='h-[1px] w-full bg-gray'></div>
            
            <div className='flex flex-row items-center'>
              <img src={avatar} alt="Profile Image" className='w-[65px] h-[65px]'/>
              <div className='pl-[16px]'>
                <p className={`pb-[0px] text-darkGray font-semibold`}>John Doe</p>
                <p className={` text-darkGray`}> Tour Manager - Beyonce</p>
              </div>
            </div>
          </div>

                    {/* Review 1 */}
                    <div className="flex flex-col gap-4 bg-white px-[16px] py-[16px] rounded-xl shadow-lg">
            
            <span className={`text-darkBlue text-xl`}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</span>

            <div className='h-[1px] w-full bg-gray'></div>
            
            <div className='flex flex-row items-center'>
              <img src={avatar} alt="Profile Image" className='w-[65px] h-[65px]'/>
              <div className='pl-[16px]'>
                <p className={`pb-[0px] text-darkGray font-semibold`}>John Doe</p>
                <p className={` text-darkGray`}> Tour Manager - Beyonce</p>
              </div>
            </div>
          </div>

                    {/* Review 1 */}
                    <div className="flex flex-col gap-4 bg-white px-[16px] py-[16px] rounded-xl shadow-lg">
            
            <span className={`text-darkBlue text-xl`}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</span>

            <div className='h-[1px] w-full bg-gray'></div>
            
            <div className='flex flex-row items-center'>
              <img src={avatar} alt="Profile Image" className='w-[65px] h-[65px]'/>
              <div className='pl-[16px]'>
                <p className={`pb-[0px] text-darkGray font-semibold`}>John Doe</p>
                <p className={` text-darkGray`}> Tour Manager - Beyonce</p>
              </div>
            </div>
          </div>

                    {/* Review 1 */}
                    <div className="flex flex-col gap-4 bg-white px-[16px] py-[16px] rounded-xl shadow-lg">
            
            <span className={`text-darkBlue text-xl`}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</span>

            <div className='h-[1px] w-full bg-gray'></div>
            
            <div className='flex flex-row items-center'>
              <img src={avatar} alt="Profile Image" className='w-[65px] h-[65px]'/>
              <div className='pl-[16px]'>
                <p className={`pb-[0px] text-darkGray font-semibold`}>John Doe</p>
                <p className={` text-darkGray`}> Tour Manager - Beyonce</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div>
        <div className="absolute bottom-0 left-0 w-full h-[160px] bg-gradient-to-t from-blue to-blank"></div>
      </div>

    </div>
  )
}

export default Reviews