import React from 'react';
import BonMwiru from '../assets/bonmwiru.jpeg';


const Exhibition = () => {
  return (
    <div className="pt-20 p-8">
    <div>
		<h2 className='text-center m-4'>UPCOMING</h2>
		<img src={BonMwiru} alt='woman playiong music' className='md:w-[20%]'/>
		<h5>Sarit Rooftop</h5>
		<p>Saturday 14th January 2023</p>
	</div>
	<div>
		<h3 className='text-center m-4'>PAST EXHIBITIONS</h3>
		<div className='flex flex-col items-center md:flex-row'>
		<div className='md:w-1/3'>
		<img src={BonMwiru} alt='man'className=''/>
		<h5>moi Avenue</h5>
		<p>November 2022</p>
		</div>
		<div className='md:w-1/3'>
		<img src={BonMwiru} alt='man'className='w'/>
		<h5>moi Avenue</h5>
		<p>November 2022</p>
		</div>

		<div className='md:w-1/3'>
		<img src={BonMwiru} alt='man'className='md:w-1/2'/>
		<h5>moi Avenue</h5>
		<p>November 2022</p>
		</div>
		</div>
	</div>
    
    
    </div>
    )
}
export default Exhibition ;