import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

import { AiFillInstagram } from 'react-icons/ai';

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const activeLink = 'bg-[#041424] text-[#73e5c8] p-[.5rem]';
  const regular = 'p-[.5rem]';

  return(
    <nav className='right-0 fixed bg-[#041424] p-4 pl-8 lg:hidden w-[100%] shadow-lg bg-opacity-70 backdrop-blur rounded-b-xl '>
      <div className='flex justify-between '>

      <div className={`${
          isOpen ? "block" : "hidden" }`}>
          <ul className='flex '>
          <li className=' inline-flex items-center hover:border-[#73e5c8] hover:bg-[#041424] text-[#73e5c8] px-1 pt-1 hover:border-b-2 text-sm font-medium'>
            <NavLink to="/" className={({isActive}) => isActive? activeLink: regular}>Home</NavLink>
          </li>
          <li className='inline-flex items-center hover:border-[#73e5c8] hover:bg-[#041424] text-[#73e5c8] px-1 pt-1 hover:border-b-2 text-sm font-medium'>
            <NavLink to="/artwork" className={({isActive}) => isActive? activeLink: regular}>Artwork</NavLink>
          </li>
          <li className='inline-flex items-center hover:border-[#73e5c8] hover:bg-[#041424] text-[#73e5c8] px-1 pt-1 hover:border-b-2 text-sm font-medium'>
          <NavLink to="/artists"className={({isActive}) => isActive? activeLink: regular}>Artists</NavLink>
          </li>
          <li className='inline-flex items-center hover:border-[#73e5c8] hover:bg-[#041424] text-[#73e5c8] px-1 pt-1 hover:border-b-2 text-sm font-medium'>
          <NavLink to="/exhibition" className={({isActive}) => isActive? activeLink: regular}>Exhibition</NavLink>
          </li>
          <li className='inline-flex items-center hover:border-[#73e5c8] hover:bg-[#041424] hover:text-[#73e5c8] hover:border-b-2 px-1 pt-1  font-medium'>
          <a href="https://www.instagram.com/african_paintings_pics/" className='social-icon self-center text-lg'><AiFillInstagram /></a>
          </li>
          </ul>
      </div>
      <div className="md:hidden">
        <button 
        onClick={toggleMenu} 
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
        aria-label="Toggle sidebar">
        <svg
            className={`${isOpen ? "hidden" : "block"} h-4 w-4`}
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

           {/* Icon when sidebar is open */}
           <svg
            className={`${isOpen ? "block" : "hidden"} h-4 w-4`}
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      </div>
    </nav>
  )


}

export default SideNav;