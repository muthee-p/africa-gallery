import React from 'react';
import BonMwiru from '../assets/bonmwiru.jpeg';
import Mchechu from '../assets/mchechu.jpeg';
import Kamnyoso from '../assets/kamnyoso.jpeg';
import Kupoayo from '../assets/kupoayo3.jpeg';

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
		<div className='md:w-1/3 md:p-2'>
		<img src={Kamnyoso} alt='man'className=''/>
		<h5>Mombasa, Kenya</h5>
		<p>January 2022</p>
		</div>
		<div className='md:w-1/3 md:p-2' >
		<img src={Mchechu} alt='man'className='w'/>
		<h5>Kenyatta Avenue, Tom's gallery</h5>
		<p>May 2022</p>
		</div>

		<div className='md:w-1/3 md:p-2'>
		<img src={Kupoayo} alt='man' className=''/>
		<h5>Kisumu, Kenya</h5>
		<p>February 2022</p>
		</div>
		</div>
	</div>
    
    
    </div>
    )
}
export default Exhibition ;
