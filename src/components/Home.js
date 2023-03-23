import React from 'react';
// import { Swiper, SwiperSlide } from "swiper/react";
//   // import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
//  import 'swiper/css/pagination';

// import { Autoplay, Navigation, Pagination } from "swiper";


import Atus from '../assets/Atus.jpeg';
import MchechuTwo from '../assets/mchechu2.jpeg';
import MchechuThree from '../assets/mchechu3.jpeg';
import BonMwiru from '../assets/bonmwiru.jpeg';
import KamyosoOne from '../assets/kamyoso1.jpeg';
import KamyosoTwo from '../assets/kamyoso2.jpeg';
import KupoayoTwo from '../assets/kupoayo2.jpeg';
// import Gallery from "../assets/gallery.jpg";


const Home = () => {
  return (
    <div className="pt-10 md:pt-32">
    <div className='flex flex-col items-center md:flex-row mb-8'>
      {/* <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      > */}
        
        	<img src={ Atus} alt='maasai woman' className='md:w-[30%] '/>
        

        {/* <SwiperSlide className='absolute left-[25%]'>
        	<img src={ MchechuThree} alt='Lion'className='w-[30%]'/>
        </SwiperSlide>

        <SwiperSlide className='absolute left-[25%]'>
        	<img src={ KamyosoOne} alt='zebra drinking water' className='w-[30%]'/>
        </SwiperSlide>

        <SwiperSlide className='absolute left-[25%]'>
        	<img src={ BonMwiru} alt='lady playing the instrument' className='w-[30%]'/>
        </SwiperSlide>

		<SwiperSlide className='absolute left-[25%]'>
        	<img src={ KupoayoTwo} alt='maasai man' className='w-[30%]'/>
        </SwiperSlide> */}
        
      {/* </Swiper> */}
   <div className='flex flex-col items-center p-8 md:w-1/2 '>
	<p className='text-[#73e5c8] text-left font-bold'>You Imagine. We create. </p>
	<h1 className='font-serif text-[#041424] text-6xl text-center '>Africa Paints 
	<span className='leading-loose'> and Pictures</span></h1>
	
   </div>
    
   
    </div>
	<div class=" text-center  h-[30%] mb-8 ">
		<h2>About Us</h2>
		
		<div className='w-[] p-4 flex items-center'>
		<p className=''>
			Lorem ipsum dolor sit amet. Cum placeat dolor id ipsa autem est aperiam suscipit aut debitis saepe qui nihil alias eos minima omnis. In accusantium aliquid id possimus voluptatibus et iusto similique eos excepturi accusamus. Qui modi tempore ut facilis labore eos nesciunt quia et Quis libero et dolores ipsa qui accusantium velit!

			Et corporis dolorem aut vitae rerum qui quos porro ad quidem voluptates ut veritatis ipsam. Et quidem porro aut eligendi explicabo qui voluptatem veritatis ad praesentium numquam. Id quasi ratione est modi omnis 33 culpa veniam in incidunt ipsa ut maxime tempora ea reprehenderit magni. Et dolore reiciendis aut dolores vero vel vitae totam?
		</p>
		</div>
		
	</div>

    
	
	<div className=' md:h-[30%] mb-8 text-center' >
		<h2 className='text-center'> New this weeks art</h2>
		<p className='text-center'>Our top picks of the week voted by the staff</p>
		<div className='flex flex-col items-center md:flex-row'>

		<div className='md:w-1/3 text-center'>
			<div className=' h-[25rem] flex justify-center items-center '>
				<img src={MchechuThree} alt='Lion art' className='max-h-[20rem] self-center' />
			</div>
			<h5>Lion </h5>
			<p>AI art on Print</p>
			<p>50 x 50 in</p>
		</div>

		<div className='md:w-1/3 text-center'>
			<div className='h-[25rem] flex justify-center items-center'>
				<img src={KamyosoTwo} alt ='two elephants' className='max-h-[20rem]'  />
			</div>
			<h5>Elephants </h5>
			<p>Oil on linen</p>
			<p>100 x 80 in</p>
		</div>

		<div  className='md:w-1/3'>
			<div className='h-[25rem] flex justify-center items-center'>
				<img src={MchechuTwo} alt='Zebra' className='max-h-[20rem]' />
			</div>
			<h5>Zebra </h5>
			<p>Photograph on Print</p>
			<p>100 x 80 in</p>
		</div>

		</div>
	</div>

	<div className=' h-[30%] '>
		<h2  className='text-center'>New Artists</h2>
		<div className='flex flex-col items-center md:flex-row'>

		<div className=' md:w-1/3 text-center'>
			<img src={KupoayoTwo} alt='dogs' className=' max-h-[20rem]' />
			<h5>Kupoayo </h5>
		</div>
		<div className='md:w-1/3 text-center'>
			<img src={BonMwiru} alt='woman' className=' max-h-[20rem]'/>
			<h5>Bon Mwiru </h5>
		</div>
		<div className='md:w-1/3 text-center'>
			<img src={KamyosoOne} alt='woman' className=' max-h-[20rem]'/>
			<h5>Kamyoso </h5>
		</div>
		</div>
	</div>
    
    
    </div>
    )
}
export default Home ;