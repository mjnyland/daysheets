import React, { useState } from 'react';
import styles from "../styles"; // Import css modules stylesheet as styles
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { InlineWidget, PopupWidget, PopupModal } from "react-calendly";


const FormCalendly = () => {

  const [isHidden, setIsHidden] = useState(true);
  

  const toggleDisplay = () => {
    setIsHidden(!isHidden);
  };



  return (
    <div>

      {/* Shading */}
      <div className={`fixed left-0 top-0 right-0 h-[100vh] mx-auto justify-center items-center bg-dimBlack z-40 ${isHidden ? 'hidden' : 'flex'}`}>
        
        {/* Modal */}
        <div className={`flex flex-col lg:flex-row`}>
          
         
          
        </div>
      </div>

    </div>
  )
}

export default FormCalendly