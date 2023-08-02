import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import React, { useState } from 'react'
import { avatar } from '../assets'
import styles from "../styles";

const ReviewCard = (props) => {

    return (
    <div className='mx-auto flex flex-col items-center'>
        <div className={`flex flex-col h-full justify-between items-left px-[16px] ${props.opacity}`}>

            <h2 className={`text-[200pt] italic text-white opacity-[10%] h-[32px] text-left translate-x-[-64px] translate-y-[-120px]`}>"</h2>
            
            <h4 className={`${styles.h4} text-white pb-[16px] text-left`}>{props.review}</h4>
        
            <div className="flex flex-row gap-[12px] items-left mt-auto">
                <div className='flex flex-col items-left'>
                    <p className={`font-body font-bold text-xl text-white leading-[32px]`}>{props.name}</p>
                    <p className={`font-body text-white`}>{props.title}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard