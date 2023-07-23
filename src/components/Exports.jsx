import React from 'react'
import styles from "../styles";
import { exports, room, personnel, transfer, pdf } from "../assets";

const Exports = () => {
  return (
    <section className={`${styles.sectionBox} bg-lightWhite px-8`}>

        <div className={`${styles.contentBox}`}>
            
            <div className={`${styles.h2BoxFlat} pb-[16px] lg:pb-0`}>

                <div  class="bg-dimBlue text-blue px-6 py-2 rounded-full font-semibold w-fit mx-auto"><h5>Exports</h5></div>
                <h2 className={`${styles.h2} text-center text-darkBlue pt-[16px]`}>Endless exports with complete customization.</h2>
            
            </div>
            
            {/* Mobile */}
            <div className="flex flex-col lg:hidden text-darkBlue gap-[16px]">
                <div className='flex items-center gap-[8px]'>
                    <div>
                        <img src={ personnel } alt="CSV Illustration" className='max-h-[160px]'/>
                    </div>
                    <div>
                        <h5 className={`${styles.h5}`}>Rooming Lists</h5>
                        <p className={styles.body}>Send quick rooming lists to a hotel, or your travel agent.</p>
                    </div>
                </div>
                
                <div className='flex items-center gap-[8px]'>
                    <div>
                        <img src={ personnel } alt="CSV Illustration" className='max-h-[160px]'/>
                    </div>
                    <div>
                        <h5 className={`${styles.h5}`}>Personnel Manifests</h5>
                        <p className={styles.body}>Send quick rooming lists to a hotel, or your travel agent.</p>
                    </div>
                </div>
                <div className='flex items-center gap-[8px]'>
                    <div>
                        <img src={ transfer } alt="CSV Illustration" className='max-h-[160px]'/>
                    </div>
                    <div>
                        <h5 className={`${styles.h5}`}>Transfer Grids</h5>
                        <p className={styles.body}>Send quick rooming lists to a hotel, or your travel agent.</p>
                    </div>
                </div>
                <div className='flex items-center gap-[8px]'>
                    <div>
                        <img src={ pdf } alt="PDF Illustration" className='max-h-[160px]'/>
                    </div>
                    <div>
                        <h5 className={`${styles.h5}`}>Custom Day Sheets</h5>
                        <p className={styles.body}>Send quick rooming lists to a hotel, or your travel agent.</p>
                    </div>
                </div>
            </div>

            {/* Destop */}
            <div className='max-w-[1000px] mx-auto hidden lg:grid grid-cols-4 gap-[12px] justify-center items-center text-darkBlue'>
                <img src={ exports } alt="" className="col-span-4 w-[75%] mx-auto pb-[32px]"/>
                <img src={ personnel } alt="CSV Illustration" className="w-[160px]"/>
                <img src={ personnel } alt="CSV Illustration" className="w-[160px]"/>
                <img src={ transfer } alt="CSV Illustration" className="w-[160px]"/>
                <img src={ pdf } alt="PDF Illustration" className="w-[160px]"/>
                <div>
                    <p className={`text-xl font-bold text-darkBlue pb-[8px]`}>Rooming Lists</p>
                    <p className={styles.body}>Send quick rooming lists to a hotel, or your travel agent.</p>
                </div>
                <div>
                    <p className={`text-xl font-bold text-darkBlue pb-[8px]`}>Personnel Manifests</p>
                    <p className={styles.body}>Choose the necessary details to export, and go.</p>
                </div>
                <div>
                    <p className={`text-xl font-bold text-darkBlue pb-[8px]`}>Transfer Grids</p>
                    <p className={styles.body}>Send a grid to your ground service, or to the festival.</p>
                </div>
                <div>
                    <p className={`text-xl font-bold text-darkBlue pb-[8px]`}>Custom Day Sheets</p>
                    <p className={styles.body}>Add local weather in one click.  How cool is that? </p>
                </div>
            </div>
        </div>

        

    </section>
  )
}

export default Exports