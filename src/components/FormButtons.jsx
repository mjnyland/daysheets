import React from 'react'
import styles from "../styles";

const FormButtons = () => {
  return (
    <div className='flex flex-col'>
        <button className={`${styles.button}`}>Download Daysheets</button>
        <button className={`${styles.button}`}>Schedule a demo</button>
    </div>
  )
}

export default FormButtons