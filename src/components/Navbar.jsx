import React, { useState } from 'react';
import styles from "../styles"; // Import css modules stylesheet as styles
import { logo } from "../assets"; // Import assets
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const DownloadButton = ({ handleDownload }) => {
  return (
    <button className={`${styles.button} w-full`} onClick={handleDownload}>
      Download Daysheets
    </button>
  );
};

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleDownload = () => {
    const daysheetsUrl = 'https://www.daysheets.com'; // Replace this with the URL to your daysheets file
    // You can implement any additional logic here before triggering the download if needed.
    // For a simple file download, you can just change the location of the window to the daysheets URL.
    window.location.href = daysheetsUrl;
  };

  return (
    <div className={`${styles.navBox} bg-frostedGlass z-20 drop-shadow-md border-[1px] border-gray`}>
      <div className={`${styles.contentBox} flex justify-between items-center h-16 px-4`}> {/* Navbar contents */}
        <div>
          <Link to="/"><img src={logo} alt="Daysheets logo" className="h-[40px]" /></Link>
        </div>

        <div className='flex-row items-center gap-[16px] hidden md:flex'> {/* Navbar links and button */}
          <ul className='flex flex-row'>
            <li className='p-4 text-darkBlue'><Link to="/pricing">Pricing</Link></li>
            <li className='p-4 text-darkBlue'><Link to="/help">Help</Link></li>
          </ul>
          <DownloadButton handleDownload={handleDownload} />
        </div>

        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} color='darkBlue' /> : <AiOutlineMenu size={20} color='darkBlue' />}
        </div>

        {/* Mobile Nav */}
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-[100vh] py-[16px] px-[16px] border-r border-r-gray-900 bg-lightWhite ease-in-out duration-500' : 'fixed left-[-100%] top-0 w-[60%] h-[100vh] py-[16px] px-[16px] border-r border-r-gray-900 bg-lightWhite ease-in-out duration-500'}>

          <div><Link to="/"><img src={logo} alt="Daysheets logo" className="h-[64px]" /></Link></div>

          <ul className="pt-24 pb-8 text-black ">
            <li className='p-4 border-b border-gray-600 text-darkBlue'><Link to="/pricing">Pricing</Link></li>
            <li className='p-4 text-darkBlue'><Link to="/help">Help</Link></li>
          </ul>
          <DownloadButton handleDownload={handleDownload} />
        </div>
      </div>
    </div>
  )
}

export default Navbar;