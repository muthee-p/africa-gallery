import React, { useState } from 'react'
import { AiFillInstagram } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo2.png';
import LogoMobile from '../assets/logophone.png';
import {FaBars, FaTimes} from 'react-icons/fa'

const Nav = () => {
    const Links =[
      {name:"HOME",link:"/"},
      {name:"ARTWORKS",link:"/artwork"},
      {name:"EXHIBITION",link:"/exhibition"},
      {name:"CONTACT",link:"/contact"},
    ];
    const [open,setOpen]=useState(false);
    
  return (
    <div className='shadow-xl w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-[#041424] py-4 md:px-10 px-7'>
      <div >
      <NavLink to="/">
        <img src={ Logo} className='hidden lg:ml:8 lg:block w-[28%]' alt='logo'/>
        </NavLink>

        <NavLink to="/" >
        <img src={ LogoMobile} className='lg:hidden w-[10%]  md:w-[20%]' alt='logo'/>
        </NavLink>
    </div>
      
    <div onClick={() => setOpen(!open)} className='text-sm absolute right-8 top-6 cursor-pointer md:hidden'>
      <button name={open ? 'Close menu' : 'Open menu'}>
        {open ? <FaTimes /> : <FaBars />}
      </button>
    </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#041424] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-15 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-sm md:my-0 my-7'>
              <a href={link.link} className='text-[#73e5c8] hover:border-[#73e5c8] hover:border-b-2 duration-500'>{link.name}</a>
            </li>
          ))
        }
        
      </ul>
      <button className='md:block hidden'>
      <a href="https://www.instagram.com/african_paintings_pics/" className='social-icon self-center text-lg'>
        <AiFillInstagram /></a>
      </button>
      </div>
    </div>
  )
}

export default Nav