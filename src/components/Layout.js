import React from 'react';
import {Outlet } from 'react-router-dom';
import Nav from './Nav';

import Footer from './Footer';

const Layout = () => {
  return (
    <div>
    
    	<Nav />
    <div className='flex justify-center items-center font-medium'>
       <div className=' p-4 pb-32 min-h-[100vh] lg:w-[85%]'>
    		<Outlet />
    </div>
    </div>
   
    
    	<Footer />

    </div>
    
    )
}
export default Layout ;